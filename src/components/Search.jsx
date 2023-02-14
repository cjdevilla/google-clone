import React from "react";
import "../pages/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Button } from "@material-ui/core";

function Search() {
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon />
        <PhotoCameraIcon className="search__photoCamera" />
      </div>

      <div className="search__buttons">
        <Button variant="outlined" type="submit">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
