// import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
// import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "../components/Search";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>

        <div className="home__translation">
          Google offered in:
          <a href="https://www.google.com/setprefs?sig=0_LBMNhZdgoSkcPYzkgcKOugbtU3A%3D&amp;hl=zh-CN&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjNwrLxn5L9AhX-wXMBHfnrAGoQ2ZgBCBI">
            中文(简体)
          </a>
          <a href="https://www.google.com/setprefs?sig=0_LBMNhZdgoSkcPYzkgcKOugbtU3A%3D&amp;hl=ms&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjNwrLxn5L9AhX-wXMBHfnrAGoQ2ZgBCBM">
            Bahasa Melayu
          </a>
          <a href="https://www.google.com/setprefs?sig=0_LBMNhZdgoSkcPYzkgcKOugbtU3A%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjNwrLxn5L9AhX-wXMBHfnrAGoQ2ZgBCBQ">
            தமிழ்
          </a>
        </div>
      </div>

      <div className="home__footer">
        <div className="home__footer__firstRow">
          <div>Singapore</div>
        </div>
        <hr></hr>
        <div className="home__footer__secondRow">
          <div className="home__footer__secondRowLeft">
            <Link to="/advertising">Advertising</Link>
            <Link to="/business">Business</Link>
            <Link to="/howsearchworks">How Search works</Link>
          </div>
          <div className="home__footer__secondRowRight">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
