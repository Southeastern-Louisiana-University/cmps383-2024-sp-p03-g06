import { Divider, Box } from "@mantine/core";
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

/* export default function(){

    const [searchTerm, setSearchTerm] = useState("");
    return(
        <>
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
                <Divider orientation="vertical" flexItem  variant="middle"/>
                <Link
                  
                  onClick={handleOpen} to={''}                  
                >
                  Choose Date(s)
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                </Box>
              </Toolbar>
            </AppBar>
        </>
    )
} */