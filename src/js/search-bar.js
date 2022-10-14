import ApiService from './api-service';
import addArticleImage from './fetchImages';
import { saveInfo, getInfo, removeInfo } from './storage_api';
import { createPagination } from './pagination'; // добавил для пагинации

const FUND_NAME = 'genre_card';

const searchFormRef = document.querySelector('#form-search');
const errorMessage = document.querySelector('.error-notification');
const input = document.querySelector(`.form-group__input`);

const apiService = new ApiService();

searchFormRef.addEventListener('submit', onFormSubmit);

console.log(searchFormRef);

function onFormSubmit(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;

  apiService.fetchFundFilms().then(data => {
    if (data.results.length === 0) {
      // input.value = '';

      document
        .querySelector('.error-notification')
        .insertAdjacentHTML(
          'beforeend',
          'Search result not successful. Enter the correct movie name.'
        );

      apiService.fetchImage().then(data => {
        setTimeout(() => {
          if (document.querySelector(`.error-notification`)) {
            document.querySelector('.error-notification').innerHTML = '';
            addArticleImage(data);
            saveInfo(data.page, data.results);
          }
        }, 2000);
      });

      //  console.log(cartError)
      return;
    }
    // console.log('ok', data.results.length);
    cleanView();
    addArticleImage(data);

    createPagination(data.total_results); // добавил для пагинации
    // console.log(' !!!!!!!!! ', createPagination(data.total_results));
  });
}

function cleanView() {
  document.querySelector(`.gallery`).innerHTML = ``;
}
