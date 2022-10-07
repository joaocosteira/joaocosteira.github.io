const itemsToAnimateLeft = document.querySelectorAll('.animLeft');
const itemsToAnimateRight = document.querySelectorAll('.animRight');

const observerLeft = new IntersectionObserver( entries => {
    entries.forEach((entry)=>{

        console.log(entry)
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

        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('animateRight')
        }else{
            entry.target.classList.remove('animateRight')
        }
    })
})

itemsToAnimateRight.forEach(i => observerRight.observe(i));