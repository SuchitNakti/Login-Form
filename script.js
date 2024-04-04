const wrapper = document.querySelector('.wrapper');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconcancel = document.querySelector('.icon-cancel');




registerLink.addEventListener('click', ()=>{

    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>{

    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{

    wrapper.classList.add('active-popup');
})

iconcancel.addEventListener('click', ()=>{

    wrapper.classList.remove('active-popup');
})