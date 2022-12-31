const foundling = document.getElementById('foundling');
const spickles = document.getElementById('spickles');
const foundling_desc = document.querySelector('.foundling-desc');
const spickles_desc = document.querySelector('.spickles-desc');


const width = ()  => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const tl_foundling = gsap.timeline({ 
    defaults : { duration: .1 }, 
    paused: true
})

tl_foundling.fromTo('.foundling-desc',{x: "100%",duration:0.01},{
    duration: .5,
    x: 0,
    ease: Power2.easeInOut
},"side")
tl_foundling.from('.foundling-desc > *',{
    duration: .7,
    opacity:0,
    stagger: {
        amount: 0.5
    },
    y: 100
},"side+=.4")

const tl_spickles = gsap.timeline({ 
    defaults : { duration: .1 }, 
    paused: true
})

tl_spickles.fromTo('.spickles-desc',{x: "100%",duration:0.01},{
    duration: .5,
    x: 0,
    ease: Power2.easeInOut
},"side")
tl_spickles.from('.spickles-desc > *',{
    duration: .7,
    opacity:0,
    stagger: {
        amount: 0.5
    },
    y: 100
},"side+=.4")


foundling.addEventListener('mouseover', () =>{
    if(width() > 961)
        //foundling_desc.style.display = "flex";
        tl_foundling.play().timeScale(1);

})
foundling.addEventListener('mouseleave', () =>{
    //foundling_desc.style.display = "none";  
    tl_foundling.timeScale(2.5);
    tl_foundling.reverse();
})

spickles.addEventListener('mouseover', () =>{
    if(width() > 961)
        //spickles_desc.style.display = "flex";
        tl_spickles.play().timeScale(1);

})
spickles.addEventListener('mouseleave', () =>{
    //spickles_desc.style.display = "none";  
    tl_spickles.timeScale(2.5);
    tl_spickles.reverse();
})