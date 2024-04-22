import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "use-http";
import "./CitySearch.css";
import { HotelDto } from "../../Dtos/HotelDto";
import { AppBar, Toolbar } from "@mui/material";

export default function CitySearch() {
  const [newSearchTerm, setSearchTerm] = useState("");
  const [params] = useSearchParams();
  const searchTerm = params.get("searchTerm");

  console.log(searchTerm);
  const {
    data: hotels,
    loading,
    error,
  } = useFetch<HotelDto[]>(
    "/api/hotels/find",
    {
      method: "post",
      body: {
        searchTerm: searchTerm,
      },
    },
    [searchTerm]
  );

  /*  const {
      data: cities
    } = useFetch<CityDto[]>(
      "api/cities/find",
      {
        method: "post",
        body: {
          searchTerm: searchTerm
        },
      },
      [searchTerm]
    ); */

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

  // const [NewSearchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <br />
              <AppBar position="static" className="search-bar">
                {/* <Toolbar>
                    <label htmlFor="search">Search Destination</label>
                    <input id="search" value={newSearchTerm} onChange={(e) => setSearchTerm(e.target.value ?? "")}></input>
                    <Link 
                      onClick={(e) => (!newSearchTerm ? e.preventDefault() : null)}
                      to={`/find-city?searchTerm=${encodeURIComponent(newSearchTerm)}&start=now`}
                      aria-disabled={!searchTerm}
                    >
                      Search
                    </Link>
                  </Toolbar> */}
              </AppBar>
              {hotels?.map((hotel) => (
                <>
                  <br />
                  <div className="container">
                    <Link to={`/hotel-details/${hotel.id}`}>
                      <div
                        className="row"
                        style={{ backgroundColor: "rgba(255,255,255,.95)" }}
                      >
                        <div className="col-1"></div>
                        <div className="col-8">
                          <div>
                            <br />
                            <h2>{hotel.name}</h2>
                            <p>{hotel.address}</p>
                          </div>
                        </div>
                        <div className="col-2">
                          <br />
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </Link>
                  </div>
                  <br />
                </>
              ))}
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      {/* {cities ? (
          <>
            <Container>
              <Flex justify={"center"} align={"start"}>
                {cities?.map((city) => {
                  return(
                    <div key={city.id}>
                      <Title order={3}> Found these hotels in {city.location}</Title>
                    </div>
                  )
                })}
              </Flex>
            </Container>
            <div>
              <ul>
                {hotels?.map((hotel) => {
                  return (
                  <div key={hotel.id}>
                    <Space></Space>
                    <li className="hotel-listing">
                      <link></link>
                    </li>
                  </div>
                  );
                  })}
              </ul>
            </div>
          </>
        ) : (
          <>
            <Loader />
          </>
        )} */}
    </>
  );
}
