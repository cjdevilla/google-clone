import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "240d93dc087aa440a";

const useGoogleSearch = (term) => {
  const [googleData, setGoogleData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setGoogleData(result);
        });
    };

    fetchData();
  }, [term]);

  return { googleData };
};
export default useGoogleSearch;
