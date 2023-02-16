import React from "react";
import "./SearchResultPage.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import SlideshowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";

function SearchResultPage() {
  return (
    <div className="searchResultPage">
      <div className="searchResultPage__header">
        <div className="searchResultPage__headerLeft">
          <img
            className="searchResultPage__headerLeftLogo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
          />
        </div>

        <div className="searchResultPage__headerLeft__searchBar">
          <form className="search">
            <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input type="text" />
              <MicIcon />
              <PhotoCameraIcon className="search__photoCamera" />
              <SearchIcon />
            </div>
          </form>

          <div className="searchResultPage__headerFilters">
            <ul>
              <li>
                <SearchIcon />
                All
              </li>
              <li>
                <PhotoOutlinedIcon /> Images
              </li>
              <li>
                <SlideshowOutlinedIcon />
                Videos
              </li>
              <li>News</li>
              <li>Books</li>
              <li>Shopping</li>
              <li>More</li>
            </ul>
          </div>
        </div>
        <div className="searchResultPage_headerRight">
          <SettingsIcon />
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <hr></hr>
      <div className="searchResultPage__body">
        <div className="searchResultPage__bodyResultStats">
          <p>About 22,480,000,000 results</p>
        </div>
        <div className="searchResultPage_bodyResultItems"></div>
      </div>
    </div>
  );
}

export default SearchResultPage;
