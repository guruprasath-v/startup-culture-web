const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const cardFooter = document.getElementsByClassName('button')[0]
const courseContent = document.getElementsByClassName('course-content')[0]
const couurseOverview = document.getElementsByClassName('course-over')[0]
const cardButton = document.getElementsByClassName('button')[0]



// JavaScript to hide the loading screen and display the main content after 4 seconds
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("main-content").style.display = "block";
        document.querySelector(".loading-screen").style.display = "none";
    }, 4000); // 4000 milliseconds (4 seconds)
});

toggleButton.addEventListener('click',(event)=>{
    navbarLinks.classList.toggle('active');
    event.stopPropagation(); 
})

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbarLinks.contains(event.target);
    
    if (!isClickInsideMenu && navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
    }
});

// Prevent clicks within the menu from closing it
navbarLinks.addEventListener('click', (event) => {
    event.stopPropagation();
});


let d = 1;

cardFooter.addEventListener('click', () => {
    d = 1-d;
    if(d == 0){
        courseContent.style.display = 'none';
        couurseOverview.style.display = 'flex';
        cardButton.textContent = 'Show less...';
    }
    if(d == 1){
        courseContent.style.display = 'block';
        couurseOverview.style.display = 'none';
        cardButton.textContent = 'Show More...';
    }
})



document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Get the element with the ID 'customers-testimonials'
    const testimonialsCarousel = document.getElementById('customers-testimonials');

    if (testimonialsCarousel) {
        // Initialize the carousel
        const owlCarousel = new window.OwlCarousel(testimonialsCarousel, {
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots: true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    }
});

 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});




