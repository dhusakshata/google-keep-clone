

import React from 'react';
import { IconButton } from '@mui/material';
import { Note ,Notifications,Edit,Archive,Delete,} from '@mui/icons-material';

const Sidebar = () => {
  
  return (
    <aside className="sidebar">
     
     <IconButton>
      <Note />
      </IconButton>

      <IconButton>
      <Notifications />
      </IconButton>

      <IconButton>
      <Edit />
      </IconButton>
      
      <IconButton>
      <Archive />
      </IconButton>
      <IconButton>
      <Delete />
      </IconButton>

      {/* Add more buttons with icons as needed */}
    </aside>
  );
};

export default Sidebar;