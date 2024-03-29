//------------------------------------------------------------------------------
//------------------------------------CURSOR------------------------------------
//------------------------------------------------------------------------------
function cursorInit() {
	const cursorFollower = document.getElementById("cursorFollower");
	cursorFollower.style.top = '0';
	cursorFollower.style.left = '0';

	//--------cursor animations--------:

	pdfType_cursor = (cursor) => {
		cursor.childNodes[3].innerHTML = 'PDF';
		cursor.childNodes[1].className = 'fa fa-folder-open';
		cursor.childNodes[1].style.transform = "rotate(0deg)"
	}

	videoType_cursor = (cursor) => {
		cursor.childNodes[3].innerHTML = 'Vidéo';
		cursor.childNodes[1].className = 'fa fa-play';
		cursor.childNodes[1].style.transform = "rotate(0deg)"
	}

	linkType_cursor = (cursor) => {
		cursor.childNodes[3].innerHTML = 'Liens';
		cursor.childNodes[1].className = 'fa fa-link';
		cursor.childNodes[1].style.transform = "rotate(0deg)"
	}

	//--------logic--------:

	cursor_preview_hover = (targetElement) => {
		eval(`${targetElement.classList[1]}_cursor(cursorFollower)`)
	}

	animate_cursor = (e, interacting) => {
		const	mouseX = e.clientX - cursorFollower.offsetWidth/2,
				mouseY = e.clientY - cursorFollower.offsetHeight/2

		const keyframes = {
			transform: `translate(${mouseX}px, ${mouseY}px) scale(${interacting ? 3 : 1}) rotate(${interacting ? 360 : 0}deg)`
		}

		if (interacting) {
			if (e.target.closest(".cursorInteractable") !== null) {cursor_preview_hover(e.target.closest(".cursorInteractable"));};
			cursorFollower.childNodes[3].style.opacity = 1;

		} else {
			cursorFollower.childNodes[3].style.opacity = '';
			cursorFollower.childNodes[1].className = 'fa fa-arrow-right';
			cursorFollower.childNodes[1].style.transform = '';
		};

		cursorFollower.animate(keyframes, {
			duration: 400,
			fill: "forwards" //retains position after completing animation (= 400ms after mouse doesn't move)
		});
	};


	var eventSkipCounter = 0;

	onmousemoveFunction = e => {
		if (eventSkipCounter == 0) {
			const interacting = e.target.closest(".cursorInteractable") !== null; //currently hovering element with class ".cursorInteractable" (bool)
			animate_cursor(e, interacting);
		} else if (eventSkipCounter == 5) {eventSkipCounter = -1};
		eventSkipCounter++
	};

	cursorSettingCheck = e => {
		if (eval(document.getElementById('trailerSetting').getAttribute('data-setting_active'))) {
			window.onmousemove = onmousemoveFunction;
			cursorFollower.style.opacity = "";
		} else {
			window.onmousemove = undefined;
			cursorFollower.style.opacity = "0";
		}
	}

	cursorSettingCheck(undefined);

	window.onmouseup = e => {
		setTimeout(() => cursorSettingCheck(e), 5);
	}
}