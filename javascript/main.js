const navbarHTML = `
<a id="logo" title="Page d'accueil" href=""><img alt="Webpage Logo" src="resources/images/logo_white.png"></a>
<a href="flashcards/">Cartes Flash</a>
<a href="cours/">Cours</a>
<a href="editeur_de_texte/">Editeur de texte</a>
<a href="autres/hamming-code/">Autres</a>
<a id="githubLink" title="Github" href="https://github.com/outils-chinois/outils-chinois.github.io"><i class="fa-brands fa-github"></i></a>

<div data-settings_open="false" id="settingsContainer">
	<button id="navSettingsButton" onclick="openSettings();"><i class="fa-solid fa-gear"></i></button>
	<ul>
		<li>
			<p>Theme</p>
			<button class="activeSettingsButton" onclick="changeSettingsValue(this);" data-setting_active="true">
				<i class="fa-solid fa-toggle-on"></i>
			</button>
		</li>
		
		<li>
			<p>Cursor</p>
			<button class="activeSettingsButton" onclick="changeSettingsValue(this);" data-setting_active="true">
				<i class="fa-solid fa-toggle-on"></i>
			</button>
		</li>
	</ul>
</div>

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

const singleYear = 1000*60*60*24*(365+1/4); //1 year in milliseconds
getExpiryDate = (years=2) => new Date(singleYear * (new Date().getFullYear() + years - 1970)) //single year * the number of years will have passed since 1970

//-----------------------------------------------------------------------------

function initializeNavbar() {
	let navbarElement = document.createElement("nav");
	navbarElement.innerHTML = navbarHTML;
	document.body.appendChild(navbarElement);
}

//-----------------------------------Settings------------------------------------

function openSettings() {
	let container = document.getElementById("settingsContainer");
	var settingsOpen = eval(container.getAttribute("data-settings_open"));
	container.setAttribute("data-settings_open", (!settingsOpen).toString())
}

function changeSettingsValue(activeButton) {
	activeButton.childNodes[1].className = eval(activeButton.getAttribute('data-setting_active')) ? 'fa-solid fa-toggle-off' : 'fa-solid fa-toggle-on';
	activeButton.setAttribute('data-setting_active', !eval(activeButton.getAttribute('data-setting_active')));
}