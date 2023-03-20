import React, { useEffect, useState } from "react";

import "./SearchResultItem.css";
import useGoogleSearch from "../custom-hooks/useGoogleSearch";

function SearchResultItem({ term }) {
  console.log("Nico: " + term);
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchResultItem">
      <div>
        {data && (
          <ul>
            {data.map((result) => (
              <li key={result.cacheId}>
                <a class="searchResultItem__Title" href={result.link}>
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
