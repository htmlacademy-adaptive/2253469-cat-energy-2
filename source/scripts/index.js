

const button = document.querySelector('.main-header__toggle');

const header = document.querySelector('header');

header.classList.remove('no-js');

header.classList.remove('main-header--opened');

header.classList.add('main-header--closed');


button.addEventListener('click', () => {
  if(header.classList.contains('main-header--opened')){
    header.classList.add('main-header--closed');
    header.classList.remove('main-header--opened');
    button.classList.add('main-header__toggle--burger');
    button.classList.remove('main-header__toggle--open');
  } else{
    header.classList.remove('main-header--closed');
    header.classList.add('main-header--opened');
    button.classList.remove('main-header__toggle--burger');
    button.classList.add('main-header__toggle--open');
  }
});

const div = document.querySelector('.example__slider');
document.querySelector('.example__slider-range').addEventListener('input', (e) => {
  div.style.setProperty('--position', `${e.target.value}%`);
});

