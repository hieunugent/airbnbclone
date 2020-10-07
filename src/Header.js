import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Image from "react-bootstrap/Image";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Button } from "@material-ui/core";
import DatePicker from "./DatePicker";
import SearchBar from "./SearchBar";
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
        <button className="header__center" onClick={()=> setSearchinfo(!searchinfo)}>
          <div className="header__btntext">
            <p> Start your search </p>
          </div>
          <div className="header__btnicon">
            <img
              className="header__btnimg"
              src="data:image/png;base64,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"
            />
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
      <div><SearchBar /></div>
    </>
  );
}

export default Header;
