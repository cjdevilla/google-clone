import React, { useEffect, useState } from "react";
import "./SearchResultPage.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import reducer, { initialState } from "../reducer";
import Search from "../components/Search";
import { StateProvider, useStateValue } from "../StateProvider";
import Options from "../components/Options";
import useGoogleSearch from "../useGoogleSearch";
import SearchResultItem from "../components/SearchResultItem";

function SearchResultPage({ data }) {
  // const { term } = useParams();
  const [{ term }, dispatch] = useStateValue();

  const { googleData } = useGoogleSearch(term);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(googleData?.items);
  }, [googleData]);

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
          <StateProvider initialState={initialState} reducer={reducer}>
            <Search hideButtons={true} searchTerm={term} />
          </StateProvider>
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
          <SearchResultItem searchResults={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default SearchResultPage;
