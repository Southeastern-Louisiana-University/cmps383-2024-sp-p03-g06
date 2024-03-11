import { useState } from "react";
import { Link } from "react-router-dom";

export default function Reservations() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <label htmlFor="search">Find a hotel</label>
      <input
        id="search"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value ?? "")}
      ></input>
      <Link
        onClick={(e) => (!searchTerm ? e.preventDefault() : null)}
        to={`/hotel-finder?searchTerm=${encodeURIComponent(
          searchTerm
        )}&start=now`}
        aria-disabled={!searchTerm}
      >
        Search
      </Link>
    </>
  );
}
