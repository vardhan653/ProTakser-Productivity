const BASE_URL = 'http://localhost:5000/api';

export const fetchNotes = async () => {
    const response = await fetch(`${BASE_URL}/notes`);
    return response.json();
};

export const createNote = async (note) => {
    const response = await fetch(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    });
    return response.json();
};

export const deleteNote = async (id) => {
    await fetch(`${BASE_URL}/notes/${id}`, { method: 'DELETE' });
};
