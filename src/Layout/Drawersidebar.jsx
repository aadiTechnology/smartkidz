import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, Typography, Box, Drawer, IconButton,  ListItem, ListItemText, List, ListItemIcon } from '@mui/material';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';
function Drawersidebar() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div>
      <Box>

        <Drawer
          anchor="left"
          open={isOpen}
          variant="permanent"
          onClose={() => setIsOpen(false)}
        >

          <Stack width={200} spacing={2}>
            <Typography variant='h5'>
              Drawer
            </Typography>
            <List>
              {SideBarData.map((item, i) => {
                return (
                   <ListItem key={i}  >
                    <Link to={item.path}>
                    <ListItemText primary={item.title}></ListItemText>
                    </Link>
                   </ListItem>
                 );
              })}
             </List>
          </Stack>
        </Drawer>
      
      </Box>
    </div>
  )
}

export default Drawersidebar
