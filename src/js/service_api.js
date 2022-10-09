import axios from 'axios';

export const KEY = '3ff086ca8fded08ba42938358b3327b4';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

//  get popular https://developers.themoviedb.org/3/movies/get-popular-movies
const getPopularMovies = async (page = 1) => {
  const { data } = await axios.get(
    `/movie/popular?api_key=${KEY}&page=${page}`
  );
  console.log(data.results);
  return data;
};
// search movie https://developers.themoviedb.org/3/search/search-movies
const movieSearchByName = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`
  );
  console.log(data);
  return data;
};

// get details https://developers.themoviedb.org/3/movies/get-movie-details
const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${KEY}`);
  console.log(data);
  return data;
};

// get genres https://developers.themoviedb.org/3/genres/get-movie-list
const getMovieGenres = async () => {
  const { data } = await axios.get(`/genre/movie/list?api_key=${KEY}`);
  console.log(data);
  return data;
};

// getPopularMovies(4);
// movieSearchByName('Memory', 2);
// getMovieDetails(120);
// getMovieGenres();

export { getMovieDetails, movieSearchByName, getPopularMovies, getMovieGenres };
