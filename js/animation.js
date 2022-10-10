const itemsToAnimateLeft = document.querySelectorAll('.animLeft');
const itemsToAnimateRight = document.querySelectorAll('.animRight');

const joao = document.getElementById('joao');
const costeira = document.getElementById('costeira');
const sidemenuAnim = document.getElementById('sidemenu');

const observerLeft = new IntersectionObserver( entries => {
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add('animateLeft')
        }else{
            entry.target.classList.remove('animateLeft')
        }
    })
})

itemsToAnimateLeft.forEach(i => observerLeft.observe(i));



const observerRight = new IntersectionObserver( entries => {
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add('animateRight')
        }else{
            entry.target.classList.remove('animateRight')
        }
    })
})

itemsToAnimateRight.forEach(i => observerRight.observe(i));

const observerTop = new IntersectionObserver( entries => {
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add('animateTop')
        }
        //else{
        //    entry.target.classList.remove('animateTop')
        //}
    })
})

observerTop.observe(joao);

const observerBottom = new IntersectionObserver( entries => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animateBottom')
        }
        //else{
        //    entry.target.classList.remove('animateBottom')
        //}
    })
})

observerBottom.observe(costeira);

const observerSidemenu = new IntersectionObserver( entries => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animateLeftLong')
        }
        else{
            entry.target.classList.remove('animateLeftLong')
        }
    })
})

observerSidemenu.observe(sidemenuAnim);

