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

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header=document.querySelector('.header')
const allsection=document.querySelectorAll('.section');
console.log(allsection)

const allbuttons=document.getElementsByTagName('button');
console.log(allbuttons)

const message=document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='we use cookies to give better surfing experiacene <button class="btn btn--close--cookie">got it </button>'
header.append(message)

document.querySelector('.btn--close--cookie').addEventListener('click',()=>{
  message.remove()
})
//inline style
message.style.backgroundColor='#37383d';
message.style.width='120%';

/*document.documentElement.style.setProperty(
  '--color-primary','yellow'
)*/
//this used to set variable property defined in the root element of html doc.


//set attribute
/*const logo=document.querySelector('.nav__logo');
logo.setAttribute('designer','misikir')*/

//smooth scroll to feature section
const btnscrollto=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1')
btnscrollto.addEventListener('click',function(e){
  section1.scrollIntoView({behavior:'smooth'})
})


//listen for event then remove it

const h1=document.querySelector('h1')
const alerth1 =(function (e) {
alert('you are reading the heading of the page')  
})
h1.addEventListener('mouseenter',alerth1)
setTimeout (()=>h1.removeEventListener('mouseenter',alerth1),3000)