document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    });
    // Trigger on load
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
    });
});

function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}
