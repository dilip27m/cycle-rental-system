document.addEventListener('DOMContentLoaded', () => {
    const achievements = document.querySelectorAll('.achievement');
    const achievementList = document.querySelector('.achievement-list');
    const achievementIndicators = document.querySelector('.achievement-indicators');
    let currentIndex = 0;

    // Create indicators
    achievements.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateAchievements();
        });
        achievementIndicators.appendChild(indicator);
    });

    function updateAchievements() {
        const translateX = -currentIndex * window.innerWidth;
        achievementList.style.transform = `translateX(${translateX}px)`;

        // Update indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    updateAchievements(); // Initial update

    // Automatic scrolling
    setInterval(() => {
        currentIndex = (currentIndex + 1) % achievements.length;
        updateAchievements();
    }, 5000);
});

// Scroll animation for about content
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var aboutContent = document.querySelector(".about-content");
        var bounding = aboutContent.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            aboutContent.classList.add("visible");
        } else {
            aboutContent.classList.remove("visible");
        }
    });
});
