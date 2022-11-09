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

//observerTop.observe(joao);

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

//observerBottom.observe(costeira);

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


const tl = gsap.timeline({ defaults : { duration: .1 }})



tl
    .from('.c',{ display: "block", delay: .4})
    .from('.o',{ display: "block"})
    .from('.s',{ display: "block"})
    .from('.t',{ display: "block"})
    .from('.e',{ display: "block"})
    .from('.i',{ display: "block"})
    .from('.r',{ display: "block"})
    .from('.a',{ display: "block", duration: .2})
    .fromTo('#costeira',{ opacity: 0,y : '20vh' },{  opacity: 1,y: 0, duration: .2})
    .fromTo('#joao',{  opacity: 0,y : '-5vh' },{  opacity: 1,y: 0, duration: .7, ease: 'elastic'})
