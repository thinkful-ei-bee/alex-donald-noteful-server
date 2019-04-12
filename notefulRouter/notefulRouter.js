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

bookmarksRouter