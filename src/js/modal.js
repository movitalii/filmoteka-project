import renderModal from "./renderModal";

fetch('https://api.themoviedb.org/3/movie/400?api_key=a5a9302ae32ac6fa75bc0508e4c74c0b')
    .then(response => response.json())
    .then(data => renderModal(data));