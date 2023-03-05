import React from 'react';
import { AppBar, Typography,  Toolbar,Link ,IconButton} from '@mui/material';

function Header() {
  return (
    <div>
      <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color=" secondary" aria-label="menu" sx={{ mr: 2 }}>
      <Link to="About">about</Link>
    
    </IconButton>
    <IconButton edge="start" color=" secondary" aria-label="menu" sx={{ mr: 2 }}>
      <Link to="CardList3">list3</Link>
    
    </IconButton>
    <Typography variant="h6" color=" secondary" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
    </div>
  )
}

export default Header
