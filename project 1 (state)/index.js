let navbar = document.querySelector('.navbar')
const menuList = document.querySelector('.list')
let prevScrollPos = window.scrollY || window.pageYOffset;

window.addEventListener("scroll", function() {
  let currentScrollPos = window.scrollY || window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling ke atas
    document.getElementById("navbar").classList.remove("navbar-hide");
    document.getElementById("navbar").classList.add("navbar-show");
  } else {
    // Scrolling ke bawah
    document.getElementById("navbar").classList.remove("navbar-show");
    document.getElementById("navbar").classList.add("navbar-hide");
  }

  prevScrollPos = currentScrollPos;
});

window.addEventListener('scroll', function() {
  const scrolledClass = 'scrolled';
  const listClass= 'black'
  if (window.scrollY > 234) {
    navbar.classList.add(scrolledClass);
    menuList.classList.add(listClass)
  } else {
    navbar.classList.remove(scrolledClass);
    menuList.classList.remove(listClass)
  }

});

function menuToggle() {
  const toggleMenu = document.querySelector ('.list')
  toggleMenu.classList.toggle ('active')
  navbar.style.bacgroundColor='black'
  console.log ('ok')

}

function loginForm() {
  const toggleMenu = document.querySelector ('.Login')
  toggleMenu.classList.toggle ('active')
  console.log ('ok')

}
function loginFormMini() {
  const toggleMenu = document.querySelector ('.LoginMini')
  toggleMenu.classList.toggle ('active')
  console.log ('ok')

}


