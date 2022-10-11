// import { movieSearchByName } from './service_api';

import ApiService from './api-service';
import renderFilmsMarkup from './templates/renderFilmsMarkup';

const searchFormRef = document.querySelector('.form-group');
const errorMessage = document.querySelector('.error-notification');
const input = document.querySelector(`.form-group__input`)
// const filmsApi = new movieSearchByName();
// const filmsApi = new API_service();



const apiService = new ApiService();

// function onFundName() {
//   apiService.query = 'dog';
//   apiService.fetchFundFilms();
// }
// onFundName()


searchFormRef.addEventListener('submit', onFormSubmit);
input.addEventListener(`input`, onFundName)

console.log(searchFormRef);

function onFundName(e) {
    apiService.query = e.currentTarget.value;
    console.log(e.currentTarget.value)
    apiService.fetchFundFilms();
  }
 

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(evn)
  // apiService.query = evt.currentTarget.value;

  // apiService.fetchFundFilms();

  // try {
  //   apiService.searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
  //   if (filmsApi.searchQuery === '') return;

  //   const films = await filmsApi.fetchMoviesByKeyword();
  //   if (films.length === 0) {
  //     addErrorStyles();
  //     errorMessage.style.display = 'block';
  //   } else {
  //     resetErrorStyles();
  //   }
  //   renderFilmsMarkup(films);

  //   searchFormRef.reset();
  // } catch (error) {
  //   console.log(error);
  // }
}