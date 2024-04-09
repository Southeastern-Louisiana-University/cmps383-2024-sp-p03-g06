import "./HomePage.css";

import { AppBar, Badge, Box, Divider, IconButton, InputBase, Link, Menu, MenuItem, Modal, ThemeProvider, Toolbar, createTheme, styled } from "@mui/material";
import { Space, Container } from '@mantine/core';
import React, { useEffect, useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import { HotelDto } from '../Hotel/HotelDto';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  Modal,
  ThemeProvider,
  Toolbar,
  createTheme,
  styled,
} from "@mui/material";
import { Paper, Space, Container } from "@mantine/core";
import React, { useEffect, useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import Carousel from "react-material-ui-carousel";
import { HotelDto } from "../Hotel/HotelDto";
import { useNavigate } from "react-router-dom";
import ListHotels from "../Hotel/List-Hotels";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pastMonth = new Date(2024, 1, 1);




function Item(props: any) {
  return (
    <Paper>
      <img className="carousel-image" src={props.item.image} />
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const photos = [
  {
    image:
      "https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=",
    title: "Best forests to visit in North America",
    category: "nature",
  },
  {
    image:
      "https://media.istockphoto.com/id/636484522/photo/hotel-resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=ET-8reopQEIhH4YYee6tqlFpfKEg19oLRRCJX3-56rs=",
    title: "Hawaii beaches review: better than you think",
    category: "beach",
  },
  {
    image:
      "https://media.istockphoto.com/id/528487340/photo/beach-living-on-sea-view.jpg?s=612x612&w=0&k=20&c=-txUQWbvHNG6jOAPQrduesK9foBw8hQid6f3Y2GnwYo=",
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "nature",
  },
  {
    image:
      "https://media.istockphoto.com/id/535761281/photo/couple-relaxing-on-hotel-rooftop.jpg?s=612x612&w=0&k=20&c=zFBkqlcXu7-HF9XJ6l1Z7UqkWiIqe5z6kW9pizXnrZs=",
    title: "Aurora in Norway: when to visit for best experience",
    category: "nature",
  },
  {
    image:
      "https://media.istockphoto.com/id/531757471/photo/lugano-in-switzerland.jpg?s=612x612&w=0&k=20&c=Siu7nWpdekR7ZHtAziW5KzedjCgUNqn16MP2FpkbvDg=",
    title: "Best places to visit this winter",
    category: "tourism",
  },
  {
    image:
      "https://media.istockphoto.com/id/609688086/photo/hotel-buildings-with-yachts-and-palm-trees.jpg?s=612x612&w=0&k=20&c=tb9QQ2A4ZUVY_mMC102XXEFRDK4Xz_Ifcm5iIYihGJc=",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
  },
];

function App() {
  const [hotels, setHotels] = useState<HotelDto[]>();
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

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/hotels", {
      method: "get",
    })
      .then<HotelDto[]>((r) => r.json())
      .then((j) => {
        setHotels(j);
      });
  }, [hotels]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

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
            <DayPicker
              id="test"
              mode="range"
              defaultMonth={pastMonth}
              selected={range}
              footer={footer}
              onSelect={(a) => {
                console.log(a);
                setRange(a);
              }}
            />
          </Box>
        </Modal>
        <Container>
          <AppBar position="static" className="search-bar">
            <Toolbar>
              <Search>
                <StyledInputBase
                  placeholder="Select Destination…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Link component={"button"} onClick={handleOpen}>
                Choose Date(s)
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          {renderMenu}
        </Container>
        <Space h="md"/>
        <Container className="carousel-container">
          <Carousel className="carousel">
            {photos.map((photo, i) => (
              <Item key={i} item={photo} />
            ))}
          </Carousel>
        </Container>
        <Space h="md" />
        <Container>
          <button className="button" onClick={() => navigate("/hotels")}>
            List Hotels
          </button>

          {hotels?.map((hotel) => {
            return (
              <>
                <div>Hotels</div>
                <p>{hotel.name}</p>
              </>
            );
          })}
        </Container>
      </ThemeProvider>
    </>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#DEDEDE",
    },
  },
});

export default App;
