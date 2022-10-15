import ApiService from './api-service';
import addArticleImage from './fetchImages';
import { saveInfo, getInfo, removeInfo } from './storage_api';
import { createPagination } from './pagination'; // добавил для пагинации
import { fetchFromGallery } from './fetch-render_modal';
import { backdrop } from './renderModal';

const FUND_NAME = 'genre_card';
let previousSearch = ''; // от Василия костыль

const searchFormRef = document.querySelector('#form-search');
const errorMessage = document.querySelector('.error-notification');
const input = document.querySelector(`.form-group__input`);

const apiService = new ApiService();

if (searchFormRef) {
  searchFormRef.addEventListener('submit', onFormSubmit);
}

console.log(searchFormRef);

function onFormSubmit(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;

  apiService.fetchFundFilms().then(data => {
    const galContainer = document.querySelector('.gallery');

    if (data.results.length === 0) {
      // input.value = '';
      data = previousSearch;
      console.log('????', data); // проверка

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
            // console.log('???', data); // проверка

            saveInfo(data.page, data.results);
          }
        }, 2000);
      });

      //  console.log(cartError)
      return;
    } else {
      // console.log(data.results);
      saveInfo('page', data.results);

      previousSearch = data;
      console.log('Help - yes, use it', data.total_results); // проверка

      // console.log(galContainer);
      galContainer.addEventListener('click', showCard);
    }

    // console.log('ok', data.results.length);
    cleanView();
    addArticleImage(data);

    createPagination(data.total_results); // добавил для пагинации
    console.log(' !!!!!!!!! ', data); // проверка
  });
}

function cleanView() {
  document.querySelector(`.gallery`).innerHTML = ``;
}

function showCard(e) {
  e.preventDefault();
  backdrop.classList.remove('is-hidden');
  fetchFromGallery(
    '/' +
      e.target.src.substring(
        e.target.src.lastIndexOf('/') + 1,
        e.target.src.length
      ),
    'page'
  );
}
