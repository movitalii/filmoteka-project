// import {
//     getMovieDetails,
//     movieSearchByName,
//     getPopularMovies,
//     getMovieGenres,
//   } from './service_api';
  
//   // getPopularMovies(4);
//   // movieSearchByName('Memory', 2);
//   // getMovieDetails(120);
//   // getMovieGenres();
  

// import renderModal from './renderModal';
// import {fetchImages} from './fetchImages';
// import onCard from './card';



//   async function usePopularMovies(params) {
//     try {
//       const data = await getPopularMovies(params);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   async function getFilmByName(...params) {
//     try {
//       const arrData = await movieSearchByName(...params);
//       console.log(arrData.results);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   usePopularMovies(4);
//   getFilmByName('Live', 3);




import ApiService from './api-service';
import { renderModal, backdrop } from "./renderModal";

const cardGallery = document.querySelector('.gallery');
import fetchImages from './fetchImages';
import onCard from './card';

const refs = {
    renderModal: document.querySelector('.gallery'),
}

const apiService = new ApiService();
refs.renderModal.addEventListener('click', showCard);



function showCard(e) {
    e.preventDefault();
    console.log("/" +e.target.src.substring(e.target.src.lastIndexOf("/") + 1, e.target.src.length))
    fetchGallery("/" +e.target.src.substring(e.target.src.lastIndexOf("/") + 1, e.target.src.length));
       
    // console.log('click');
}



function fetchGallery(params) {

    apiService.fetchImage().then(data => {
        console.log(data.results)
        return data.results
    }).then(result => {
        result.forEach(element => {
            if (element.poster_path == params){
                console.log(element)
                renderModal(element)
                // return (element)
            } 
        
        });
    })

        // const cart = data.results.map(result => renderModal(result));
        // for (let i=0; i<cart.result; i++) {
        //     [i] = cart[i].result;
        // }
        // console.log([i]);
    // });

}
  


    // if (e.target.classList.contains('card_image')) return;
    
    // fetchGallery();

    // // const card = e.target.classList.contains('card_image');

    // // refs.renderModal.data = e.target;
    // // refs.renderModal.data = e.currentTarget;
    // console.log(e.target.classList.contains('card_image'));

   
       
    // // if (e.target.classList.contains('card_image')) {
        

    // // };
// }



// async function fetchGallery(e) {
    
//     apiService.fetchImage().then(data => {
    
//     data.results.map(result => renderModal(result)).join();

//         // for (let i=0; i<cart.result; i++) {
//         //     [i] = cart[i].result;
//         // }
       
//     });


// }