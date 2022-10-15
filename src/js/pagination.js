import ApiService from './api-service';

import addArticleImage from './fetchImages';
import { saveInfo } from './storage_api';
import { backdrop } from './renderModal';
import { fetchFromGallery } from './fetch-render_modal';

const Pagination = require('tui-pagination');
const apiService = new ApiService();

const input = document.querySelector('.form-group__input');
// console.log('input', document.querySelector('.form-group__input').value);

const gallery = document.querySelector('.gallery');

let totalPages;

function numberOfPages() {
  apiService
    .fetchImage()
    .then(data => {
      // const movies = data.results;
      totalPages = data.total_results;
      // console.log('Внутри мы видим это - ', totalPages);

      createPagination(totalPages);
    })
    .catch(error => {
      console.log(error);
    });
}
numberOfPages();

export function createPagination(total_results) {
  const container = document.getElementById('tui-pagination-container');
  const options = {
    // below default value of options
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', event => {
    gallery.innerHTML = ''; // создает пустую галерею/стирает предыдущие карточки

    const currentPage = event.page;
    // console.log('currentPage', currentPage);

    if (input.value === '') {
      apiService.pagePl = currentPage;
      apiService.fetchImage().then(data => {
        // const movies = data.results;
        console.log('ok', data);
        saveInfo('page', data.results);
        addArticleImage(data);
      });
    } else {
      apiService.pagePl = currentPage;
      apiService.query = input.value;

      apiService.fetchFundFilms().then(data => {
        // const movies = data.results;
        // console.log('ok', data);
        addArticleImage(data);
      });
    }
  });
}

const galContainer = document
  .querySelector('.gallery')
  .addEventListener('click', showCard);
// createPagination();
// console.log('createPagination();', createPagination());
function showCard(e) {
  e.preventDefault();
  backdrop.classList.remove('is-hidden');
  console.log(e.target);
  fetchFromGallery(
    '/' +
      e.target.src.substring(
        e.target.src.lastIndexOf('/') + 1,
        e.target.src.length
      ),
    'page'
  );
}
