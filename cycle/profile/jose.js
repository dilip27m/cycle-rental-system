function toggleDropdown() {
    document.getElementById("profile-dropdown").classList.toggle("show");
}

function toggleNavLinks() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.closest('.profile-container')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    // Do not hide nav-links if the profile container or nav links themselves are clicked
    if (!event.target.closest('.hamburger') && !event.target.closest('.nav-links') && !event.target.closest('.profile-container')) {
        var navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === "flex" && window.innerWidth <= 768) {
            navLinks.style.display = "none";
        }
    }
}

// Handle window resize event to show/hide nav links based on window size
window.onresize = function() {
    var navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
}