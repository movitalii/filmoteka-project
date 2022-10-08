import axios from 'axios';

export const KEY = '119d79b053f922516c6af4b71b0fd3ac';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getPopularMovies = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${KEY}&page=${page}`
  );
  console.log(data.results);
  return data;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const movieSearchByName = async (query, page) => {
  try {
    const objResult = [];
    return await axios
      .get(
        `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`
      )
      .then(res => {
        res.data.results.forEach(element => {
          objResult.push(element);
        });
        console.log(
          objResult.reduce(function (newArr, movie) {
            if (movie.backdrop_path != null) {
              newArr.push(movie);
            }
            return newArr;
          }, [])
        );
        return objResult.reduce(function (newArr, movie) {
          if (movie.backdrop_path != null) {
            newArr.push(movie);
          }
          return newArr;
        }, []);
      });
  } catch (error) {
    console.error(error);
  }

  // const { data } = await axios.get(
  //   `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`
  // );
  // console.log(data);
  // return data;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${KEY}`);
  console.log(data);
  return data;
};

const getMovieGenres = async () => {
  const { data } = await axios.get(`/genre/movie/list?api_key=${KEY}`);
  console.log(data);
  return data;
};

getPopularMovies(4);
movieSearchByName('Memory', 2);
getMovieDetails(120);
getMovieGenres();

export { getMovieDetails, movieSearchByName, getPopularMovies, getMovieGenres };
