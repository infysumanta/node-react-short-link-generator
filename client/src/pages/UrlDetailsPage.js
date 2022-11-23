import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import cross_icon from "./../cross_icon.png";
import { Link } from "react-router-dom";
import apiUrls from "./../apiUrls";
const UrlDetailsPage = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [hitCount, setHitCount] = useState("");
  const [shortId, setShortId] = useState("");
  const [error, setError] = useState("");

  let { id } = useParams();
  console.log(id);
  const fetchUrl = async () => {
    const { data } = await axios.post(apiUrls.getLink, {
      shortCode: id,
    });

    if (data.status) {
      setFullUrl(data.fullUrl);
      setHitCount(data.hitCount);
      setShortId(data.shortId);
    } else {
      setError(data.message);
    }
  };

  useEffect(() => {
    fetchUrl();
  });

  // useEffect(() => fetchUrl());
  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="">
            <h2>Link Details</h2>
          </div>
          {shortId ? (
            <div className="link-details">
              <h3>Full Url</h3>
              <p className="link-fullurl">
                <a href={fullUrl}>{fullUrl}</a>
              </p>
              <h3>Short Url</h3>
              <p className="link-fullurl">
                <a href={`${window.location.origin}/${shortId}`}>
                  {`${window.location.origin}/${shortId}`}
                </a>
              </p>
              <h3>Total Click</h3>
              <p className="link-hitcount">
                <span>{hitCount}</span>
              </p>
            </div>
          ) : (
            <div className="image-outer">
              <img
                src={cross_icon}
                alt="cross-icon"
                className="cross-icon"
              ></img>
              <h2> {error}</h2>
            </div>
          )}
          <div className="back-button">
            <Link to="/">Create other shortened URL.</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UrlDetailsPage;
