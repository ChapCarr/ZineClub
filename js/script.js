/*const hamburgerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('.nav');


hamburgerEl.addEventListener('click', () =>{
    navEl.classList.toggle('nav-open');
    hamburgerEl.classList.toggle('hamburger-open');
} )
*/


// Load nav.html first
fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Now the nav is in the page, so we can safely select it:
    const hamburgerEl = document.querySelector('.hamburger');
    const navEl = document.querySelector('.nav');

    hamburgerEl.addEventListener('click', () => {
      navEl.classList.toggle('nav-open');
      hamburgerEl.classList.toggle('hamburger-open');
    });
  });
