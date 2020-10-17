import React,{useState}from 'react'
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Guest from './Guest';

function SearchBar() {

const [setdate, setdateRange]= useState(false);
     
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [localborder, setLocalborder]= useState(false);
const [checkInborder, setBorderCheckin]=useState(false);
const [checkOutborder, setBorderCheckOut] = useState(false);
const [displayGuestnum, setGuestNumber] = useState(false);
const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: "selection",
};
function handleSelect(ranges) {
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}
const handleoverLocal=()=>{
   setLocalborder(true);  
   setBorderCheckin(false);
   setBorderCheckOut(false);
}
const handleoverCheckin=()=>{
   setLocalborder(true);
   setBorderCheckin(true);
   setBorderCheckOut(false);
}
const handleoverCheckOut=()=>{
  setBorderCheckOut(true);
  setLocalborder(false);
  setBorderCheckin(true); 
}
const handleoverGuest = () => {
    setBorderCheckOut(true);
   setLocalborder(false);
   setBorderCheckin(false); 
};
const handleleaveSearchbar=()=> {
  setBorderCheckOut(false);
  setLocalborder(false);
  setBorderCheckin(false);
}
const [openLocation , setOpenLocation]= useState(false);
    return (
      <div className="search__area" onMouseLeave={handleleaveSearchbar}>
        <div className="searchbar">
          <div
            className="searchbar__items local"
            onMouseOver={handleoverLocal}
            onClick={(e) => setOpenLocation(!openLocation)}
          >
            <h5 className={`search__local ${localborder && "removeborder"} `}>
              Location
              <br />
            
              <input
                className="searchbar_label"
                type="text"
                id="location"
                name="locationDestination"
                placeholder="Where are you going?"
              />
            </h5>
          </div>

          <div
            className="searchbar__items check"
            onClick={(e) => setdateRange(!setdate)}
            onMouseOver={handleoverCheckin}
          >
            <h5 className={`search_checkin ${checkInborder && "removeborder"}`}>
              Check in
              <br />
              <span className="searchbar_label">Add dates</span>
            </h5>
          </div>

          <div
            className="searchbar__items check"
            onClick={(e) => setdateRange(!setdate)}
            onMouseOver={handleoverCheckOut}
          >
            <h5
              className={`search_checkin ${checkOutborder && "removeborder"}`}
            >
              Check out
              <br />
              <span className="searchbar_label">Add dates</span>
            </h5>
          </div>

          <div
            className="searchbar__items guestnum"
            onMouseOver={handleoverGuest}
          >
            <div
              className={`search__guest ${checkOutborder && "removeborder"}`}
              onClick={(e) => setGuestNumber(!displayGuestnum)}
            >
              <h5>
                Guest
                <br />
                <span className="searchbar_label">Add guests</span>
              </h5>
            </div>
            <div className="search__icon">
              <SearchIcon />
              <span>Search</span>
            </div>
          </div>
        </div>
        <div className="searchbar__detail">
          {displayGuestnum && (
            <div className="searchGuest">
              {" "}
              <Guest />
            </div>
          )}
          {openLocation && "this is your location "}
          {setdate && (
            <DateRangePicker
              className="searchDate"
              ranges={[selectionRange]}
              onChange={handleSelect}
              color="#19575C"
              rangeColors="#19575C"
            />
          )}
        </div>
      </div>
    );
}

export default SearchBar
