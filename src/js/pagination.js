import ApiService from './api-service';
import makeFilmsMarkup from './templates/filmsListMarkupTempl';
// import { API_service } from './apiSevice';
import createFilmsByGenre from './fetchImages';
import onPageFilms from './fetchImages';

const Pagination = require('tui-pagination');
const apiService = new ApiService();
// const api_Service = new API_service();

// const gallery = document.querySelector('.gallery');
// const insertFilmsMarkupToHome = filmsMarkup =>
//   gallery.insertAdjacentHTML('beforeend', filmsMarkup);

export function createPagination() {
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

  pagination.on('afterMove', event => {
    // gallery.innerHTML = ''; // создает пустую галерею/стирает предыдущие карточки
    // api_Service.page = event.page; //
    // api_Service
    //   .fetchTrending()
    //   .then(({ results }) => {
    //     const markup = makeFilmsMarkup(results);
    //     // ссылка на галерею
    //     insertFilmsMarkupToHome(markup);
    //     localStorage.setItem(`currentFilm`, JSON.stringify(results));
    //   })
    //   .catch(error => console.log(error));
    const currentPage = event.page;
    console.log(currentPage);
    onPageFilms(currentPage);
    console.log('what', onPageFilms(currentPage));
    // apiService.page = currentPage;
    // apiService
    //   .fetchImage()
    //   .then(({ results }) => {
    //     const markup = createFilmsByGenre(results);
    //     document
    //       .querySelector(`.gallery`)
    //       .insertAdjacentHTML('beforeend', markup);
    //   })
    //   .catch(error => console.log(error));
    // console.log('createPagination -> createFilmsByGenre', apiService());
  });
}

// createPagination(80);
console.log('createPagination();', createPagination());
// console.log(
//   'try',
//   api_Service.fetchTrending().then(({ results }) => {
//     const markup = makeFilmsMarkup(results);
//     // ссылка на галерею
//     insertFilmsMarkupToHome(markup);
//     // localStorage.setItem(`currentFilm`, JSON.stringify(results));
//   })
// );

// console.log('try2', apiService());
