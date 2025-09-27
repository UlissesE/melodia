document.addEventListener('DOMContentLoaded', function() {
    // Menu transparency effect on scroll
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
    });

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    });

    // Newsletter subscription
    const emailInput = document.getElementById('email-address');
    const subscribeButton = emailInput.nextElementSibling; // Assuming button is next sibling

    subscribeButton.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
            alert('Por favor, insira um email.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        alert('Inscrição realizada com sucesso!');
        emailInput.value = '';
    });

    // Contact form
    const contactForm = document.querySelector('form[action="#"]');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('full-name').value.trim();
        const phone = document.getElementById('phone-number').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
