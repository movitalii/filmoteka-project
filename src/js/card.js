export default function onCard({poster_path, name, title, genre_ids, release_date, vote_average, first_air_date}) {
    const BASE_IMAGE = `https://image.tmdb.org/t/p/original`
    return `<div class="card">
    <img src="${BASE_IMAGE}${poster_path}" alt="A FISTFUL OF LEAD" class="card_image" width="300">
    <h2 class="card_name">${name||title}</h2>
    <div class="card_text">
      <p class="card_title">${genre_ids}</p>
      <p class="card_year"> | ${
        release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
      }</p>      
    </div>
</div>`    
}

/* <p class="card_rating">  ${ vote_average.toFixed(1)}</p> */
