const hamburgerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('.nav');


hamburgerEl.addEventListener('click', () =>{
    navEl.classList.toggle('nav-open');
    hamburgerEl.classList.toggle('hamburger-open');
} )

