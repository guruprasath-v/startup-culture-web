const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



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