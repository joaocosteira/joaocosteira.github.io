//hamburguer Menu
const btn = document.getElementById('menu-btn');
//sidemenu panel
const sidemenu = document.getElementById('sidemenu');



//Open and close Sidemenu
function toggleSideMenu(){
    btn.classList.toggle('open')  
    sidemenu.classList.toggle('open');
}
btn.addEventListener('click',toggleSideMenu);




function setCarouselBallByIndex(index){
    document.querySelectorAll(".carrousel-selected").forEach(c => c.classList.remove("carrousel-selected"));
    document.querySelectorAll(".carrousel-circle")[index].classList.add("carrousel-selected");
}


function changeSelectedCarousel() {
    const sections = [...document.querySelectorAll('section')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
    const selectedIndex = [...document.querySelectorAll('section')].indexOf(sections[0]);

    setCarouselBallByIndex(selectedIndex);  // Update selected Ball
    updateSidemenuByIndex(selectedIndex);   // Update Selected Section on the menu
    updateMainNavByIndex(selectedIndex);

}

//Scroll Listening
changeSelectedCarousel();
window.addEventListener('wheel', () => {
    changeSelectedCarousel();
}, false)



document.querySelectorAll(".carrousel-circle").forEach( (ball, ballIdx) =>{

    ball.addEventListener('click',() =>{
        document.querySelectorAll(".carrousel-selected").forEach(c => c.classList.remove("carrousel-selected"));
        ball.classList.add("carrousel-selected");
        updateSidemenuByIndex(ballIdx);
        updateMainNavByIndex(ballIdx);
    });

});



function updateSidemenuByIndex(index){
    document.querySelectorAll(".sidemenu-selected").forEach(c => c.classList.remove("sidemenu-selected"));
    document.querySelectorAll(".sidemenu-a")[index].classList.add("sidemenu-selected");
}


document.querySelectorAll('.sidemenu-a').forEach( (anchor, anchorIndex) => {
    anchor.addEventListener('click',() =>{
        document.querySelectorAll(".sidemenu-selected").forEach(c => c.classList.remove("sidemenu-selected"));
        anchor.classList.add("sidemenu-selected");
        toggleSideMenu();
        setCarouselBallByIndex(anchorIndex);
        updateMainNavByIndex(anchorIndex);
    });
});


function updateMainNavByIndex(index){
    document.querySelectorAll(".mainmenu-selected").forEach(c => c.classList.remove("mainmenu-selected"));
    document.querySelectorAll(".mainmenu-a")[index].classList.add("mainmenu-selected");
}

document.querySelectorAll('.mainmenu-a').forEach( (anchor, anchorIndex) => {
    anchor.addEventListener('click',() =>{
        document.querySelectorAll(".mainmenu-selected").forEach(c => c.classList.remove("mainmenu-selected"));
        anchor.classList.add("mainmenu-selected");
        setCarouselBallByIndex(anchorIndex);
        updateSidemenuByIndex(anchorIndex);
    });
});