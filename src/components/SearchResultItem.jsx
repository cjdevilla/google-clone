import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchResultItem.css";

function SearchResultItem() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const cx = process.env.REACT_APP_CX;

    const query = "term";

    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`
      )
      .then((response) => {
        setSearchResults(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="searchResultItem">
      <div>
        <ul>
          {searchResults.map((result) => (
            <li key={result.cacheId}>
              <a class="searchResultItem__Title"href={result.link}>{result.title}</a>
              <p>{result.snippet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResultItem;
