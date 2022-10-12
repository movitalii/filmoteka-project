import ApiService from './api-service';

const refs = {
  searchForm: document.querySelector('#form-search'),
  input: document.querySelector('.form-group__input'),
  // errorMessage: document.querySelector('.error-notification'),
};
const apiService = new ApiService();

console.log(apiService);

refs.searchForm.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', onFundName);

function onFormSubmit(e) {
  e.preventDefault();
  console.log('click');
  apiService.query = e.currentTarget.elements.searchQuery.value;
  apiService.fetchFundFilms();
  apiService.fetchFundFilms().then(data => {
    moves = data;
  });
}

// function onFundName(e) {
//     apiService.query = e.currentTarget.value.trim();
//     console.log(e.currentTarget.value)
//     apiService.fetchFundFilms();
// }