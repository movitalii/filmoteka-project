import { renderModal, backdrop } from './renderModal';
import { getInfo, saveInfo } from './storage_api';

export function fetchFromGallery(args, key) {
  let searchPage = getInfo(key);
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
