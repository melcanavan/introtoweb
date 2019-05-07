var img = document.getElementById('bunny') 

img.style.left = '0px'

function moveBunny(){
	var oldLeft = parseInt(img.style.left)
	var newLeft = oldLeft + 10
	if (newLeft > window.innerWidth){
		newLeft = -300
	}
	img.style.left = newLeft + 'px'
	
}

window.setInterval(moveBunny, 50)