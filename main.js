feather.replace();

const elements = document.querySelectorAll(
    '.info-card, .curiosity-card, .timeline-item, .project-card'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.15
});

elements.forEach((element, index) => {

    element.classList.add('reveal');

    element.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(element);

});