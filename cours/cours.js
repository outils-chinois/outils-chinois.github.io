//------------------------------------------------------------------------------
//------------------------------------CURSOR------------------------------------
//------------------------------------------------------------------------------
function cursorInit() {
	const cursorFollower = document.getElementById("cursorFollower")

	pdf_cursor = (cursor) => {
		cursor.childNodes[3].innerHTML = 'PDF';
		cursor.childNodes[1].className = 'fa fa-folder-open';
		cursor.childNodes[1].style.transform = "rotate(0deg)"
	}

	animate_cursor = (e, interacting) => {
		const	mouseX = e.clientX - cursorFollower.offsetWidth/2,
				mouseY = e.clientY - cursorFollower.offsetHeight/2 - document.getElementsByTagName("nav")[0].offsetHeight; //nav height somehow affects it??

		const keyframes = {
			transform: `translate(${mouseX}px, ${mouseY}px) scale(${interacting ? 4 : 1}) rotate(${interacting ? 360 : 0}deg)` //interacting? Yes: 4, else: 1
		}

		if (interacting) {
			if (e.target.closest(".pdfPreviewWrapper") !== null) {pdf_cursor(cursorFollower);};
			cursorFollower.childNodes[3].style.opacity = 1;

		} else {
			cursorFollower.childNodes[3].style.opacity = '';
			cursorFollower.childNodes[1].className = 'fa fa-arrow-right';
			cursorFollower.childNodes[1].style.transform = '';
		};

		cursorFollower.animate(keyframes, {
			duration: 800,
			fill: "forwards" //retains position after completing animation (= 800ms after mouse doesn't move)
		});
	};

	window.onmousemove = e => {
		const interacting = e.target.closest(".cursorInteractable") !== null; //currently hovering element with class ".cursorInteractable" (bool)
		animate_cursor(e, interacting);
	};
}