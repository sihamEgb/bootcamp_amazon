var itemsInCart = 0;

function handleAddToCart(event){
	console.log(event);
	itemsInCart++;
	document.querySelector('.itemsNumber').innerHTML = itemsInCart;
}

function handleImageChange(event){
	const showcase = document.querySelector('.image--big');
	showcase.src = event.target.src;
	console.log("hello")
	console.log(event.target);
}


function attachListenerToImage(image){
	image.addEventListener('click',handleImageChange);
}
document.querySelectorAll('.image--small').forEach(image => attachListenerToImage(image));
document.getElementById('addToCart').addEventListener('click',handleAddToCart);