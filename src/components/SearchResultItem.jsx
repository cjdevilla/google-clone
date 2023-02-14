import React from "react";

function SearchResultItem(props) {
  return (
    <div>
      <h3> {props.name} </h3>
      <p>{props.description} </p>
    </div>
  );
}
export default SearchResultItem;
