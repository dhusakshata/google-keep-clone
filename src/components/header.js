import React, { useState } from 'react';
import logo from '../Images/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { List, Refresh, Settings  } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
// import refresh from '../Images/refresh.jpg';
// import setting from '../Images/setting.jpg';
// import icon from '../Images/icon.jpg';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  return (
    <nav className="navbar">
    <div className='nav-left'> 
   
      <img src={logo} alt="logo" />
    <h1>keep</h1>
    </div>

    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className='icons'>
    <MenuIcon/>
    <Refresh/>
    <List/>
    <Settings/>
    <AppsIcon/>
    <AccountCircleIcon/>
    </div>

   
  </nav>
);
}

export default Header;