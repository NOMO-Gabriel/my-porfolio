import {faX} from "@fortawesome/free-solid-svg-icons";

/* toggle icon navbar*/
let  menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle({faX});
    navbar.classList.toggle('active');

}


/* scroll section active links */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY + 150;

    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
                console.log(`Section active: ${id}`);
            }
        }
        /*sticky navbar*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        /*remove toggle icon and navbar when click navbar link (scroll) */
        menuIcon.classList.toggle({faX});
        navbar.classList.toggle('active');

    });
};



