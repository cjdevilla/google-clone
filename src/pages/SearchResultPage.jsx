import React from "react";
import "./SearchResultPage.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import reducer, { initialState } from "../reducer";
import Search from "../components/Search";
import { StateProvider, useStateValue } from "../StateProvider";
import List from "../components/List";
import Options from "../components/Options";
import useGoogleSearch from "../useGoogleSearch";

function SearchResultPage({ data }) {
  // const { term } = useParams();
  const [{ term }, dispatch] = useStateValue();

  const { googleData } = useGoogleSearch(term);
  console.log(googleData);

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
          <p>About {data.length} results</p>
        </div>

        <div className="searchResultPage_bodyResultItems">
          <List className="searchResultPage__data" items={data} />
        </div>
      </div>
    </div>
  );
}

export default SearchResultPage;
