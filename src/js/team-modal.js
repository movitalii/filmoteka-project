import * as basicLightbox from 'basiclightbox';
import vitaliiUrl from '../images/vitalii.jpeg';
import serhiiUrl from '../images/serhii.jpeg';
import vasylUrl from '../images/vasyl.jpeg';
import maksUrl from '../images/maks.jpeg';
import serhiiSlUrl from '../images/serhiiSl.jpeg';
import olgaUrl from '../images/olga.jpeg';
import edUrl from '../images/ed.jpeg';
import oleksandrUrl from '../images/oleksandr.jpg';
import olegUrl from '../images/oleg.jpg';
import andriiUrl from '../images/andrii.jpg';

const markup = `<div class="team-wrapper">
    <a href="https://github.com/movitalii" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${vitaliiUrl}" alt="Vitalii" class="team-image">
            <p class="team-name">Vitalii</p>
            <p class="team-role">Team Lead</p>
        </div>
    </a>

    <a href="https://github.com/SerhiiLazar" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${serhiiUrl}" alt="Serhii" class="team-image">
            <p class="team-name">Serhii</p>
            <p class="team-role">Scrum Master</p>
        </div>
    </a>

    <a href="https://github.com/dikaryok" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${vasylUrl}" alt="Vasyl" class="team-image">
            <p class="team-name">Vasyl</p>
            <p class="team-role">Developer</p>
        </div>
    </a>

    <a href="https://github.com/maksnovakov" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${maksUrl}" alt="Maks" class="team-image">
            <p class="team-name">Maks</p>
            <p class="team-role">Developer</p>
        </div>
    </a>

    <a href="https://github.com/Slapchenko" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${serhiiSlUrl}" alt="Serhii" class="team-image">
            <p class="team-name">Serhii</p>
            <p class="team-role">Developer</p>
        </div>
    </a>

    <a href="https://github.com/Oliko136" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${olgaUrl}" alt="Olga" class="team-image">
            <p class="team-name">Olga</p>
            <p class="team-role">Developer</p>
        </div>
    </a>

    <a href="https://github.com/anfernee84" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${edUrl}" alt="Ed" class="team-image">
            <p class="team-name">Ed</p>
            <p class="team-role">Developer</p>
        </div>
    </a>

    <a href="https://github.com/AlexCheverda" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${oleksandrUrl}" alt="Oleksandr" class="team-image">
            <p class="team-name">Oleksandr</p>
            <p class="team-role">Developer</p>
        </div>
    </a>

    <a href="https://github.com/andrii-pozniaka" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${andriiUrl}" alt="Andrii" class="team-image">
            <p class="team-name">Andrii</p>
            <p class="team-role">Developer</p>
        </div>
    </a>
    
    <a href="https://github.com/andrii-pozniaka" target="_blank" class="team-git">
        <div class="team-card">
            <img src="${olegUrl}" alt="Oleg" class="team-image">
            <p class="team-name">Oleg</p>
            <p class="team-role">Developer</p>
        </div>
    </a>`;
const container = document.querySelector('.js-team-modal');
const markup2 = `<img src="${katyaUrl}"/>`;

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
