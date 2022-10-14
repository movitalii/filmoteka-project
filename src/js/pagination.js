import ApiService from './api-service';

import addArticleImage from './fetchImages';

const Pagination = require('tui-pagination');
const apiService = new ApiService();

const input = document.querySelector(".form-group__input");
console.log('input', document.querySelector(".form-group__input").value);

const searchFormRef = document.querySelector('#form-search');
console.log('searchFormRef', searchFormRef);

const gallery = document.querySelector('.gallery');

export function createPagination(total_results) {
  const container = document.getElementById('tui-pagination-container');
  const options = {
    // below default value of options
    totalItems: 2000,
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
  console.log('createPagination -> pagination', pagination);

  pagination.on('afterMove', event => {
    gallery.innerHTML = ''; // создает пустую галерею/стирает предыдущие карточки

    const currentPage = event.page;
    // console.log('currentPage', currentPage);

    if (input.value === '') {
      apiService.pagePl = currentPage;
      apiService.fetchImage().then(data => {
        // const movies = data.results;
        // console.log('ok', data);
        addArticleImage(data);
      });
    } else {
      apiService.query = input.value;

      apiService.pagePl = currentPage;

      apiService.fetchFundFilms().then(data => {
        // const movies = data.results;
        // console.log('ok', data);
        addArticleImage(data);
      });
    }
  });
}

createPagination();
// console.log('createPagination();', createPagination());