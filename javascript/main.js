const navbarHTML = `
<a id="logo" title="Page d'accueil" href=""><img alt="Webpage Logo" src="resources/images/logo_white.png"></a>
<a href="flashcards/">Cartes Flash</a>
<a href="cours/">Cours</a>
<a href="editeur_de_texte/">Editeur de texte</a>
<a href="autres/hamming-code/">Autres</a>
<a id="githubLink" title="Github" href="https://github.com/outils-chinois/outils-chinois.github.io"><i class="fa-brands fa-github"></i></a>

<div data-settings_open="false" id="settingsContainer">
	<button id="navSettingsButton" onclick="openSettings();"><i class="fa-solid fa-gear updateSettings"></i></button>
	<ul>
		<li>
			<p>Dark Theme</p>
			<button class="activeSettingsButton" id="themeSetting" onclick="changeSettingsValue(this);" data-setting_active="true">
				<i class="fa-solid fa-toggle-on"></i>
			</button>
		</li>
		
		<li>
			<p>Cursor Trailer</p>
			<button class="activeSettingsButton" id="trailerSetting" onclick="changeSettingsValue(this);" data-setting_active="true">
				<i class="fa-solid fa-toggle-on"></i>
			</button>
		</li>
		<i id="settingsCaret" class="fa-solid fa-caret-up"></i>
	</ul>
</div>
`;

//------------------------------------Cookies------------------------------------:
const singleYear = 1000*60*60*24*(365+1/4); //1 year in milliseconds

getExpiryDate = (years=2) => new Date(singleYear * (new Date().getFullYear() + years - 1970)) //single year * the number of years will have passed since 1970

function cookieDict() {
	// let rawCookie = str;
	let rawCookie = document.cookie;
	let cookieList = rawCookie.split("; ")

	var cookieDictionary = {};
	for (var i = 0; i <= cookieList.length - 1; i++) {
		try {cookieDictionary[cookieList[i].split("=")[0]] = eval(cookieList[i].split("=")[1]);}
		catch (err) {cookieDictionary[cookieList[i].split("=")[0]] = cookieList[i].split("=")[1];}
	}

	return cookieDictionary
}

function createCookie(cookieName, cookieValue=true) {
	document.cookie = `${cookieName}=${cookieValue}; expires=${getExpiryDate()}; path=/;`;
}

function deleteCookie(cookieName) {
	document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

//------------Cookies & Settings------------:

function saveSettingsToCookies() {
	console.log('saving settings');
	let settingsElements = document.getElementsByClassName('activeSettingsButton');

	for (var i = settingsElements.length - 1; i >= 0; i--) {
		createCookie(settingsElements[i].id, settingsElements[i].getAttribute('data-setting_active')); //createCookie(id, true/false)
	}
}

function importSettings() {
	console.log('importing settings');
	let settingsElements = document.getElementsByClassName('activeSettingsButton');
	const currentSettings = cookieDict();

	for (var i = settingsElements.length - 1; i >= 0; i--) {
		settingsElements[i].setAttribute('data-setting_active', currentSettings[settingsElements[i].id]) //set data attribute to its value in dictionary
	}

	updateSettings()

}

//-----------------------------------------------------------------------------

function initializeNavbar() {
	let navbarElement = document.createElement("nav");
	navbarElement.innerHTML = navbarHTML;
	document.body.appendChild(navbarElement);

	importSettings();
}

//-----------------------------------Settings------------------------------------:

function openSettings() {
	let container = document.getElementById("settingsContainer");
	var settingsOpen = eval(container.getAttribute("data-settings_open"));
	container.setAttribute("data-settings_open", (!settingsOpen).toString())
}

function changeSettingsValue(activeButton) {
	activeButton.childNodes[1].className = eval(activeButton.getAttribute('data-setting_active')) ? 'fa-solid fa-toggle-off' : 'fa-solid fa-toggle-on';
	activeButton.setAttribute('data-setting_active', !eval(activeButton.getAttribute('data-setting_active')));
}

function updateSettings() {
	console.log('updating Settings');
	let settingsButtons = document.getElementsByClassName('activeSettingsButton');

	for (var i = settingsButtons.length - 1; i >= 0; i--) {
		settingsButtons[i].childNodes[1].className = eval(settingsButtons[i].getAttribute('data-setting_active')) ? 'fa-solid fa-toggle-on' : 'fa-solid fa-toggle-off';
	}
}

function onSettingsClick() {
	eval(document.getElementById('settingsContainer').getAttribute('data-settings_open')) ? importSettings() : saveSettingsToCookies();
}


//update settings:
window.onclick = (e) => {
	if (e.target.className.split(" ").indexOf('updateSettings') !== -1) {onSettingsClick()};
}

//------------------------Dark Theme/Light Theme--------------------------:
var ruleStartIndex = 0;

function lightTheme() {
	let cssFile = document.styleSheets[5]; //navbar.css
	ruleStartIndex = cssFile.cssRules.length

	appendRule = (inputRule) => cssFile.insertRule(inputRule, cssFile.cssRules.length) //cssFile.cssRules.length = last index

	document.querySelector("#logo").firstChild.src = 'https://outils-chinois.github.io/resources/images/logo_black.png' //set logo to black char

	const ruleList = [
		//general
		'.mainBody {background-color: #efefef}',

		//Navbar & settings
		'nav {background-color: white; color: #9546ff;}',
		'nav > a:not(#logo) {color: #9546ff;}',
		'nav > a:not(#logo):hover {color: black;}',
		'#githubLink:hover > i {color: #000;}',
		'#navSettingsButton {color: #9546ff;}',
		'#navSettingsButton:hover {color: #000;}',
		'#settingsContainer[data-settings_open="true"] > #navSettingsButton:not(#navSettingsButton:active) {color: #000;}',
		'#settingsContainer > ul {background-color: #fff;}',
		'#settingsCaret {color: #fff;}',
		'#settingsContainer > ul > li i {color: #000;}',

		//Cours
		'.chapterElement {background-color: #af88ff}',
		'.chapterText {color: #000;}',

		//Frontpage:
		'.quickAccessElement {background-color: #cdcdcd;}',
		'.quickAccessContent {color: #7c34b9;}',
		'.quickAccessElement:hover .quickAccessContent > h1 {border-color: #7c34b9ff;}',
		'.quickAccessContent > p {color: #9546ff;}'
		];

	ruleList.forEach(element => appendRule(element));
}

function darkTheme() {
	document.querySelector("#logo").firstChild.src = 'https://outils-chinois.github.io/resources/images/logo_white.png' //set logo to white char (black bg)

	let cssFile = document.styleSheets[5]; //navbar.css
	for (var i = cssFile.cssRules.length - 1; i >= ruleStartIndex; i--) {
		cssFile.deleteRule(i);
	}

}