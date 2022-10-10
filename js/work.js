const foundling = document.getElementById('foundling');
const spickles = document.getElementById('spickles');
const foundling_desc = document.querySelector('.foundling-desc');
const spickles_desc = document.querySelector('.spickles-desc');


const width = ()  => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


foundling.addEventListener('mouseover', () =>{
    if(width() > 961)
        foundling_desc.style.display = "flex";

})
foundling.addEventListener('mouseleave', () =>{
    foundling_desc.style.display = "none";  
})

spickles.addEventListener('mouseover', () =>{
    if(width() > 961)
        spickles_desc.style.display = "flex";

})
spickles.addEventListener('mouseleave', () =>{
    spickles_desc.style.display = "none";  
})