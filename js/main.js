const navbar = document.querySelector('.navbar');
const navHome = document.querySelector('.navbar li:nth-of-type(1)');
const navAbout = document.querySelector('.navbar li:nth-of-type(2)');
const navGallery = document.querySelector('.navbar li:nth-of-type(3)');
const navContact = document.querySelector('.navbar li:nth-of-type(4)');
const homePositionDot = document.querySelector('#home .locationDot');
const homeMap = document.querySelector('#home iframe');
const downArrow = document.querySelector('#home img');
const aboutPositionDot = document.querySelector('#about .locationDot');
const aboutMap = document.querySelector('#about iframe');


function scrollToAbout() {
    document.querySelector('#about').scrollIntoView();
}

navHome.addEventListener('click', function() {
    console.log('click navHome!');
    document.querySelector('#home').scrollIntoView();
});

navAbout.addEventListener('click', scrollToAbout);

navGallery.addEventListener('click', function() {
    document.querySelector('#gallery').scrollIntoView();
});

navContact.addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView();
});

// homePositionDot.addEventListener('mouseenter', function(){
//     console.log('mouse enter!');
//     homeMap.style.visibility = 'visible';
// });

// homePositionDot.addEventListener('mouseleave', function(){
//     console.log('mouse leave!');
//     homeMap.style.visibility = 'hidden';
// });


window.addEventListener('load', function() {
    console.log('page is fully loaded!');
    document.querySelector('section#home h2').classList.add('welcomeAnimationQuick');
    document.querySelector('section#home a').classList.add('welcomeAnimationSlow');
});