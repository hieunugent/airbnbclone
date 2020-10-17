import React from 'react'
import "./Guest.css";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
function GuestInfo({typeLine1,typeLine2, numGuest}) {
    return (
      <div className="guest__info">
        <div className="guest__type">
          <div className="guest__typeLine1">{typeLine1}</div>
          <div className="guest__typeLine2">{typeLine2}</div>
        </div>
        <div className="guest__numAdj">
          <button className="guest__button">
            {" "}
            <RemoveOutlinedIcon />
          </button>
          <span>{numGuest}</span>
          <button className="guest__button">
            <AddOutlinedIcon />
          </button>
        </div>
      </div>
    );
}

export default GuestInfo
