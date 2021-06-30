import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import apiRequest from "../../api/requests";
import { imgBaseURL } from "../../utils/utils";
import "./bannerstyle.css";

/**
 * Header with bg image along with following things
 *  1. titile, 2. buttons menu, 3 description
 */

function Banner() {
  const [movie, setMoive] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      const request = await axios.get(apiRequest.fetchIFEOriginals);
      console.log("REQ**** ");
      console.log(request);
      setMoive(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
    }
    fetchingData();
  }, []);

  function truncateDescription(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      {
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${imgBaseURL}${movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">
              {" "}
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
              {truncateDescription(movie?.overview, 150)}
            </h1>
          </div>
          <div className="banner_fadeBottom"></div>
        </header>
      }
    </>
  );
}

export default Banner;
