import React from "react";
import "./SearchResultPage.css";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import SlideshowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";
import SearchResultItem from "../components/SearchResultItem";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

import Search from "../components/Search";

function SearchResultPage() {
  return (
    <div className="searchResultPage">
      <div className="searchPage__header">
        <div className="searchResultPage__headerLeft">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
          />
        </div>

        <div className="searchPage__headerBody">
          <Search />

          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage__option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
        </div>
        <div className="searchResultPage_headerRight">
          <div className="searchPage__option">
            <Link to="/settings">
              <SettingsIcon />
            </Link>
            <Link to="/apps">
              <AppsIcon />
            </Link>
            <Link to="/user">
              <Avatar />
            </Link>
          </div>
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
