const foundling = document.getElementById('foundling');
const spickles = document.getElementById('spickles');
const foundling_desc = document.querySelector('.foundling-desc');
const spickles_desc = document.querySelector('.spickles-desc');
console.log(foundling_desc);


foundling.addEventListener('mouseover', () =>{
    foundling_desc.style.display = "flex";

})
foundling.addEventListener('mouseleave', () =>{
    foundling_desc.style.display = "none";  
})

spickles.addEventListener('mouseover', () =>{
    spickles_desc.style.display = "flex";

})
spickles.addEventListener('mouseleave', () =>{
    spickles_desc.style.display = "none";  
})