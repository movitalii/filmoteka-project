export default function onCart({backdrop_path, name, title, vote_average}) {
    const BASE_IMAGE = `https://image.tmdb.org/t/p/w500`
    return `<div class="cart">
    <img src="${BASE_IMAGE}${backdrop_path}" alt="A FISTFUL OF LEAD" class="cart_image" width="300">
    <h2 class="cart_name">${name||title}</h2>
    <p class="cart_title">Genre <span class="cart_span">Year </span><span class="cart_span-rating">  ${vote_average}</span></p>
</div>`
    
}