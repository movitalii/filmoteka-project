export const backdrop = document.querySelector('.backdrop');
import iconUrl from '../images/sprite.svg';

export function renderModal({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre_ids,
  overview,
  name,
}) {
  const markup = `<div class="modal">
                        <button type="button" class="modal__btn-close" data-modal-close>
                            <svg class="icon-close" width="14" height="14">
                            <use href="${iconUrl}#close-icon"></use>
                            </svg>
                        </button>

                        <img class="modal__image" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title} poster">

                        <h2 class="modal__title">${title}</h2>

                        <p class="modal__info">Vote / Votes <span class="modal__info-value-vote">${vote_average}</span> / <span class="modal__info-value">${vote_count}</span></p>
                        <p class="modal__info">Popularity <span class="modal__info-value">${popularity}</span></p>
                        <p class="modal__info">Original Title <span class="modal__info-value">${
                          original_title || name
                        }</span></p>
                        <p class="modal__info">Genre <span class="modal__info-value">${genre_ids}</span></p>

                        <h3 class="modal__about">About</h3>
                        <p class="modal__about-text">${overview}</p>

                        <div class="modal__btn-container">
                        <button id="watched" type="button" class="modal__btn modal__btn-watched"></button>
                        <button id="queue" type="button" class="modal__btn modal__btn-queue"></button>
                        </div>
                    </div>`;
  backdrop.innerHTML = markup;
}
