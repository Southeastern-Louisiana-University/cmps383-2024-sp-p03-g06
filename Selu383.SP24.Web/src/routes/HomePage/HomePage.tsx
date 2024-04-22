import './HomePage.css';

import { AppBar, ThemeProvider, Toolbar, createTheme } from "@mui/material";
import { useState } from "react";

import { Link } from 'react-router-dom';





function HomePage() {


  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
        {/* Search Bar */}
        <div className="search-container">
          <AppBar position="static" className="search-bar">
            <Toolbar>
              <label htmlFor="search">Search Destination</label>
              <input
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value ?? "")}
              />
              <Link
                onClick={(e) => (!searchTerm ? e.preventDefault() : null)}
                to={`/find-city?searchTerm=${encodeURIComponent(
                  searchTerm
                )}&start=now`}
                aria-disabled={!searchTerm}
              >
                Search
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
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
