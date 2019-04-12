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
  folderId:note.folderId,
  modified:note.modified,
});

const cleanFolders = folder =>({
    id:folder.id,
    name:xss(folder.name),
  });

notefulRouter
    .route('/')
    .get((req,res)=>{
        //get all folders/notes
    })
notefulRouter
    .route('/api/folder')
    .get((req,res)=>{
      //get all folders
    })
    .post((req,res)=>{
        //add folder
    })

notefulRouter
    .route('/api/notes')
    .get((req,res)=>{
        //get all notes
    })
    .post((req,res)=>{
        //add note
    })

notefulRouter
    .route('api/folder/:id')
    .get((req,res)=>{
        //get all notes for that folder
    })

notefulRouter
    .route('api/notes/:id')
    .get(()=>{

    })
    .delete(()=>{

    })


module.exports = notefulRouter;

