'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener(
  'click', openModal
));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


////////////////////////////////////////////////
//Strat Practice
////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


//Select elements
const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections)

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Creating an inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');

message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionality and analutics.<button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message);

// Delete element;
document.querySelector(".btn--close--cookie");
addEventListener('click', function(){
  message.removeChild(message);
})

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height = 
 Number.parseFloat(getComputedStyle(message).height, 10) + '30px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo)


console.log(logo.designer)
console.log(logo.getAttribute('designer'))

// Classes

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();