import React from "react";

import "./App.css";
import apiRequest from "./api/requests";
import NavigationBar from "./components/navigationbar/NavBar";
import CatlogRow from "./components/catlogs/catlogrow";
import Banner from "./components/banner/banner";

function App() {
  /**
   * Items in this page
   * 1-->Nav Bar
   * 2-->Banner
   * 3-->Movies
   */
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <CatlogRow title="Trending Now" fetchURL={apiRequest.fetchTrending} />
      <CatlogRow
        title="Action Movies"
        fetchURL={apiRequest.fetchActionMovies}
      />
      <CatlogRow title="Top Rated" fetchURL={apiRequest.fetchTopRated} />
    </div>
  );
}

export default App;
