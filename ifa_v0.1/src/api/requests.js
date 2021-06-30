const apiRequests = {
  fetchTrending: `/ifeTrending`,
  fetchIFEOriginals: `/ifeOriginals`,
  fetchTopRated: `/ifeTopRated`,
  fetchActionMovies: `/ifeAction`,
  fetchComedyMovies: `/movie/top_rated?api_key=&with_genres=35`,
  fetchHorrorMovies: `/movie/top_rated?api_key=&with_genres=27`,
  fetchRomanceMovies: `/movie/top_rated?api_key=}&with_genres=10749`,
  fetchDocumentaries: `/movie/top_rated?api_key=&with_genres=99`,
};

export default apiRequests;
