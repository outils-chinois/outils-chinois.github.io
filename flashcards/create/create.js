import('../../javascript/pinyinDict.js');

getCodeFromChar = char => (char.charCodeAt(0) - 20000).toString(36) //char to base 36 string
getCharFromCode = numberString => String.fromCharCode(parseInt(numberString, 36) + 20000) //base 36 string to char

getCodeFromString = string => {
    var endString = '';
    string.split('').forEach(element => endString += `,${getCodeFromChar(element)}`);
    return endString.substring(1) // endString[1:]
}

// let copyToClipboard = navigator.clipboard.writeText;

// Constants:
const icon_list = [
    'fa-solid fa-star',
    'fa-solid fa-music',
    'fa-solid fa-heart',
    'fa-solid fa-face-smile',
    'fa-solid fa-car',
    'fa-solid fa-droplet',
    'fa-solid fa-flask',
    'fa-solid fa-earth-americas',
    'fa-solid fa-person',
    'fa-solid fa-plane',
    'fa-solid fa-magnifying-glass',
    'fa-solid fa-wand-magic-sparkles',
    'fa-solid fa-gift',
    'fa-solid fa-palette'
];

const current_list = ['titleCardElement'];
var current_index = 0
var set_length = 0 // 1 less than actual length

//-------------------------------Functions-------------------------------:

next_card = () => goToIndex(current_index + 1);
previous_card = () => goToIndex(current_index - 1);

titleCardData = () => `${getCodeFromString(document.getElementById('setTitle').value)}|${icon_list.indexOf(document.getElementById('setIcon').className)}`;
mainCardRawData = () => ({
    char: document.getElementById('mainDisplay').value,
    pinyin: document.getElementById('pinyinInput').value,
    definition: document.getElementById('definitionInput').value
})

randomizeIcon = () => document.getElementById('setIcon').className = icon_list[Math.round(Math.random() * (icon_list.length - 1) )];

setCardData = (char="你好", pinyin="nǐ hǎo", definition="Bonjour") => {
    document.getElementById('mainDisplay').value = char;
    document.getElementById('pinyinInput').value = pinyin;
    document.getElementById('definitionInput').value = definition;
}

enableCards = (...args) => {
    for (let attributeName of args) {
        document.getElementById('cardContainer').setAttribute(`data-${attributeName}`, true);
    }
}

disableCards = (...args) => {
    for (let attributeName of args) {
        document.getElementById('cardContainer').setAttribute(`data-${attributeName}`, false);
    }
}

updateIndex = () => {
    let label = document.getElementById('indexLabel');
    label.setAttribute('data-current_index', current_index);
    label.setAttribute('data-set_length', set_length);

    if (current_index === 0) {
        enableCards('right_card');
        disableCards('left_card');
    }

    else if (current_index == set_length) {
        enableCards('left_card');
        disableCards('right_card');
    }
    else {enableCards('left_card', 'right_card')}
}

function showCustomCard() {
    document.getElementById('mainCard').style.display = '';
    document.getElementById('titleCard').style.display = 'none';
    document.getElementById('codeOutput').style.display = 'none'; // hide code output (save button)

    document.getElementById('copyConfirmHint').setAttribute('data-show', false); // reset animation
    
}

function showTitleCard() {
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('titleCard').style.display = '';
}

function makeNewCard() {
    if (current_index !== 0) {current_list[current_index] = mainCardRawData()} // save card to current slot (if not titleCard)

    showCustomCard();
    set_length++;
    current_index = set_length; // go to new index
    updateIndex();
    setCardData(); // reset card data to default values
}

function goToIndex(index) {
    // console.log(`current_index: ${current_index}; index: ${index}; char: ${current_list[index].char}`)
    if (current_index !== 0) {current_list[current_index] = mainCardRawData()}; // save card

    if (index !== 0) {
        showCustomCard();
        setCardData(current_list[index].char, current_list[index].pinyin, current_list[index].definition); // show card values
    } else {
        showTitleCard();
    }

    current_index = index; // set current index to chosen
    updateIndex();
}

function saveDataToCode() {
    var endCode = `${titleCardData()}|`; // save title card data -- 2 first elements are title card data
    const charData = current_list.splice(1); // get every element from list safe from first
    current_list.push(...charData); // restore splice

    charData.forEach(element => {endCode += `${getCodeFromString(element.char)};${getCodeFromString(element.pinyin)};${getCodeFromString(element.definition)}|`})

    return endCode.substring(0, endCode.length - 1)
}

function saveButton() {
    if (current_index !== 0) {current_list[current_index] = mainCardRawData()}; // save card

    let codeOutput = document.getElementById('codeOutput');
    codeOutput.style.display = '';
    codeOutput.innerHTML = saveDataToCode();

    selectTextFromNode(codeOutput);
    document.getElementById('copyConfirmHint').setAttribute('data-show', true);
}

function selectTextFromNode(htmlObject) {
    currentRange = document.createRange();
    currentRange.selectNodeContents(htmlObject);

    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(currentRange);

    document.execCommand('copy'); // Copy to clipboard
}

function fillPinyin() {
    let endString = '';
    for (let char of document.getElementById('mainDisplay').value) {
        endString += `${getPinyinForChar(char)} `;
    }
    document.getElementById('pinyinInput').value = endString;
}