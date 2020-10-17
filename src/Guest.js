import React from "react";

import "./Guest.css";
import GuestInfo from "./GuestInfo";
function Guest() {
  return (
    <div className="guest">
      <GuestInfo typeLine1="Adults" typeLine2="Ages 13 or above" numGuest={0} />
      <hr className="breakLine" />
      <GuestInfo typeLine1="Children" typeLine2="Ages 2-12" numGuest={0} />
      <hr className="breakLine" />
      <GuestInfo typeLine1="Infant" typeLine2="Under 2" numGuest={0} />
    </div>
  );
}

export default Guest;
