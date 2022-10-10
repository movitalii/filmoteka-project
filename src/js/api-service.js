import axios from "axios";
export default class ApiService {
    constructor (){
        this.images = '';
        this.page = 1;
        this.id = null;
    }   

    async fetchGenres() {
        const options = {
        key: `3ff086ca8fded08ba42938358b3327b4`,      
       
        };
        const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list`
        let  {key} = options;
       
         const response  = await axios.get(`${BASE_URL}?api_key=${key}&language=en-US`)
          const {genres} = response.data;          
            console.log('id', [{genres}].id)
            this.page += 1;        
            // genre_ids
            // console.log(genres)
            return {genres};
         };    

     async fetchImage() {
        const options = {
        key: `3ff086ca8fded08ba42938358b3327b4`,      
       
        };
        const BASE_URL = `https://api.themoviedb.org/3/trending/all/day`
        let  {key} = options;
       
         const response  = await axios.get(`${BASE_URL}?api_key=${key}`)
          const data = response.data;          
         
            this.page += 1;        
     console.log(data.results)
            return data;
         }; 
         
         
   
     clearForm() {
        this.page = 1;
    }

    get searchQuery() {
        return this.images;
    }
    set searchQuery(newSearchQuery){
        this.images = newSearchQuery;
    }
    
};