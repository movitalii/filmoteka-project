// import { movieSearchByName } from './service_api';

import { API_service } from './apiSevice';
import renderFilmsMarkup from './templates/renderFilmsMarkup';

const searchFormRef = document.querySelector('.form-group');
const errorMessage = document.querySelector('.error-notification');
// const filmsApi = new movieSearchByName();
const filmsApi = new API_service();

searchFormRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();

  try {
    filmsApi.searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
    if (filmsApi.searchQuery === '') return;

    const films = await filmsApi.fetchMoviesByKeyword();
    if (films.length === 0) {
      addErrorStyles();
      errorMessage.style.display = 'block';
    } else {
      resetErrorStyles();
    }
    renderFilmsMarkup(films);

    searchFormRef.reset();
  } catch (error) {
    console.log(error);
  }
}