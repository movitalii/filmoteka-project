import * as basicLightbox from 'basiclightbox';
import vitaliiUrl from '../images/vitalii.jpg'
import oleksandrUrl from '../images/oleksandr.jpg'
import edUrl from '../images/ed.jpg'
import olegUrl from '../images/oleg.jpg'
import serhiiSlUrl from '../images/serhii-1.jpg'
import vasylUrl from '../images/vasyl.jpg'
import avatarUrl from '../images/avatar.jpg'
import maksUrl from '../images/maks.jpg'
import spriteUrl from '../images/sprite.svg';

const markup = `<div class="team-wrapper">
<div class="team-card">
  <a href="https://github.com/movitalii" target="_blank" class="team-git">
    <img src="${vitaliiUrl}" alt="Vitalii" class="team-image">
    <p class="team-name">Vitalii</p>
    <p class="team-role">Team Lead</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/SerhiiLazar" target="_blank" class="team-git">
    <img src="${avatarUrl}" alt="Serhii" class="team-image">
    <p class="team-name">Serhii</p>
    <p class="team-role">Scrum Master</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/dikaryok" target="_blank" class="team-git">
    <img src="${vasylUrl}" alt="Vasyl" class="team-image">
    <p class="team-name">Vasyl</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/Slapchenko" target="_blank" class="team-git">
    <img src="${serhiiSlUrl}" alt="Serhii" class="team-image">
    <p class="team-name">Serhii</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/Albertukraine" target="_blank" class="team-git">
    <img src="${olegUrl}" alt="Oleg" class="team-image">
    <p class="team-name">Oleg</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/anfernee84" target="_blank" class="team-git">
    <img src="${edUrl}" alt="Ed" class="team-image">
    <p class="team-name">Ed</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/Oliko136" target="_blank" class="team-git">
    <img src="${avatarUrl}" alt="Olga" class="team-image">
    <p class="team-name">Olga</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/andrii-pozniak" target="_blank" class="team-git">
    <img src="${avatarUrl}" alt="Andrii" class="team-image">
    <p class="team-name">Andrii</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/AlexCheverda" target="_blank" class="team-git">
    <img src="${oleksandrUrl}" alt="Oleksandr" class="team-image">
    <p class="team-name">Oleksandr</p>
    <p class="team-role">Developer</p>
  </a>     
</div>

<div class="team-card">
  <a href="https://github.com/maksnovakov" target="_blank" class="team-git">
    <img src="${maksUrl}" alt="Maks" class="team-image">
    <p class="team-name">Maks</p>
    <p class="team-role">Developer</p>
  </a>     
</div>`;

const containerTeam = document.querySelector('.js-team-modal');

containerTeam.addEventListener('click', openModal);

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
