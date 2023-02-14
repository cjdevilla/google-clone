import React from "react";
import { useState } from "react";
import "../pages/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const history = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`/search/${inputValue}`);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" value={inputValue} onChange={handleInputChange} />
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
