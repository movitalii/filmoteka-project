import ApiService from './api-service';
import { renderModal, backdrop } from './renderModal';

const cardGallery = document.querySelector('.container-open-modal');
import fetchImages from './fetchImages';
import onCard from './card';
import { getInfo, saveInfo } from './storage_api';

//refs
const refs = {
  renderModal: document.querySelector('.gallery'),
};

const apiService = new ApiService();
if (refs.renderModal) {
  refs.renderModal.addEventListener('click', showCard);
}

window.addEventListener('keydown', closeModalHandler);

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    backdrop.classList.add('is-hidden');
  }
}

function showCard(e) {
  e.preventDefault();
  backdrop.classList.remove('is-hidden');
  fetchGallery(
    '/' +
      e.target.src.substring(
        e.target.src.lastIndexOf('/') + 1,
        e.target.src.length
      )
  );
}

function fetchGallery(params) {
  apiService
    .fetchImage()
    .then(data => {
      console.log(data.results);
      return data.results;
    })
    .then(result => {
      result.forEach(element => {
        let genres = getInfo('genre_card') || replacementGenres;
        let newArr = [];
        if (element.poster_path == params) {
          element.genre_ids.forEach(id => {
            genres.find(el => {
              if (el.id == id) {
                newArr.push(` ${el.name}`);
              }
            });
          });
          element.genre_ids = newArr;
          renderModal(element);
          let closeModal = document.querySelector('[data-modal-close]');
          closeModal.addEventListener('click', onCloseBtn);

          function onCloseBtn() {
            backdrop.classList.add('is-hidden');
          }

          // костыли!!! Но попробую сделать по человечески.
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
              queuedMovies = queuedMovies.filter(
                movie => movie.id !== element.id
              );
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
    });
}

// не трогать! это костыль на случай, если локал сторедж не отработает
// replacementGenres = [
//   {
//     id: 28,
//     name: 'Action',
//   },
//   {
//     id: 12,
//     name: 'Adventure',
//   },
//   {
//     id: 16,
//     name: 'Animation',
//   },
//   {
//     id: 35,
//     name: 'Comedy',
//   },
//   {
//     id: 80,
//     name: 'Crime',
//   },
//   {
//     id: 99,
//     name: 'Documentary',
//   },
//   {
//     id: 18,
//     name: 'Drama',
//   },
//   {
//     id: 10751,
//     name: 'Family',
//   },
//   {
//     id: 14,
//     name: 'Fantasy',
//   },
//   {
//     id: 36,
//     name: 'History',
//   },
//   {
//     id: 27,
//     name: 'Horror',
//   },
//   {
//     id: 10402,
//     name: 'Music',
//   },
//   {
//     id: 9648,
//     name: 'Mystery',
//   },
//   {
//     id: 10749,
//     name: 'Romance',
//   },
//   {
//     id: 878,
//     name: 'Science Fiction',
//   },
//   {
//     id: 10770,
//     name: 'TV Movie',
//   },
//   {
//     id: 53,
//     name: 'Thriller',
//   },
//   {
//     id: 10752,
//     name: 'War',
//   },
//   {
//     id: 37,
//     name: 'Western',
//   },
// ];
