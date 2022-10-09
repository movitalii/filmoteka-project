import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

// import Notiflix from 'notiflix';

const API_KEY = 'eb7b6505abfb7d751373f782f6a3959d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export class API_service {
  language = localStorage.getItem('language');
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language;
    this.id = null;
    this.genreId = null;
  }

  async fetchTrending(allData = false) {
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios('trending/movie/day', {
        params: {
          api_key: API_KEY,
          language: this.language,
          page: this.page,
        },
      });

      Loading.remove();

      return allData ? data : data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMoviesByKeyword() {
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios('search/movie', {
        params: {
          api_key: API_KEY,
          query: this.searchQuery,
          language: this.language,
        },
      });

      Loading.remove();

      return data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieById() {
   
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios(`movie/${this.id}`, {
        
        params: {
          api_key: API_KEY,
          language: this.language,
        },
      });
      Loading.remove();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieByGenre() {
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const { data } = await axios(`discover/movie`, {
        params: {
          api_key: API_KEY,
          language: this.language,
          with_genres: this.genreId,
        },
      });
      Loading.remove();

      return data.results;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get movieId() {
    return this.id;
  }

  set movieId(newId) {
    this.id = newId;
  }
}

export { fetchTrending, fetchMoviesByKeyword, fetchMovieById, fetchMovieByGenre };