function menuToggle() {
  const toggleMenu = document.querySelector ('.list')
  toggleMenu.classList.toggle ('active')
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrolledClass = 'scrolled';
  
  
  if (window.scrollY > 234) {
    navbar.classList.add(scrolledClass);
  } else {
    navbar.classList.remove(scrolledClass);
  }
  
});











 
  

