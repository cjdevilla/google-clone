import React from "react";
import "./SearchResultPage.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import Options from "../components/Options";
import SearchResultItem from "../components/SearchResultItem";

function SearchResultPage({ data }) {
  const [{ term }, dispatch] = useStateValue();
  return (
    <div className="searchResultPage">
      <div className="searchResultPage__header">
        <div className="searchResultPage__headerLeft">
          <img
            className="searchResultPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            href="/"
          />
        </div>

        <div className="searchResultPage__headerBody">
          <Search hideButtons={true} searchTerm={term} />
        </div>

        <div className="searchResultPage_headerRight">
          <div className="searchResultPage__option">
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

      <Options hideOptions={true} />

      <div className="searchResultPage__body">
        <div className="searchResultPage__bodyResultStats">
          <p>About results</p>
        </div>

        <div className="searchResultPage_bodyResultItems">
          <SearchResultItem term={term} />
        </div>
      </div>
    </div>
  );
}

export default SearchResultPage;
