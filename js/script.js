const button = document.querySelector('.toggle-btn');
const navItems = document.querySelector('.navbar-nav');
const body = document.querySelector('body');

button.addEventListener('click', function () {
  navItems.classList.toggle('display-block');
});
