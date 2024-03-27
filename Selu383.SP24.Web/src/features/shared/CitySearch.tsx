import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CityDto } from "../../Dtos/CityDto";
import { useFetch } from "use-http";


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

    return (
        <div>
          <p>{searchTerm}</p>
          <ul>
            {cities?.map((city) => (
              <div key={city.id}>
                Found these hotels in {city.location}
                <li>
                  {city.location}
                </li>
              </div>
            ))}
          </ul>
        </div>
      );
}