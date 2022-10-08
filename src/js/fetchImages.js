import ApiService from './api-service';
import onCard from './card';

const apiService = new ApiService();

apiService.fetchImage().then(data => {
  addArticleImage(data);
});

function addArticleImage(data) {
  // console.log(data.results);
  const cart = data.results.map(result => onCard(result)).join('');
  document.querySelector(`.gallery`).insertAdjacentHTML('beforeend', cart);
}
