const scrollBtnEl = document.getElementById('scroll-up');

scrollBtnEl.addEventListener('click', onScrollUp);

function onScrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
  scrollBtnEl.hidden = pageYOffset < document.documentElement.clientHeight;
});