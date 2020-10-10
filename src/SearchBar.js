import React,{useState}from 'react'
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import { Calendar, DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function SearchBar() {

const [setdate, setdateRange]= useState(false);
     
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [localborder, setLocalborder]= useState(false);
const [checkInborder, setBorderCheckin]=useState(false);
const [checkOutborder, setBorderCheckOut] = useState(false);
const [guestBorder, setBorderGuest] = useState(false);
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
}
const handleoverCheckin=()=>{
setBorderCheckin(true);
}
const handleoverCheckOut=()=>{
setBorderCheckOut(true);
}
const handleoverGuest = () => {
  setBorderGuest(true);
};
    return (
      <>
        <div className="searchbar">
          <div className="searchbar__items local">
            <h5 className={`search__local `} onMouseOver={handleoverLocal}>
              Location
              <br />
              <span className="searchbar_label"> Where are you going?</span>
            </h5>
          </div>

          <div
            className="searchbar__items check"
            onClick={(e) => setdateRange(!setdate)}
          >
            <h5 className="search_checkin" onMouseOver={handleoverCheckin}>
              Check in
              <br />
              <span className="searchbar_label">Add dates</span>
            </h5>
          </div>

          <div
            className="searchbar__items check"
            onClick={(e) => setdateRange(!setdate)}
          >
            <h5 className="search_checkin" onMouseOver={handleoverCheckOut}>
              Check out
              <br />
              <span className="searchbar_label">Add dates</span>
            </h5>
          </div>

          <div className="searchbar__items guestnum">
            <div className="search__guest">
              <h5 onMouseOver={handleoverGuest}>
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
        <div>
          {setdate && (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              color="#19575C"
              rangeColors="#19575C"
            />
          )}
        </div>
        =
      </>
    );
}

export default SearchBar
