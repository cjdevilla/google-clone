import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";

const Options = (hideOptions = false) => {
  return (
    <div className="searchResultPage__options">
      {!hideOptions ? (
        <>
          <div className="searchResultPage__optionsLeft">
            <div className="searchResultPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchResultPage__option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchResultPage__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchResultPage__option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchResultPage__option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchResultPage__option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
        </>
      ) : (
        <div className="searchResultPage__optionsLeft searchResultPage__optionsLeftHidden ">
          <div className="searchResultPage__option">
            <SearchIcon />
            <Link to="/all">All</Link>
          </div>
          <div className="searchResultPage__option">
            <DescriptionIcon />
            <Link to="/news">News</Link>
          </div>
          <div className="searchResultPage__option">
            <ImageIcon />
            <Link to="/images">Images</Link>
          </div>
          <div className="searchResultPage__option">
            <LocalOfferIcon />
            <Link to="/shopping">Shopping</Link>
          </div>
          <div className="searchResultPage__option">
            <RoomIcon />
            <Link to="/maps">Maps</Link>
          </div>
          <div className="searchResultPage__option">
            <MoreVertIcon />
            <Link to="/more">More</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
