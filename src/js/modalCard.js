import ApiService from './api-service';
import { renderModal, backdrop } from './renderModal';

const cardGallery = document.querySelector('.gallery');
import fetchImages from './fetchImages';
import onCard from './card';
import { getInfo, saveInfo, removeInfo } from './storage_api';

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
          watched.addEventListener('click', e => {
            let lsArray = getInfo('watched');
            if (!lsArray) {
              saveInfo('watched', [element]);
            }
            if (lsArray.length == 0) {
              saveInfo('watched', [element]);
            }
            if (lsArray.length >= 1) {
              lsArray.forEach(elem => {
                if (elem.id == element.id) {
                  console.log('it Exist');
                  const index = lsArray.indexOf(elem);
                  // console.log(index);
                  lsArray.splice(index, 1);
                  // console.log(lsArray);
                  removeInfo('watched');
                  saveInfo('watched', lsArray);
                } else {
                  lsArray.push(element);
                  saveInfo('watched', lsArray);
                }
              });
            }

            // console.log('watched pressed');
          });
          // и тут немного костыльно
          queued.addEventListener('click', e => {
            let qArray = getInfo('queue');
            if (qArray) {
              qArray.push(element);
              saveInfo('queue', qArray);
            } else {
              saveInfo('queue', [element]);
            }
            console.log('queue pressed');
          });
        }
      });
    });
}
// watched.addEventListener('click', addToWatched(element));
// queued.addEventListener("click", addToQueue(element));

// function addToWatched(element) {
//   let lsArray = getInfo('watched');
//   if (lsArray) {
//     lsArray.push(element);
//     saveInfo('watched', lsArray);
//   } else {
//     saveInfo('watched', [element]);
//   }
//   console.log("watched pressed")
// }

// function addToQueue(element) {
//   let qArray = getInfo('queue');
//   if (qArray) {
//     qArray.push(element);
//     saveInfo('queue', qArray);
//   } else {
//     saveInfo('queue', [element]);
//   }
//   console.log("queue pressed")
// }

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
