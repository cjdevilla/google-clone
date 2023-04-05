import React, { useEffect, useState } from "react";

import "./SearchResultItem.css";
import useGoogleSearch from "../custom-hooks/useGoogleSearch";

function SearchResultItem({ term }) {

  const { data } = useGoogleSearch(term);

  return (
    <div className="searchResultItem">
      <div>
        {data && (
          <ul>
            {data.map((result, index) => (
              <li key={index}>
                <a className="searchResultItem__Title" href={result.link}>
                  {result.title}
                </a>
                <p>{result.snippet}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResultItem;
