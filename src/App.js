import React, { useState, useEffect } from 'react';
import Note from './components/Note'
import NoteForm from './components/NoteForm';
import Header from './components/header';
import Sidebar from './components/Sidebar';

import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
    
  //   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  //   setNotes(savedNotes);
  // }, []);

  // useEffect(() => {
    
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }, [notes]);
  
  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      console.log('Loaded notes from local storage:', savedNotes);
      setNotes(savedNotes);
    } catch (error) {
      console.error('Error loading notes from local storage:', error);
    }
  }, []);
  
  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(notes));
      console.log('Saved notes to local storage:', notes);
    } catch (error) {
      console.error('Error saving notes to local storage:', error);
    }
  }, [notes]);
  

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const editNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };

  const deleteNote = (id) => {
   // e.preventDefault();
    const confirmDelete = window.confirm('Are you sure you want to delete this note?');
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
    
  };

  // Filter notes based on the search query
  const handleSearch = (query) => {
    
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );

    setNotes(filteredNotes);
  };

  return (
    <div className="app">
 
      <Header onSearch={handleSearch} />
      
      <div className='Main'>
      <Sidebar/>

      <div className='addnotes'>

       <NoteForm addNote={addNote} />  
       
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
</div>
</div>
    
  );
};

export default App;