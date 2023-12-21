import React, { useState } from 'react';
import ColorPicker from './colorpicker';

//some Material ui icons
import AddIcon from '@mui/icons-material/Add';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff'); // Default color

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== '' || content.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title,
        content,
        color,
      };

      addNote(newNote);

      // Reset form fields
      setTitle('');
      setContent('');
      setColor('#fffff');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="My Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <textarea
        placeholder="Write a note here...."
        rows={5}

        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
     <div className='titons'>
      <AddAlertOutlinedIcon/>
      <PhotoOutlinedIcon/>
      <ArchiveOutlinedIcon/>
      <MoreVertOutlinedIcon/>
      <UndoIcon/>
      <RedoIcon/>
     </div>

       <button type="submit"> <AddIcon/> </button>

      <ColorPicker color={color} setColor={setColor} />
     
    </form>
  );
};

export default NoteForm;