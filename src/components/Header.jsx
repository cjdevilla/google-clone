import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import "../pages/Home.css";

function Header() {
  return (
    <div className="home__header">
      <div className="home__headerLeft">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
      <div className="home__headerRight">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
