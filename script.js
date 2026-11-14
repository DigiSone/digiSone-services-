window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if(preloader) { preloader.style.opacity = '0'; setTimeout(() => preloader.style.display = 'none', 500); }
    }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (window.innerWidth > 768 && dot) {
        window.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
            outline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 400, fill: 'forwards' });
        });
    }

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = document.querySelector('.scroll-progress');
        if(progress) progress.style.width = (scrollTop / scrollHeight) * 100 + '%';
        
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
        });
    });
});

function showToast(msg) {
    const toast = document.getElementById('toast');
    if(toast) {
        toast.innerText = msg; toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}