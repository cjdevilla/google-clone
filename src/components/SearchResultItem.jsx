import React from "react";
import "./SearchResultItem.css";

function SearchResultItem(props) {
  return (
    <div className="searchResultItem">
      <h3 className="searchResultItem__name"> {props.name} </h3>
      <p className="searchResultItem__description">{props.description} </p>
    </div>
  );
}
export default SearchResultItem;
