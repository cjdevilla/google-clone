import React from "react";
import Search from "../components/Search";
import "./SearchResultPage.css";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import ImageSearchRoundedIcon from "@material-ui/icons/ImageSearchRounded";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import BookIcon from "@material-ui/icons/Book";
import { Avatar } from "@material-ui/core";

function SearchResultPage() {
  return (
    <div className="searchResultPage">
      <div className="searchResultPage__headerLeft">
        <img
          className="searchResultPage__headerLogo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google"
        />
        <div className="searchResultPage__headerSearchBar">
          <Search />
        </div>
      </div>
      <div className="searchResultPage__headerRight">
        <div className="searchResultPage__HeaderRightIcons">
          <SettingsIcon />
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="searchResultPage__filters">
        <ul>
          <li>
            <SearchIcon /> All
            <ImageSearchRoundedIcon /> Image
            <PlayCircleOutlineIcon /> Videos
            <BookIcon /> Books
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchResultPage;
