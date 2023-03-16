const bulb_on_icon = `<i class="fa fa-lightbulb"></i>`
const bulb_off_icon = `<i class="fa fa-lightbulb-on"></i>`

const navbarHTML = `
<a id="logo" title="Page d'accueil" href=""><img alt="Webpage Logo" src="resources/images/logo_white.png"></a>
<a href="flashcards/">Cartes Flash</a>
<a href="cours/">Cours</a>
<a href="autres/hamming-code/">Autres</a>
<button id="changeThemeButton" onclick="changeTheme();">${bulb_off_icon}</button>
<a id="githubLink" title="Github" href="https://github.com/outils-chinois/outils-chinois.github.io"><i class="fa-brands fa-github"></i></a>
`;

//----------------------------------cookies------------------------------------
function cookieDict() {
	if (document.cookie != '') {document.cookie = `darkTheme=true; expires=${getExpiryDate()}; path=/`} //if there is none, create darkTheme cookie

	// let rawCookie = str;
	let rawCookie = document.cookie;
	let cookieList = rawCookie.split("; ")

	var cookieDictionary = {};
	for (var i = 0; i <= cookieList.length - 1; i++) {
		cookieDictionary[cookieList[i].split("=")[0]] = cookieList[i].split("=")[1];
	}

	return cookieDictionary
}

function getExpiryDate(years=2) {
	const yearsSinceZero = new Date().getFullYear() + years - 1970; //the number of years will have passed since 1970
	const singleYear = 1000*60*60*24*(365+1/4); //1 year in milliseconds
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
	var darkTheme = eval(cookieDict()["darkTheme"]);
	if (darkTheme) {
		button.innerHTML = bulb_on_icon;
		document.cookie = `darkTheme=false; expires=${getExpiryDate()}; path=/`
	} else {
		button.innerHTML = bulb_off_icon;
		document.cookie = `darkTheme=true; expires=${getExpiryDate()}; path=/`
	};
	

}