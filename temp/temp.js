//------------------------------------------------------------------------------
//------------------------------------CURSOR------------------------------------
//------------------------------------------------------------------------------
const cursorFollower = document.getElementById("cursorFollower")

window.onmousemove = e => {
	const	mouseX = e.clientX - 25,
			mouseY = e.clientY - 25;

	cursorFollower.style.transform = `translate(${mouseX}px, ${mouseY}px)`
}

const scaleAnimation = [
	{
		transform: "scale(1.5)"
	},
	{
		duration: 8000
	}
];

cursorFollower.addEventListener("click", () => {
  cursorFollower.animate(scaleAnimation[0], scaleAnimation[1]);
});