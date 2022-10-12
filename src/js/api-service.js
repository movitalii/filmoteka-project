import axios from 'axios';

const API_KEY = '3ff086ca8fded08ba42938358b3327b4';
const BASE_URL = `https://api.themoviedb.org/3/`;
const spinner = document.getElementById('spinner');

export default class ApiService {
    #page
  #id;
  #searchQuery;
  constructor() {
    this.#page = 1;
    this.#id = null;
    this.#searchQuery = '';
   
  }

  async fetchGenres() {
    const response = await axios.get(
      `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const { genres } = response.data;

    return { genres };
  }

  async fetchImage() {
    spinner.removeAttribute('hidden');
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=${this.#page}`
    );
    spinner.setAttribute('hidden', '');
    const data = response.data;

    //  console.log('data', data.results)
    return data;
  }

  async fetchAllFilms() {
    spinner.removeAttribute('hidden');
    const response = await axios.get(
      `${BASE_URL}movie/${this.#id}?api_key=${API_KEY}&language=en-US`
    );
    spinner.setAttribute('hidden', '');
    const allFilm = response.data;

    // console.log('all', allFilm);
    return allFilm;
  }

  async fetchFundFilms() {
    spinner.removeAttribute('hidden');
    const response = await axios.get(

      `${BASE_URL}search/movie?api_key=${API_KEY}&page=${this.#page}&query=${this.#searchQuery}`
    );
    spinner.setAttribute('hidden', '');
    const FundFilm = response.data;

    return FundFilm;
  }

  clearForm() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.#searchQuery = newQuery;
  }

  get id() {
    return this.id;
  }
  set id(newId) {
    this.#id = newId;
  }
  get pagePl() {
    return this.page;
  }
  set pagePl(newPage) {
    this.#page = newPage;
  }
}
