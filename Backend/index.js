const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(express.json());

// Load data from file
let notes = JSON.parse(fs.readFileSync('./data.json'));

// Get all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Create a new note
app.post('/api/notes', (req, res) => {
    const newNote = { id: Date.now(), ...req.body };
    notes.push(newNote);
    fs.writeFileSync('./data.json', JSON.stringify(notes, null, 2));
    res.status(201).json(newNote);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== parseInt(req.params.id));
    fs.writeFileSync('./data.json', JSON.stringify(notes, null, 2));
    res.status(200).json({ message: 'Note deleted successfully' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
