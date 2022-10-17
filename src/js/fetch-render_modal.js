import { renderModal, backdrop } from './renderModal';
import { getInfo, saveInfo } from './storage_api';
import { onClickQueue, onClickWatched } from './render-cards-library';

export function fetchFromGallery(args, key) {
  let searchPage = getInfo(key);
  console.log(args);
  if (args == '/temp-inventory-landing.jpg') {
    renderModal(fakePage);
    let closeModal = document.querySelector('[data-modal-close]');
    closeModal.addEventListener('click', onCloseBtn);
    function onCloseBtn() {
      backdrop.classList.add('is-hidden');
    }
    let watched = document.querySelector('#watched');
    let queued = document.querySelector('#queue');
    watched.classList.add('is-hidden');
    queued.classList.add('is-hidden');
  }
  let arrayOfGenres = [];
  let genres = getInfo('genre_card');
  searchPage.forEach(element => {
    if (element.poster_path == args) {
      element.genre_ids.forEach(id => {
        genres.find(el => {
          if (el.id == id) {
            arrayOfGenres.push(` ${el.name}`);
          }
        });
      });
      element.genre_ids = arrayOfGenres;
      console.log(element);
      renderModal(element);

      let closeModal = document.querySelector('[data-modal-close]');
      closeModal.addEventListener('click', onCloseBtn);

      function onCloseBtn() {
        backdrop.classList.add('is-hidden');
      }
      let isWatched = getInfo('watched') || [];
      let alreadyWatched = isWatched.find(movie => movie.id === element.id);
      let watched = document.querySelector('#watched');
      if (alreadyWatched) {
        watched.textContent = 'Remove from watched';
      }

      let isQueued = getInfo('queue') || [];
      let alreadyQueued = isQueued.find(movie => movie.id === element.id);
      let queued = document.querySelector('#queue');
      if (alreadyQueued) {
        queued.textContent = 'Remove from queued';
      }
      watched.addEventListener('click', () => {
        let watchedMovies = getInfo('watched') || [];
        // console.log('from storage:', watchedMovies);

        const isAlreadyThere = watchedMovies.find(
          movie => movie.id === element.id
        );
        // console.log({ isAlreadyThere });
        if (isAlreadyThere) {
          // console.log('removing from watched');
          watched.textContent = 'Add to watched';
          watchedMovies = watchedMovies.filter(
            movie => movie.id !== element.id
          );
          watched.textContent = 'Add to Watched';
        } else {
          watched.textContent = 'Remove from watched';
          // console.log('adding movie to watched');
          watchedMovies.push(element);
          watched.textContent = 'Remove from Watched';
        }
        saveInfo('watched', watchedMovies);
        onClickWatched();
        return;
      });

      let watchedMovies = getInfo('watched') || [];

      const isAlreadyThere = watchedMovies.find(
        movie => movie.id === element.id
      );

      if (isAlreadyThere) {
        watched.textContent = 'Remove from Watched';
      } else {
        watched.textContent = 'Add to Watched';
      }

      queued.addEventListener('click', () => {
        let queuedMovies = getInfo('queue') || [];
        const isAlreadyQueued = queuedMovies.find(
          movie => movie.id === element.id
        );
        if (isAlreadyQueued) {
          queued.textContent = 'Add to queue';
          queuedMovies = queuedMovies.filter(movie => movie.id !== element.id);
          queued.textContent = 'Add to Queue';
        } else {
          queued.textContent = 'Remove to queue';
          queuedMovies.push(element);
          queued.textContent = 'Remove from Queue';
        }
        saveInfo('queue', queuedMovies);
        onClickQueue();
      });

      let queuedMovies = getInfo('queue') || [];

      const isAlreadyQueued = queuedMovies.find(
        movie => movie.id === element.id
      );

      if (isAlreadyQueued) {
        queued.textContent = 'Remove from Queue';
      } else {
        queued.textContent = 'Add to Queue';
      }
    }
  });
}

const fakePage = {
  adult: null,
  backdrop_path: null,
  genre_ids: ['fake paging'],
  id: 1000000000000001,
  original_language: 'en',
  original_title: 'Under construction :)',
  overview: 'Unfortunatelly, this page isn`t ready yet...',
  popularity: 100500,
  poster_path: '/ty7LXa7RpT6g8v0oe3q7XIruCup.jpg',
  release_date: '1970-01-01',
  title: 'Under construction :)',
  video: null,
  vote_average: 10,
  vote_count: 1000000000,
};
