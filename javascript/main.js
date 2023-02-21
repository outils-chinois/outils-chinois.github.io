const bulb_on_SVG = `<svg class="navbar_SVG" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path stroke="currentColor"fill="currentColor" d="m5.868 15.583a8.938 8.938 0 0 1 -2.793-7.761 9 9 0 1 1 14.857 7.941 5.741 5.741 0 0 0 -1.594 2.237h-3.338v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-3.437a6.839 6.839 0 0 0 -1.695-2.417zm2.132 4.417v.31a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.31z"/></svg>`
const bulb_off_SVG = `<svg class="navbar_SVG" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path stroke="currentColor"fill="currentColor" d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.31a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z"/></svg>`

const navbarHTML = `
<a id="logo" title="Page d'accueil" href=""><img alt="Webpage Logo" src="resources/images/logo_white.png"></a>
<a href="flashcards/">Cartes Flash</a>
<a href="#">Cours</a>
<button id="changeThemeButton" onclick="changeTheme();">${bulb_off_SVG}</button>
`;

//----------------------------------cookies------------------------------------
function cookieDict() {
	if (document.cookie != '') {document.cookie = `darkTheme=true; expires=${getExpiryDate()}; path=/`} //if there are no cookies, create darkTheme cookie

	// let rawCookie = str;
	let rawCookie = document.cookie;
	let cookieList = rawCookie.split("; ")

	var cookieDictionary = {};
	for (var i = 0; i <= cookieList.length - 1; i++) {
		cookieDictionary[cookieList[i].split("=")[0]] = cookieList[i].split("=")[1];
	}

	return cookieDictionary
}

function getExpiryDate() {
	const yearsSinceZero = new Date().getFullYear() - 1969; //the number of years will have passed since 1970 next year
	const singleYear = 1000*60*60*24*(365+1/4); //1 year in ms
	return new Date(singleYear*yearsSinceZero)
}

//-----------------------------------------------------------------------------

function initializeNavbar() {
	let navbarElement = document.createElement("nav");
	navbarElement.innerHTML = navbarHTML;
	document.body.appendChild(navbarElement);
}

function changeTheme() {
	let button = document.getElementById("changeThemeButton");
	const darkTheme = eval(cookieDict()["darkTheme"])
	if (darkTheme) {
		button.innerHTML = bulb_on_SVG;
		document.cookie = `darkTheme=false; expires=${getExpiryDate()}; path=/`
	} else {
		button.innerHTML = bulb_off_SVG;
		document.cookie = `darkTheme=true; expires=${getExpiryDate()}; path=/`
	};
	

}