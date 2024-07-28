document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navbarLinks = document.querySelectorAll('#navbari a');

    const setActiveLink = (event) => {
        navbarLinks.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    navbarLinks.forEach(link => link.addEventListener('click', setActiveLink));

    const initialHash = window.location.hash;
    if (initialHash) {
        const initialLink = document.querySelector(`a[href="${initialHash}"]`);
        if (initialLink) {
            initialLink.classList.add('active');
        }
    };
    const addHeaderBackground = () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-scrolled');
        } else {
            header.classList.remove('bg-scrolled');
        }
    };

    window.addEventListener('scroll', addHeaderBackground);

});

const themeToggle = document.getElementById('theme-toggle');
const thememToggle = document.getElementById('theme-mtoggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});
thememToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});


const toggleMenu = () => {
    var navbar = document.getElementById('mobile-menu');
    if (navbar.classList.contains('flex')) {
        navbar.classList.remove('flex');
        navbar.classList.add('hidden');
    } else {
        navbar.classList.add('flex');
        navbar.classList.remove('hidden');
    }
};

document.getElementById('mobile-menu').addEventListener('click', toggleMenu);
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}