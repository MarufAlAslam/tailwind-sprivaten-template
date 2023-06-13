const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const modal = document.getElementById('modal');
const forms = document.querySelectorAll('form');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

const formSubmit = (e) => {
    e.preventDefault();
    modal.classList.remove('opacity-0');
}

forms.forEach(form => {
    form.addEventListener('submit', formSubmit);
})

modal.addEventListener('click', () => {
    modal.classList.add('opacity-0');
})