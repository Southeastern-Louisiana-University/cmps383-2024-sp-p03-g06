import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CityDto } from "../../Dtos/CityDto";
import { useFetch } from "use-http";
import { Container, Space, Title } from "@mantine/core";
import './CitySearch.css';
import { AppBar, Toolbar } from "@mui/material";


export default function CitySearch(){

    const [params] = useSearchParams();
    const searchTerm = params.get("searchTerm");
    console.log(searchTerm);
    const {
      data: cities,
      loading,
      error,
    } = useFetch<CityDto[]>(
      "/api/cities/find",
      {
        method: "post",
        body: {
          searchTerm: searchTerm,
        },
      },
      [searchTerm]
    );

    //const hotels = cities?.hotels
    
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return (
        <div>
          Error... <button type="button"> try again</button>
        </div>
      );
    }

    const [NewSearchTerm, setSearchTerm] = useState("");

    return (
      <>
        <Container>
            <AppBar position="static" className="search-bar">
              <Toolbar>
                <label htmlFor="search">Search Destination</label>
                <input id="search" value={NewSearchTerm} onChange={(e) => setSearchTerm(e.target.value ?? "")}></input>
                <Link 
                  onClick={(e) => (!searchTerm ? e.preventDefault() : null)}
                  to={`/find-city?searchTerm=${encodeURIComponent(NewSearchTerm)}&start=now`}
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
        <div>
          <ul>
            {cities?.map((city) => (
              <div key={city.id}>
                <Title>
                  Found these hotels in {city.location}
                </Title>
                <Space></Space>
                <li className="hotel-listing">
                  <link>{}</link>
                </li>
              </div>
            ))}
          </ul>
        </div>
        </>
      );
}