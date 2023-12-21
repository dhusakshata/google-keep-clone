import React, { useState } from 'react';
import ColorPicker from './colorpicker';

import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ note, editNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleEdit = () => {
    const updatedNote = {
      title: editedTitle,
      content: editedContent,
    };

    editNote(note.id, updatedNote);
    setIsEditing(false);
  };
  
  const handleColorChange = (color) => {
 
    editNote(note.id, { color });
  };

  return (
    <form className='fornote' style={{ backgroundColor: note.color }}>
      <div className="note" >
      {isEditing ? (
        <div>
          
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            placeholder='write a Note...'
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <ColorPicker color={note.color} setColor={handleColorChange} />

          <IconButton onClick={handleEdit} color="primary">
              <SaveIcon />
            </IconButton>
        </div>
        
      ) : (
        <div style={{width:note.width, backgroundColor: note.color }}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          
          <ColorPicker color={note.color} setColor={handleColorChange} />
          
          <div className='note-btn'>
            <IconButton onClick={() => setIsEditing(true)} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteNote(note.id)} color="error">
                <DeleteIcon />
              </IconButton>
          </div>
          </div>
       
      )}
    </div>
    </form>
  );
};

export default Note;