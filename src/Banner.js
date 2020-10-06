import { Button } from '@material-ui/core'
import React from 'react'
import "./Banner.css"
function Banner() {
    return (
      <div className="banner">
        <div className="banner__info">
          <h2>Go Near </h2>
          <h6>
            Settle in somewhere new. Discover stays to live, work, or just
            relax.
          </h6>
          <Button className="banner__infoBtn" variant="contained">
            Explore nearby
          </Button>
        </div>
      </div>
    );
}

export default Banner
