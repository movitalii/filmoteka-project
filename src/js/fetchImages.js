import ApiService from './api-service';
import onCard from './card';
// Ed import//
import { saveInfo, getInfo, removeInfo } from './storage_api';
/////////////
const apiService = new ApiService();

apiService.fetchImage().then(data => {
  saveInfo(data.page, data.results); // добавил сохранение в локалсторедж при обращении к АПИ////////
  addArticleImage(data);
});

function addArticleImage(data) {
  console.log('data');
  console.log(data.results);
  const cart = data.results.map(result => onCard(result)).join('');
  // console.log('cart', cart)
  document.querySelector(`.gallery`).insertAdjacentHTML('beforeend', cart);
}
