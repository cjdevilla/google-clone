import React from "react";
import SearchResultItem from "./SearchResultItem";

function List(props) {
  const items = props.items.map((item, index) => (
    <SearchResultItem
      key={index}
      name={item.name}
      description={item.description}
    />
  ));

  return (
    <div>
      <h2>{props.title}</h2>
      {items}
    </div>
  );
}

export default List;
