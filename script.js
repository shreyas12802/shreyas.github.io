
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const navbar = document.querySelector('.collapse-nav'); // Use class selector instead of id selector
    var homeSection = document.querySelector('.home');
    var aboutSection = document.querySelector('.about');
    if (document.body.scrollTop > homeSection.offsetHeight || document.documentElement.scrollTop > homeSection.offsetHeight) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
}
function toggleNavbar() {
    const verticalNavbar = document.querySelector('.collapse-nav.vertical');
    verticalNavbar.classList.toggle('show');
  }

function maintoggleNavbar() {
    const verticalNavbar = document.querySelector('.main-nav-vertical');
    verticalNavbar.style.display = verticalNavbar.style.display === 'block' ? 'none' : 'block';
//    verticalNavbar.classList.toggle('show');
//    if (verticalNavbar.style.display="none")
//    {verticalNavbar.style.display="block";}
//    else if (verticalNavbar.style.display="block") {verticalNavbar.style.display="none";}
}
