import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const cx = process.env.REACT_APP_CX;

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  console.log("Term is: " + term);
  useEffect(() => {
    console.log("Data is: " + data);

    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${term}`
      )
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);
  return { data };
};

export default useGoogleSearch;
