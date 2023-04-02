getCodeFromChar = char => (char.charCodeAt(0) - 20000).toString(36) //char to base 36 string
getCharFromCode = numberString => String.fromCharCode(parseInt(numberString, 36) + 20000) //base 36 string to char

// let copyToClipboard = navigator.clipboard.writeText;


//Add word:
const setList = [];

function clearTextFields() {
	document.getElementById('charWord').value = '';
	document.getElementById('wordDef').value = '';
}

function addToList() {
	const currentChar = document.getElementById('charWord').value;
	setList.push({char: currentChar, definition: document.getElementById('wordDef').value});

	clearTextFields();
	addWordToDiv();
}

function addWordToDiv(word=setList[setList.length-1].char) {
	let container = document.getElementById('wordDisplay');
	let element = document.createElement('button');

	element.innerHTML = word;
	element.setAttribute('data-list_index', setList.length-1);
	element.setAttribute('data-active', false);
	element.onclick = e => selectWord(e);

	container.appendChild(element);

}

//Modify word:

function selectWord(event) {
	try {
		document.querySelector('#wordDisplay > button[data-active="true"]').setAttribute('data-active', false);
	} catch(err) {console.log('Supposed error (expected)')}

	const currentIndex = eval(event.target.getAttribute('data-list_index'));

	document.getElementById('charWord').value = setList[currentIndex].char;
	document.getElementById('wordDef').value = setList[currentIndex].definition;

	//general stuff:
	event.target.setAttribute('data-active', true);

	let addButton = document.getElementById('addButton');
	addButton.innerHTML = 'Modifier';
	addButton.onclick = () => modifyWord();
}

function modifyWord() {
	let currentButton = document.querySelector('#wordDisplay > button[data-active="true"]');
	const currentIndex = eval(currentButton.getAttribute('data-list_index'));
	currentButton.setAttribute('data-active', false); //remove active

	setList[currentIndex] = {char: document.getElementById('charWord').value, definition: document.getElementById('wordDef').value}; //overwrite current word value to new one
	clearTextFields();

	let addButton = document.getElementById('addButton');
	addButton.innerHTML = 'Ajouter';
	addButton.onclick = () => addToList();

}