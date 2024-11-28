import React from 'react';

function NotesList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            {notes.map(note => (
                <div key={note.id} className="note">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => onDelete(note.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default NotesList;
