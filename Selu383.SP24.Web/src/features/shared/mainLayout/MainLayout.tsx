import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import './MainLayout.css';

import MenuIcon from '@mui/icons-material/Menu';









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
                className="enstay-title"
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
