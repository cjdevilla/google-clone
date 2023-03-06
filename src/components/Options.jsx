import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";

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
