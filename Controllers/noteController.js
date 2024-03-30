const Note = require("../Models/noteModel");

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().select('title body createdAt');
        res.json({
            notesData : notes
        });
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}


const addNote = (req, res) => {
    const {title, body} = req.body

    const newNote = new Note({ title, body });

    newNote.save().then(() => {
        res.json("note added");
    }).catch(err => console.log(err));
}

const updateNote = (req, res) => {
    Note.findById(req.params.id).then(note => {
        const {title, body} = req.body;
        note.title = title;
        note.body = body;
        note.save().then(() => {
            res.json("note updated");
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

const deleteNote = (req, res) => {
    Note.findByIdAndDelete(req.params.id).then(note => {
        res.json("note deleted");
    }).catch(err => console.log(err));
}

const noteById = (req, res) => {
    Note.findById(req.params.id).then(note => {
        res.json({ note });
    }).catch(err => console.log(err));
}

module.exports = {
    getAllNotes,
    addNote,
    updateNote,
    deleteNote,
    noteById
}

