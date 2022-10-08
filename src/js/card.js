export default function onCard({poster_path, name, title, release_date, vote_average}) {
    const BASE_IMAGE = `https://image.tmdb.org/t/p/original`
    return `<div class="cart">
    <img src="${BASE_IMAGE}${poster_path}" alt="A FISTFUL OF LEAD" class="cart_image" width="300">
    <h2 class="cart_name">${name||title}</h2>
    <p class="cart_title">Genre <span class="cart_span">${release_date}</span><span class="cart_span-rating">  ${vote_average}</span></p>
</div>`
    
}