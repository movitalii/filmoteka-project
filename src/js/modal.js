import { renderModal, backdrop } from "./templates/renderModal";

const cardGallery = document.querySelector('.gallery');

cardGallery.addEventListener('click', onModalOpen);

function onModalOpen(e) {

    backdrop.classList.remove('is-hidden');
}

fetch('https://api.themoviedb.org/3/movie/11?api_key=a5a9302ae32ac6fa75bc0508e4c74c0b')
    .then(response => response.json())
    .then(data => renderModal(data));