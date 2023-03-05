function updateVisuals() {
	let websiteContainers = document.getElementsByClassName("quickAccessElement");
	if (innerWidth <= 750) {
		for (var i = 0; i < websiteContainers.length; i++) {
			websiteContainers[i].style.backgroundImage = `url(${websiteContainers[i].childNodes[1].src})`; //.childNodes[1] == <img>
		};
	} else {
		for (var i = 0; i < websiteContainers.length; i++) {
			websiteContainers[i].style.backgroundImage = "";
		};
	};
};

//---------------------------init----------------------:
updateVisuals();