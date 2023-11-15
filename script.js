
        // Add this script for showing/hiding the fixed navbar
        window.onscroll = function() {
            var navbar = document.querySelector('.custom-nav');
            var homeSection = document.querySelector('.home');
            var aboutSection = document.querySelector('.about');
                console.log('Scrolling...');

            if (window.scrollY > homeSection.offsetHeight) {
                 navbar.style.display = 'flex';
//                 navbar.classList.add('visible');
                } 
            else {
                navbar.style.display = 'none';
//                navbar.classList.remove('visible');
            }
        }
                