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
});
h1.addEventListener('mouseenter',alerth1);
setTimeout(()=>h1.removeEventListener('mouseenter',alerth1),4000);


//event propagation to menu

/*document.querySelectorAll('.nav__link').forEach(function(el){
el.addEventListener('click',function (e) {
  e.preventDefault()
  const id=this.getAttribute('href')
  console.log(id);
  document.querySelector(id).scrollIntoView({behavior:'smooth'})
})
})*/

//1.add event listner to common parent elemet
//2.determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click',function (e) {
e.preventDefault();
//matching events
if(e.target.classList.contains('nav__link')){
  const id=e.target.getAttribute('href')
  document.querySelector(id).scrollIntoView({behavior:'smooth'})
}
});

//add tabbed component 

const tabs=document.querySelectorAll('.operations__tab');
const tabcontnainer=document.querySelector('.operations__tab-container');
const tabscontent=document.querySelectorAll('.operations__content');
// 
tabcontnainer.addEventListener('click',function (e) {
  const clicked=e.target.closest('.operations__tab');

  //remove active class
  tabs.forEach(t=>t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')

  tabscontent.forEach(t=>t.classList.remove('operations__content--active'))

  //guard clause to prevent clicks that happened outside the tabs area
  if(!clicked) return;
 //add  active class
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active')
});

//menu fade navigation
const nav=document.querySelector('.nav') 
const hoverhandle=function(e){
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    const siblings=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');
  
siblings.forEach(el=>{
  if(el !== link) el.style.opacity=this;
  });
logo.style.opacity=this;
  }
}
nav.addEventListener('mouseover',hoverhandle.bind(0.5))
nav.addEventListener('mouseout',hoverhandle.bind(1))

//sticky navigation using intersection observer api
/*const obsCallback=function (entries,observer) {
   entries.forEach(entry=>{
    console.log(entry)
   })
}

const obsOptions={
  root:null,
  threshold:0.1
}

const observer=new IntersectionObserver(obsCallback,obsOptions);
observer.observe(section1)*/
const navheightcal=nav.getBoundingClientRect().height;
const stickyheader=document.querySelector('.header');
const sitckyNav=function (entries) {
  const [entry]=entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')

  
}
const headerobserver=new IntersectionObserver(sitckyNav,{
  root:null,
  threshold:0,
  // rootMargin:`-${navheightcal}px`
})

headerobserver.observe(stickyheader)

//reaval section on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));