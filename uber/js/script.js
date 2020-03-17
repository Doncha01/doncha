window.addEventListener('DOMContentLoaded', () => {
    const header__nav = document.querySelector('.header__nav'),
    headerItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        header__nav.classList.toggle('header__active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            header__nav.classList.toggle('header__active');
        })
    })
})