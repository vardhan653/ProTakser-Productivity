import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import './styles.css';
import { fetchNotes, createNote, deleteNote } from './api';

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '' });

    useEffect(() => {
        fetchNotes().then(setNotes);
    }, []);

    const handleCreate = async () => {
        const note = await createNote(newNote);
        setNotes([...notes, note]);
        setNewNote({ title: '', content: '' });
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="App">
            <h1>Productivity App</h1>
            <div className="new-note">
                <input
                    type="text"
                    placeholder="Title"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <textarea
                    placeholder="Content"
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                />
                <button onClick={handleCreate}>Add Note</button>
            </div>
            <NotesList notes={notes} onDelete={handleDelete} />
        </div>
    );
}

export default App;
