import './HomePage.css';

import { AppBar, Badge, Box, Divider, IconButton, InputBase, Menu, MenuItem, Modal, ThemeProvider, Toolbar, createTheme, styled } from "@mui/material";
import { Space, Container } from '@mantine/core';
import React, { useEffect, useState } from "react";
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import { HotelDto } from '../../Dtos/HotelDto';
import CitySearch from '../../features/shared/CitySearch';
import { Link } from 'react-router-dom';







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

const pastMonth = new Date(2024, 1, 1);


function App() {

  const [hotels, setHotels] = useState<HotelDto[]>()
  /* const {get, request, response, data, loading, error } = useFetch({data: []})
  console.log('request', request)
  console.log('response', response)

  const loadHotels = useCallback(async() => {
    const initialHotels = await get('/api/hotels')

    console.log('(loadHotels) ok', ok)
    console.log('(loadHotels) response.ok',response.ok)
    console.log('(loadHotels) response.data', response.data)
    console.log('(loadHotels) data', data)

    if (response.ok) setHotels(initialHotels.data)
    
  }, [get, response])

  useEffect(() =>{
    loadHotels()
  }, [loadHotels]) */

  useEffect(() =>{
    fetch('/api/hotels', {
      method: "get",
    })
      .then<HotelDto[]>((r) => r.json())
      .then((j) => {
        setHotels(j)
      })
  }, [])


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const defaultSelected: DateRange = {
      from: pastMonth,
      to: addDays(pastMonth, 4)
    };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          </Box>
        </Modal>
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

export default App;
