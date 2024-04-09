import './HomePage.css';

import { AppBar, ThemeProvider, Toolbar, createTheme } from "@mui/material";
import { Container } from '@mantine/core';
import { useState } from "react";
import { Link } from 'react-router-dom';




function HomePage() {


  

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
            <AppBar position="static" className="search-bar">
              <Toolbar>
                <label htmlFor="search">Search Destination</label>
                <input id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value ?? "")}></input>
                <Link 
                  onClick={(e) => (!searchTerm ? e.preventDefault() : null)}
                  to={`/find-city?searchTerm=${encodeURIComponent(searchTerm)}&start=now`}
                  aria-disabled={!searchTerm}
                >
                  Search
                </Link>
                {/* <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                </Box> */}
              </Toolbar>
            </AppBar>
        </Container>
      </ThemeProvider> 
    </>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
      
    },
    secondary: {
      main: '#DEDEDE'
    }
  },
});

export default HomePage;
