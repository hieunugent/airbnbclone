import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Drawer, Link } from "@material-ui/core";

import SearchBar from "./SearchBar";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  const [searchinfo, setSearchinfo] = useState(false);
  const [placeToStay, setPlaceToStay] = useState(false);
   const [experience, setExperiences] = useState(false);
    const [onlineExp, setOnlineExp] = useState(false);

    
  
  return (
    <>
      <div className="header">
        <div className="header__left" onclick={(e) => setSearchinfo(false)}>
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt=""
          />
        </div>

        <button
          className="header__center"
          onClick={() => {
            setSearchinfo(!searchinfo);
          }}
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

      <Drawer anchor="top" open={searchinfo} >
        <div className="headerdraw" onClick={e=> {setSearchinfo(false)}}>
          <div className="header__left " >
            <img
              className="header__icon "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt=""
            />
          </div>
          <div className="header__centerLink">
            <Link
              className={`link_drawer ${placeToStay && "active"}`}
              onClick={(e) => {
                setPlaceToStay(!placeToStay);
                setExperiences(false);
                setOnlineExp(false);
              }}
            >
              Place to Stay{" "}
            </Link>
            <Link
              className={`link_drawer ${experience && "active"}`}
              onClick={(e) => {
                setExperiences(!experience);
                setPlaceToStay(false);
                setOnlineExp(false);
              }}
            >
              Expreriences{" "}
            </Link>
            <Link
              className={`link_drawer ${onlineExp && "active"}`}
              onClick={(e) => {
                setOnlineExp(!onlineExp);
                setPlaceToStay(false);
                setExperiences(false);
              }}
            >
              Online Expreriences{" "}
            </Link>
          </div>
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
          {" "}
          <SearchBar />
        </div>
      </Drawer>
    </>
  );
}

export default Header;
