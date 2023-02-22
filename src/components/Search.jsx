import React from "react";
import { useState } from "react";
import "../pages/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search/${searchQuery}`);
  }

  return (
    <form className="search" onSubmit={handleSearch}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <MicIcon />
        <PhotoCameraIcon className="search__photoCamera" />
      </div>

      <div className="search__buttons">
        {!hideButtons ? (
          <>
            <Button variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </>
        ) : (
          <>
            <Button style="display:none;" variant="outlined">
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
