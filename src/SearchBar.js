import React from 'react'
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
function SearchBar() {
    return (
      <div className="searchbar">
        <div className="searchbar__items local">
          <h5 className="search__local">
            Location
            <br />
            <span className="searchbar_label"> Where are you going?</span>
          </h5>
        </div>

        <div className="searchbar__items check">
          <h5 className="search_checkin">
            Check in
            <br />
            <span className="searchbar_label"> Add dates</span>
          </h5>
        </div>

        <div className="searchbar__items check">
          <h5 className="search_checkin">
            Check out
            <br />
            <span className="searchbar_label"> Add dates</span>
          </h5>
        </div>

        <div className="searchbar__items guestnum">
          <div className="search__guest">
            <h5>
              Guest
              <br />
              <span className="searchbar_label"> Add guest</span>
            </h5>
          </div>
          <div className="search__icon">
            <SearchIcon />
            <span>Search</span>
          </div>
        </div>
      </div>
    );
}

export default SearchBar
