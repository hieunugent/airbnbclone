import React,{useState}from 'react'
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import DatePicker from './DatePicker';
function SearchBar() {

     const [setdate, setdateRange]= useState(false);
     

    return (
      <>
        <div className="searchbar">
          <div className="searchbar__items local">
            <h5 className="search__local">
              Location
              <br />
              <span className="searchbar_label"> Where are you going?</span>
            </h5>
          </div>

          <div
            className="searchbar__items check"
            onClick={(e) => setdateRange(!setdate)}
          >
            <h5 className="search_checkin">
              Check in
              <br />
              <span className="searchbar_label"> Add dates</span>
            </h5>
          </div>

          <div
            className="searchbar__items check"
            onClick={(e) => setdateRange(!setdate)}
          >
            <h5 className="search_checkin">
              Check out
              <br />
              <span className="searchbar_label">{}</span>
            </h5>
          </div>

          <div className="searchbar__items guestnum">
            <div className="search__guest">
              <h5>
                Guest
                <br />
                <span className="searchbar_label">{}</span>
              </h5>
            </div>
            <div className="search__icon">
              <SearchIcon />
              <span>Search</span>
            </div>
          </div>
        </div>
        <div>{
          setdate && <DatePicker

        />}</div>

      </>
    );
}

export default SearchBar
