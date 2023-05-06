// ======profile picture======

const profilePic = document.querySelector('.profile-p')
const closeProfile = document.querySelector('.close-profile')
const profilePicture = document.querySelector('.profile-picture')
const popUp = document.querySelector('.popup')

const openProfile = () =>{
    profilePicture.style.transform = 'translateY(0)'
   
}
const closeProfilepopup = () =>{
    profilePicture.style.transform = 'translateY(-100%)'
   
}


profilePic.addEventListener('click', openProfile);
closeProfile.addEventListener('click', closeProfilepopup);

// ====Email popup=====

const emailButton =document.querySelector('.e-mail')
const emailPopup = document.querySelector('.email')
const emailsentPopup = document.querySelector('.email-sent')
const callMe = document.querySelector('.call-me')
const callcardPopup = document.querySelector('.call')



const sendButton = document.querySelector('.send-btn')
const backButton = document.querySelector('.back-button')
const backButtonOne = document.querySelector('.back-button1')
const okButton = document.querySelector('.ok-btn')




// ======email======

const openeMail = () =>{
    emailPopup.style.display= 'flex';
}

const closeMail = () =>{
    emailPopup.style.display= 'none';
}

emailButton.addEventListener('click', openeMail);
backButton.addEventListener('click', closeMail);

// ==========call==========

const opencallPopup = () =>{
    callcardPopup.style.display = 'flex'
}

const closeCall = () =>{
    callcardPopup.style.display= 'none';
}


callMe.addEventListener('click', opencallPopup);
backButtonOne.addEventListener('click', closeCall);

// ===========About Nav==============

const barsButton= document.querySelector('.bars')
const barButton= document.querySelector('.bars1')
const aboutNav = document.querySelector('.about-nav')


const toggleNav = () =>{
    aboutNav.style.transform = 'none'
    barsButton.style.display = 'none'
    barButton.style.display = 'flex'
}
const Navtoggle = () =>{
    aboutNav.style.transform = 'translatey(22%)'
    barsButton.style.display = 'flex'
    barButton.style.display = 'none'
}

barsButton.addEventListener('click', toggleNav);
barButton.addEventListener('click', Navtoggle);

// ===================My project slider=============

const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const slideContainer = document.querySelector('.slide-container')




const moveSlide = () =>{
    const indexSlider = parseInt(slideContainer.style.getPropertyValue);
    slideContainer.style.setProperty('--slider-index', indexSlider - 1);
}
const mooveSlide = () =>{
    const indexSlider = parseInt(slideContainer.style.getPropertyValue);
    slideContainer.style.setProperty('--slider-index', indexSlider + 1);
    
}
console.log(indexSlider);

leftBtn.addEventListener('click', moveSlide);
rightBtn.addEventListener('click', mooveSlide);