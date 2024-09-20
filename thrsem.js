document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const options = {
        threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});
