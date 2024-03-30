const express = require('express');
const { getAllNotes, addNote, updateNote, deleteNote, noteById } = require('../Controllers/noteController');

const noteRoutes = express.Router();

noteRoutes.get('/notes', getAllNotes);
noteRoutes.post('/notes/add', addNote);
noteRoutes.put('/notes/:id', updateNote);
noteRoutes.delete('/notes/:id', deleteNote);
noteRoutes.get('/notes/:id', noteById);


module.exports = {
    noteRoutes
}

