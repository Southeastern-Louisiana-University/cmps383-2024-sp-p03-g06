import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './MainLayout.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext";
import UserDto from "../../UserDto";
import useFetch from "use-http";




export default function MainLayout() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState<null | undefined | UserDto>(undefined);

  useFetch(
    "/api/authentication/me",
    {
      onNewData: (_, x) => {
        console.log(x);
        if (typeof x === "object") {
          setCurrentUser(x);
        } else {
          setCurrentUser(null);
        }
      },
    },
    []
  );

  useEffect(() => {
    console.log("layout loaded");
  }, []);

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

              </Button>
              <nav>
      <Link to="/login">Login</Link>
      {authContext?.user === undefined ? (
        <></>
      ) : authContext?.user !== null ? (
        <>
          Current user: {authContext.user.userName}
        </>
      ) : (
        <>Not logged in</>
      )}
    </nav>
    <AuthContext.Provider value={{ user: currentUser, setUser: setCurrentUser }}>

    </AuthContext.Provider>
    
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
