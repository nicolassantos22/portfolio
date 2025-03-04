const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('nav-overlay');

// Abrir o menu
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

// Fechar o menu ao clicar no overlay
navOverlay.addEventListener('click', () => {
    nav.classList.remove('active');
    navOverlay.classList.remove('active');
});


const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const closeModalButtons = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.modal');

portfolioBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const modalId = box.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});