import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import cross_icon from "./../cross_icon.png";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import apiUrls from "./../apiUrls";
const RedirectPage = () => {
  const [error, setError] = useState("");
  let { id } = useParams();
  console.log(id);

  const fetchUrl = async () => {
    const { data } = await axios.post(apiUrls.hitLink, {
      shortCode: id,
    });

    if (data.status) {
      window.location.href = data.fullUrl;
    } else {
      setError(data.message);
    }
  };

  useEffect(() => {
    fetchUrl();
  });
  return (
    <>
      {error && (
        <>
          <Header />
          <main>
            <div className="container">
              <div className="card">
                <div className="image-outer">
                  <img
                    src={cross_icon}
                    alt="cross-icon"
                    className="cross-icon"
                  ></img>
                  <h2> {error}</h2>
                </div>
                <div className="back-button">
                  <Link to="/">Create other shortened URL.</Link>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default RedirectPage;
