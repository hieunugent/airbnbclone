import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Image from "react-bootstrap/Image";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Button } from "@material-ui/core";

import SearchBar from "./SearchBar";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  const [searchinfo, setSearchinfo] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header__left">
          <img
            className="header__icon "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt=""
          />
        </div>
        <button
          className="header__center"
          onClick={() => setSearchinfo(!searchinfo)}
        >
          <div className="header__btntext">
            <p> Start your search </p>
          </div>
          <div className="header__btnicon">
            <SearchIcon />
          </div>
        </button>
        <div className="header__right">
          <div className="header__rightHost">
            <p>Become a host</p>
          </div>

          <div className="header__rightLanguage">
            <LanguageIcon />
            <KeyboardArrowDownIcon />
          </div>
          <div className="header__rightAvatar">
            <MenuIcon className="menuicon" />
            <Avatar className="avatar" />
          </div>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </>
  );
}

export default Header;
