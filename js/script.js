const btn = document.getElementById('menu-btn');     //hamburguer Menu
const sidemenu = document.getElementById('sidemenu');//sidemenu panel


//Open and close Sidemenu
function toggleSideMenu(){
    btn.classList.toggle('open')  
    sidemenu.classList.toggle('open');
}
btn.addEventListener('click',toggleSideMenu);


/**
 * Update Selected Carousel Ball, Navbar & Sidemenu Anchors.
 */
function updateSelectedByIndex(index,mainClass,selectedClass){
    document.querySelectorAll(`.${selectedClass}`).forEach(c => c.classList.remove(selectedClass));
    document.querySelectorAll(`.${mainClass}`)[index].classList.add(selectedClass);
}
const setCarouselBallByIndex = (index) => updateSelectedByIndex(index,"carrousel-circle","carrousel-selected")
const updateSidemenuByIndex  = (index) => updateSelectedByIndex(index,"sidemenu-a","sidemenu-selected")
const updateMainNavByIndex   = (index) => updateSelectedByIndex(index,"mainmenu-a","mainmenu-selected")

/**
 * Go Home By Clicking The Signature Icon
 */
document.getElementById('signature').addEventListener('click',()=>{
    setCarouselBallByIndex(0);
    updateSidemenuByIndex(0);
    updateMainNavByIndex(0);
})

/**  
 * Page Scroll Event Listner
 */
function changeSelectedCarousel() {
    const sections = [...document.querySelectorAll('section')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
    const selectedIndex = [...document.querySelectorAll('section')].indexOf(sections[0]);

    setCarouselBallByIndex(selectedIndex);  // Update Carousel
    updateSidemenuByIndex(selectedIndex);   // Update Sidemenu
    updateMainNavByIndex(selectedIndex);    // Update Navbar

}

changeSelectedCarousel();
window.addEventListener('wheel', () => {
    changeSelectedCarousel();
}, false)

/** 
 * Click Event Listeners on Carousel Balls, Sidebar & Navbar Links:
 * - When an element is clicked: updates itself & tells the others to do the same
*/
function addClickEvent(mainClass,selectedClass, updateFunctions){

    document.querySelectorAll(`.${mainClass}`).forEach( (elem, elemIdx) =>{

        elem.addEventListener('click',() =>{
            document.querySelectorAll(`.${selectedClass}`).forEach(c => c.classList.remove(selectedClass));
            elem.classList.add(selectedClass);
            updateFunctions.forEach( f => f(elemIdx));
        });
    
    });

}

addClickEvent("carrousel-circle","carrousel-selected",[updateSidemenuByIndex,updateMainNavByIndex]);
addClickEvent("sidemenu-a","sidemenu-selected",[toggleSideMenu,setCarouselBallByIndex,updateMainNavByIndex]);
addClickEvent("mainmenu-a","mainmenu-selected",[setCarouselBallByIndex,updateSidemenuByIndex]);