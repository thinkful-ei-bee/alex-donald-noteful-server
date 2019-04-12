'use strict'
const notefulService ={
  getAllFolders(knex){
    return knex.select('*').from('noteful_folders');
  },
  getAllNotes(knex){
    return knex.select('*').from('noteful_notes');
  },
  getByFolderId(knex,id){
    return knex.from('noteful_folders').select('*').where('id', id).first();
  },
  getByNoteId(knex,id){
    return knex.from('noteful_notes').select('*').where('id', id).first();
  },
  addFolder(knex,newFolder){
    return knex
      .insert(newFolder)
      .into('noteful_folders')
      .returning('*')
      .then(rows=>{
        return rows[0];
      });
  },
  addNote(knex,newNote){
    return knex
      .insert(newNote)
      .into('noteful_notes')
      .returning('*')
      .then(rows=>{
        return rows[0];
      });
  },
  deleteFolder(knex,id){
    return knex('noteful_folder')
      .where({ id })
      .delete();
  },
  deleteNote(knex,id){
    return knex('noteful_notes')
      .where({ id })
      .delete();
  },
  updateFolder(knex,id,newFolderFields){
    return knex('noteful_folders')
      .where({ id })
      .update(newFolderFields);
    
  },
  updateNote(knex,id,newNoteFields){
    return knex('noteful_notes')
      .where({ id })
      .update(newNoteFields);
    
  },
};

module.exports = notefulService;