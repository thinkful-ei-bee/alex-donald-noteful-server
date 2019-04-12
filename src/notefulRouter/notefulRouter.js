'use strict';
const express = require('express');
const path = require('path');
const xss = require('xss');
const logger = require('../logger');
const notefulService = require('./notefulService');

const notefulRouter = express.Router();
const bodyParser = express.json();

const cleanNotes = note =>({
  id:note.id,
  name:xss(note.name),
  content:xss(note.content),
  folderid:note.folderid,
  modified:note.modified,
});

const cleanFolders = folder =>({
    id:folder.id,
    name:xss(folder.name),
  });

notefulRouter
    .route('/api/folders')
    .get((req,res)=>{
        notefulService.getAllFolders(req.app.get('db'))
        .then(note=>{
            res.json(note.map(cleanFolders))
        });
    })
    .post(bodyParser, (req, res, next) => {
        // move implementation logic into here
        const { name} = req.body;
        if(!name){
          logger.error('No name entered');
          return res.status(400).send('name must not be blank');
        }
    
        const folders = {name};
    
        notefulService.addFolder(req.app.get('db'),folders)
          .then(folder =>{
            res.status(201).location(path.posix.join(req.originalUrl,`${folder.id}`)).json(cleanFolders(folder));
          })
          .catch(next);
    });

notefulRouter
    .route('/api/notes')
    .get((req,res)=>{
        notefulService.getAllNotes(req.app.get('db'))
            .then(note=>{
                res.json(note.map(cleanNotes))
            });
    })
    .post(bodyParser, (req, res, next) => {
        // move implementation logic into here
        const { name, content, modified } = req.body;
        const folderid=req.body.folderId;
        if(!name){
          logger.error('No name entered');
          return res.status(400).send('name must not be blank');
        }
    
        const notes = {name,content,folderid,modified};
    
        notefulService.addNote(req.app.get('db'),notes)
          .then(note =>{
            res.status(201).location(path.posix.join(req.originalUrl,`${note.id}`)).json(cleanNotes(note));
          })
          .catch(next);
    });

notefulRouter
    .route('/api/notes/:id')
    .delete((req, res, next) => {
        const { id } = req.params;
        console.log(id);
        notefulService.deleteNote(req.app.get('db'),id)
            .then(() =>{
            logger.info(`Bookmark with id ${id} deleted.`);
            res.status(204).end();
          })
          .catch(next);
    
      })


module.exports = notefulRouter;

