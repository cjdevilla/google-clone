import React from "react";
import { useState } from "react";
import "../pages/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
 

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term,
    });

    navigate(`/search/${term}`);
  }

  function handleInputChange(event) {
    setTerm(event.target.value);
  }

  return (
    <form className="search" onSubmit={handleSearch}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" value={term} onChange={handleInputChange} />
        <MicIcon />
        <PhotoCameraIcon className="search__photoCamera" />
      </div>

      <div className="search__buttons">
        {!hideButtons ? (
          <>
            <Button variant="outlined" onClick={handleSearch}>
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </>
        ) : (
          <>
            <Button
              className="search__buttonsHidden"
              variant="outlined"
              onClick={handleSearch}
            >
              Google Search
            </Button>
            <Button className="search__buttonsHidden" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </>
        )}
      </div>
    </form>
  );
}

export default Search;
