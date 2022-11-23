import React from "react";
import cross_icon from "./../cross_icon.png";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="image-outer">
            <img src={cross_icon} alt="cross-icon" className="cross-icon"></img>
            <h2> 404! Page Not Found</h2>
          </div>
          <div className="back-button">
            <Link to="/">Create other shortened URL.</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
