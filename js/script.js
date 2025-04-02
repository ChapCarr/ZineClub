
// Load nav.html first
document.addEventListener('DOMContentLoaded', () => {
  // Load nav.html first
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data; // Inject nav

     
      const hamburgerEl = document.querySelector('.hamburger');
      const navEl = document.querySelector('.nav');

      // add event listener if hamburgerEl exists
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
