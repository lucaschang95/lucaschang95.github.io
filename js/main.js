const navHome = document.querySelector('#navbar li:nth-of-type(1)');
const navAbout = document.querySelector('#navbar li:nth-of-type(2)');
const navGallery = document.querySelector('#navbar li:nth-of-type(3)');
const navContact = document.querySelector('#navbar li:nth-of-type(4)');
const homePositionDot = document.querySelector('#home .locationDot');
const homeMap = document.querySelector('#home iframe');
const aboutPositionDot = document.querySelector('#about .locationDot');
const aboutMap = document.querySelector('#about iframe');


navHome.addEventListener('click', function() {
    console.log('click navHome!');
    document.querySelector('#home').scrollIntoView();
});

navAbout.addEventListener('click', function() {
    console.log('click navAbout!');
    document.querySelector('#about').scrollIntoView();
});

navGallery.addEventListener('click', function() {
    document.querySelector('#gallery').scrollIntoView();
});

navContact.addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView();
});

homePositionDot.addEventListener('mouseenter', function(){
    console.log('mouse enter!');
    homeMap.style.visibility = 'visible';
});

homePositionDot.addEventListener('mouseleave', function(){
    console.log('mouse leave!');
    homeMap.style.visibility = 'hidden';
});

aboutPositionDot.addEventListener('mouseenter', function(){
    console.log('mouse enter!');
    aboutMap.style.visibility = 'visible';
});

aboutPositionDot.addEventListener('mouseleave', function(){
    console.log('mouse leave!');
    aboutMap.style.visibility = 'hidden';
});