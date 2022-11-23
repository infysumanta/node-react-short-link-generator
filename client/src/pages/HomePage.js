import React, { useState } from "react";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
import axios from "axios";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [link, setLink] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortFullUrl, setShortFullUrl] = useState("");

  const generateShortLink = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:5000/api/short/create",
      {
        linkUrl: link,
      }
    );
    if (data.status) {
      toast.success("Short Link Generate!");
      setShortUrl(data.shortId);
      setShortFullUrl(window.location.href + data.shortId);
    } else {
      toast.error(data.message);
    }
  };

  const copyShortLink = () => {
    copy(shortFullUrl);
    toast.success("Short Link Copied!");
  };

  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="">
            <h2>Paste the URL to be shortened</h2>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
              placeholder="Enter Url to Short"
            />
            <button className="btn" onClick={generateShortLink}>
              Generate
            </button>
          </div>
        </div>
        {shortUrl && (
          <div className="card">
            <div className="">
              <h2>Your shortened URL :</h2>
            </div>
            <div className="form-group">
              <input
                className="form-control shorturl"
                type="url"
                value={shortFullUrl}
                disabled
                placeholder="Shorten Url"
              />
              <button className="btn-box" onClick={copyShortLink}>
                Copy
              </button>
            </div>
            <div className="long-url">
              Long Url :{" "}
              <span className="link">
                <a href={link} target="_black" className="tooltip">
                  {link.substring(0, 60)} {link.length > 60 ? "..." : ""}
                  <span className="tooltip-text">{link}</span>
                </a>
              </span>
            </div>
            <p className="total-link">
              <Link to={`/link-details/${shortUrl}`}>
                Track the total of clicks in real-time from your shortened URL.
              </Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
