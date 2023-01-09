const btn = document.getElementById('menu-btn');     //hamburguer Menu
const sidemenu = document.getElementById('sidemenu');//sidemenu panel

const sidemenu_tl = gsap.timeline({ paused : "true"});
sidemenu_tl.fromTo('.sidemenu',{x: "-100%",duration:0.01},{
    duration: .1,
    x: 0,
    ease: Power2.easeInOut
},"side");

sidemenu_tl.from('.sidemenu a',{
    duration: .2,
    opacity:0,
    stagger: {
        amount: 0.5
    },
    y: 100
},"side+=.5")
sidemenu_tl.fromTo(".dog img",{
     y: "-5rem",
     opacity:0,
},{y:0,duration:0.2,opacity:1},"side+=.8");

sidemenu_tl.fromTo(".sidemenu .line",{
    width:0,
},{duration:1,stagger:.1,width:"100vw"},"side+=0.2")

sidemenu_tl.fromTo(".sidemenu .vertical-line",{
    height:0,
},{duration:1,stagger:.1,height:"100vh"},"side+=0.4")


//Open and close Sidemenu
function toggleSideMenu(){
    btn.classList.toggle('open')  
    sidemenu.classList.toggle('open');

    if(sidemenu.classList.contains('open')){
        sidemenu_tl.play().timeScale(1.3);
    }else{
        sidemenu_tl.timeScale(3);
        sidemenu_tl.reverse();  
    }
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

    //const jumpIndex = selectedIndex >= 3 ? selectedIndex - 1 :  selectedIndex;

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


/**Windows 8 tiles flip */
// document.querySelectorAll('.phone-square').forEach( square => {

//     square.addEventListener( 'click', () => { 
//         square.classList.add("click");
//         //setTimeout(()=>{ square.classList.remove("flip")}, 200)
//     })
// })


//blur effect
const work_cells = document.querySelectorAll('.work-cell');

work_cells.forEach(cell => {
    cell.addEventListener("mouseenter", () => {
        work_cells.forEach(w => { 
            if(w  !== cell){
                w.classList.toggle("blur");
            }
        })
    });
    cell.addEventListener("mouseleave", () => {
        work_cells.forEach(w => w.classList.remove("blur"))
    });
})
