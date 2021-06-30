import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { ReactVideo, ReactAudio } from "reactjs-media";
import { MobilePDFReader } from "react-read-pdf";
import { imgBaseURL } from "../../utils/utils";
import "./catlogrow.css";
import pdfview from "../../pdf.png";
import mp3view from "../../mp3.png";

/**
 * Titile
 * containet ->posters
 */
function CatlogRow({ title, fetchURL, isLargeRow }) {
  /** useState is a hooks help to maintain and hold the initiale and current states of object */
  const [mediaType, setMediaType] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [posterPath, setPosterPath] = useState("");

  /** useEffect of code which runs on a spec conditions */
  useEffect(() => {
    async function getMoviesData() {
      const request = await axios.get(fetchURL);
      console.log("REQ **** " + fetchURL);
      console.log(request);
      console.log(request.data);
      setMovies(request.data);
      return request;
    }
    getMoviesData();
  }, [fetchURL]);

  //   const opts = {
  //     height: "390",
  //     width: "100%",
  //     playerVars: {
  //       autoplay: 1,
  //     },
  //   };

  const handleClick = (movie) => {
    console.log(movie);
    console.log(movie?.title);
    if (trailerUrl) {
      setTrailerUrl("");
      setPosterPath("");
      setMediaType("");
    } else {
      console.log("check video path");
      setMediaType(
        movie?.type === "VIDEO"
          ? "VIDEO"
          : movie?.type === "PDF"
          ? "DOCUMENT"
          : "MP3"
      );
      setPosterPath(
        movie?.type === "VIDEO"
          ? `${imgBaseURL}${
              isLargeRow ? movie.backdrop_path : movie.backdrop_path
            }`
          : movie?.type === "PDF"
          ? `${pdfview}`
          : `${imgBaseURL}${movie.backdrop_path}`
      );
      setTrailerUrl(
        movie?.type === "VIDEO"
          ? movie?.video
            ? `${imgBaseURL}${movie?.video_path}`
            : ""
          : movie?.type === "PDF"
          ? "https://demoife.s3.amazonaws.com/action/files/Industrial_Products_Catalog.pdf"
          : movie?.audio
          ? `${imgBaseURL}${movie?.audio_path}`
          : ""
      );
      //movie?.video ? console.log("YES") : console.log("NO");
      //"https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
    }
  };

  return (
    <>
      <div className="catlogrow">
        <h2>{title}</h2>
        <div className="catlog_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`catlog_poster ${
                isLargeRow && "catlog_poster_larger"
              }`}
              src={
                movie?.type === "VIDEO"
                  ? `${imgBaseURL}${
                      isLargeRow ? movie.backdrop_path : movie.backdrop_path
                    }`
                  : movie?.type === "PDF"
                  ? `${pdfview}`
                  : `${mp3view}`
              }
              alt={movie.name}
            ></img>
          ))}
        </div>
        {/* { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
        {mediaType === "VIDEO" && trailerUrl && (
          <ReactVideo
            src={trailerUrl}
            poster={posterPath}
            primaryColor="red"
            // other props
          />
        )}
        {mediaType === "MP3" && trailerUrl && (
          <ReactAudio src={trailerUrl} poster={posterPath} />
        )}
        {mediaType === "DOCUMENT" && trailerUrl && (
          <div style={{ overflow: "scroll", height: 600 }}>
            <MobilePDFReader url={trailerUrl} />
          </div>
        )}
      </div>
    </>
  );
}
export default CatlogRow;

// src={`${imgBaseURL}${
//     isLargeRow ? movie.backdrop_path : movie.backdrop_path
//   }`}

/*
https://dev.to/jimjunior/how-to-create-a-responsive-video-player-in-react-4997
https://mixkit.co/free-stock-video/waterfall-in-forest-2213/
*/
