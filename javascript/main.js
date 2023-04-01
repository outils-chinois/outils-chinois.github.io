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
String.prototype.trim = function() { // "    hello".trim() => "hello"
        return String(this).replace(/^\s+|\s+$/g, '');
    };

function lightTheme() {
	let cssFile = document.styleSheets[5];
	cssFile.insertRule('.mainBody {background-color: #efefef}', 20)
	cssFile.insertRule('.chapterElement {background-color: #af88ff}', 21)
	cssFile.insertRule('nav {background-color: white; color: #de8dff;}', 22)
	cssFile.insertRule('nav > a:hover {color: black;}', 23)

}