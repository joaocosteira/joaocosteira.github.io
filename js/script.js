const btn = document.getElementById('menu-btn');
const sidemenu = document.getElementById('sidemenu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    //nav.classList.toggle('flex')
    //nav.classList.toggle('hidden')
    sidemenu.classList.toggle('open');
});