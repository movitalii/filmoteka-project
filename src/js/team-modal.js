import * as basicLightbox from 'basiclightbox';
import vitaliiUrl from '../images/vitalii.jpg';
import serhiiUrl from '../images/serhii.jpg';
import vasylUrl from '../images/vasyl.jpg';
import maksUrl from '../images/maks.jpg';
import serhiiSlUrl from '../images/serhiiSl.jpg';
import olgaUrl from '../images/olga.jpg';
import edUrl from '../images/ed.jpg';
import oleksandrUrl from '../images/oleksandr.jpg';
import olegUrl from '../images/oleg.jpg';
import andriiUrl from '../images/andrii.jpg';
import githubUrl from '../images/sprite.svg'

const markup = `<div class="team-wrapper">
    
    <div class="team-card">
        <a href="https://github.com/movitalii" target="_blank" class="team-link">
            <img src="${vitaliiUrl}" loading="lazy" alt="Vitalii" class="team-image">
            <p class="team-name">Vitalii</p>
            <p class="team-role">Team Lead</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>            
    </div>

    <div class="team-card">
       <a href="https://github.com/SerhiiLazar" target="_blank" class="team-link">
            <img src="${serhiiUrl}" loading="lazy" alt="Serhii" class="team-image">
            <p class="team-name">Serhii</p>
            <p class="team-role">Scrum Master</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>
    </div> 
    
    <div class="team-card">
        <a href="https://github.com/dikaryok" target="_blank" class="team-link">
            <img src="${vasylUrl}" loading="lazy" alt="Vasyl" class="team-image">
            <p class="team-name">Vasyl</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a> 
    </div>

    <div class="team-card">
       <a href="https://github.com/maksnovakov" target="_blank" class="team-link">
            <img src="${maksUrl}" loading="lazy" alt="Maks" class="team-image">
            <p class="team-name">Maks</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>     
    </div>

    <div class="team-card">
        <a href="https://github.com/Slapchenko" target="_blank" class="team-link">
            <img src="${serhiiSlUrl}" loading="lazy" alt="Serhii" class="team-image">
            <p class="team-name">Serhii</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>   
    </div>

    <div class="team-card">
        <a href="https://github.com/Oliko136" target="_blank" class="team-link">
            <img src="${olgaUrl}" loading="lazy" alt="Olga" class="team-image">
            <p class="team-name">Olga</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a> 
    </div>

    <div class="team-card">
        <a href="https://github.com/anfernee84" target="_blank" class="team-link">
            <img src="${edUrl}" loading="lazy" alt="Ed" class="team-image">
            <p class="team-name">Ed</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>  
    </div>
    
    <div class="team-card">
        <a href="https://github.com/AlexCheverda" target="_blank" class="team-link">
            <img src="${oleksandrUrl}" loading="lazy" alt="Oleksandr" class="team-image">
            <p class="team-name">Oleksandr</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>   
    </div>
    
    <div class="team-card">
        <a href="https://github.com/andrii-pozniak" target="_blank" class="team-link">
            <img src="${andriiUrl}" loading="lazy" alt="Andrii" class="team-image">
            <p class="team-name">Andrii</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>      
    </div>
    
    <div class="team-card">
        <a href="https://github.com/Albertukraine" target="_blank" class="team-link">
            <img src="${olegUrl}" loading="lazy" alt="Oleg" class="team-image">
            <p class="team-name">Oleg</p>
            <p class="team-role">Developer</p>
            <svg class="github__icon" width="30" height="30">
                    <use href="${githubUrl}#github-icon"></use>
            </svg>
        </a>        
    </div>`;

const container = document.querySelector('.js-team-modal');

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
