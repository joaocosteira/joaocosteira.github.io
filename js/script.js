const btn = document.getElementById('menu-btn');
const sidemenu = document.getElementById('sidemenu');

// Abrir e Fechar o SideMenu
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    //nav.classList.toggle('flex')
    //nav.classList.toggle('hidden')
    sidemenu.classList.toggle('open');
});


function updateList() {
    //Obter todas as sections
    const sections = [...document.querySelectorAll('section')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
    document.querySelectorAll(".carrousel-selected").forEach(c => c.classList.remove("carrousel-selected"));
    document.querySelectorAll(".carrousel-circle")[[...document.querySelectorAll('section')].indexOf(sections[0])].classList.add("carrousel-selected");

}

updateList();
window.addEventListener('wheel', () => {
    updateList();
}, false)



document.querySelectorAll(".carrousel-circle").forEach( ball =>{

    ball.addEventListener('click',() =>{
        document.querySelectorAll(".carrousel-selected").forEach(c => c.classList.remove("carrousel-selected"));
        ball.classList.add("carrousel-selected");
    });
    
});








