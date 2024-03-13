import { AppBar, Badge, Box, Button, Container, Divider, IconButton, InputBase, Menu, MenuItem, Modal, ThemeProvider, Toolbar, Typography, createTheme, styled } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './MainLayout.css';
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { MantineProvider} from "@mantine/core";
import MenuIcon from '@mui/icons-material/Menu';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <>
      
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography 
                variant="h4" 
                component="div" 
                sx={{ flexGrow: 1 }}
                
              >
                EnStay
              </Typography>
              <Button 
                color="inherit"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Box>
        </ThemeProvider>
        <Outlet />
      
    </>
  );
}


const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#51435F',
      
    },
  },

  typography: {
    fontFamily:[
      'Times New Roman'
    ].join(',')
  }
});


/* export function MainLayout() {
  
  return (
    <>
      <div className="navigation">
        <nav>
          <button onClick={() => navigate("/")}>Main Page</button>
          <button onClick={() => navigate("/reservations")}>Reservations</button>
        </nav>
      </div>
      <hr></hr>
      <Outlet />
    </>
  );
} */
