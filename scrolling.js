function updateList() {
	console.log("Scrolling...")
}


updateList();
window.addEventListener('scroll', () => {
    updateList();
})

//console.log("Scrolling...")