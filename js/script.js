/*const hamburgerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('.nav');


hamburgerEl.addEventListener('click', () =>{
    navEl.classList.toggle('nav-open');
    hamburgerEl.classList.toggle('hamburger-open');
} )
*/


// Load nav.html first
document.addEventListener('DOMContentLoaded', () => {
  // Load nav.html first
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data; // Inject nav

      // Now the nav is in the page, so we can safely select it:
      const hamburgerEl = document.querySelector('.hamburger');
      const navEl = document.querySelector('.nav');

      // Only add event listener if hamburgerEl exists
      if (hamburgerEl && navEl) {
        hamburgerEl.addEventListener('click', () => {
          navEl.classList.toggle('nav-open');
          hamburgerEl.classList.toggle('hamburger-open');
        });
      } else {
        console.error('Could not find hamburger or nav elements');
      }
    });
});
