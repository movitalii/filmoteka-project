import ApiService from './api-service';
import { renderModal, backdrop } from './renderModal';

const cardGallery = document.querySelector('.gallery');
import fetchImages from './fetchImages';
import onCard from './card';
import { getInfo, saveInfo } from './storage_api';

//refs
const refs = {
  renderModal: document.querySelector('.gallery'),
};

const apiService = new ApiService();
refs.renderModal.addEventListener('click', showCard);

function showCard(e) {
  e.preventDefault();
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
                newArr.push(el.name);
              }
            });
          });
          element.genre_ids = newArr;
          renderModal(element);
          let watched = document.querySelector('#watched');
          let queued = document.querySelector('#queue');
          // тут немного по ебанутому сделал, но так работает
          watched.addEventListener('click', () => {
            let watchedMovies = getInfo('watched') || [];
            // console.log('from storage:', watchedMovies);
            const isAlreadyThere = watchedMovies.find(
              movie => movie.id === element.id
            );
            // console.log({ isAlreadyThere });
            if (isAlreadyThere) {
              // console.log('removing from watched');
              watchedMovies = watchedMovies.filter(
                movie => movie.id !== element.id
              );
            } else {
              // console.log('adding movie to watched');
              watchedMovies.push(element);
            }
            saveInfo('watched', watchedMovies);
          });

          queued.addEventListener('click', () => {
            let queuedMovies = getInfo('queue') || [];
            const isAlreadyQueued = queuedMovies.find(
              movie => movie.id === element.id
            );
            if (isAlreadyQueued) {
              queuedMovies = queuedMovies.filter(
                movie => movie.id !== element.id
              );
            } else {
              queuedMovies.push(element);
            }
            saveInfo('queue', queuedMovies);
          });
        }
      });
    });
}

// не трогать! это костыль на случай, если локал сторедж не отработает
replacementGenres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
