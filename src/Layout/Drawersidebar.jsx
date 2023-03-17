import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { ListItemText, ListItemButton ,ListItemIcon ,ListItem ,IconButton,Typography,List,Toolbar, Box,AppBar} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DrawerSidebar() {
const [open, setOpen] = React.useState(false);
return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  >
        <Toolbar />
        <List>
          {SideBarData.map((item, i) => {
            return (
              <ListItem key={i} disablePadding sx={{ display: 'block' }}>
                <Link to={item.path}>
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}>
                    <ListItemIcon sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}>{item.icon}</ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary={item.title}></ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
