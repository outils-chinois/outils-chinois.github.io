//------------------------------------------------------------------------------
//------------------------------------CURSOR------------------------------------
//------------------------------------------------------------------------------
const cursorFollower = document.getElementById("cursorFollower")

window.onmousemove = e => {
	const	mouseX = e.clientX - 25,
			mouseY = e.clientY - 25;

	cursorFollower.style.transform = `translate(${mouseX}px, ${mouseY}px)`
}