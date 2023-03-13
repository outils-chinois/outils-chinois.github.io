//------------------------------------------------------------------------------
//------------------------------------CURSOR------------------------------------
//------------------------------------------------------------------------------
function cursorInit() {
	const cursorFollower = document.getElementById("cursorFollower")

	window.onmousemove = e => {
		const	mouseX = e.clientX - cursorFollower.offsetWidth/2,
					mouseY = e.clientY - cursorFollower.offsetHeight/2 - document.getElementsByTagName("nav")[0].offsetHeight;

		const keyframes = {
			transform: `translate(${mouseX}px, ${mouseY}px)`
		}

		cursorFollower.animate(keyframes, {
			duration: 800,
			fill: "forwards" //retains position after completing animation (= 800ms after mouse doesn't move)
		});
	};
}