const navbarHTML = `
<a id="logo" title="Page d'accueil" href=""><img alt="Webpage Logo" src="resources/images/logo_white.png"></a>
<a href="flashcards/">Cartes Flash</a>
<a href="#">Cours</a>
`;

function initializeNavbar() {
	let navbarElement = document.createElement("nav");
	navbarElement.innerHTML = navbarHTML;
	document.body.appendChild(navbarElement);
}