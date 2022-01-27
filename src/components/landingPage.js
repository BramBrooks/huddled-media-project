import React from "react";
import { Link } from "react-router-dom";
import ToTheTrains from "../images/to_the_trains.jpg";

function LandingPage(props) {
  console.log("landing page");
  return (
    <div className="landing_page_container">
      <Link to="/travel">
        {" "}
        <img
          src={ToTheTrains}
          alt="To The Trains London Underground Sign - Click Here To Enter"
        />
      </Link>
    </div>
  );
}

export default LandingPage;
