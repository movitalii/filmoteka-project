import Notiflix from 'notiflix';
import movieSearchByName from './service_api.js';

const refs = {
    formEl: document.querySelector('#form-search'),
    inputEl: document.querySelector('input'),
}

const { formEl, inputEl } = refs;

let inputValue = '';
let userSearch = '';
let totalHits = 0;
let page = 0;
let itemArr = [];

inputEl.addEventListener('input', onInput);
function onInput(evt) {
    inputValue = evt.currentTarget.value;
    return;
}

formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();
    userSearch = inputValue;
    page = 1;
    if (!userSearch) {
        deletePhotoMarkup();
        return;
    }
    deletePhotoMarkup();
    movieSearchByName(userSearch, page)
        .then(search => {
            totalHits = search.data.totalHits;
            if (totalHits > 0) {
                Notiflix.Notify.info(`Hooray! We found ${totalHits} films.`);
                renderPhotoMarkup(search);
                scrollStart();
            }
            itemArr = search.data.hits;
            if (!itemArr.length) {
                return Notiflix.Notify.failure(
                    'Sorry, there are no films matching your search query. Please try again.'
                );
            }
        })
        .catch(error => console.log(error));
}
