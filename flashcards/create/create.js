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
    'fa-solid fa-plane'
];

const current_char_list = [showTitleCard];


//-------------------------------Functions-------------------------------:

titleCardData = () => `${getCodeFromString(document.getElementById('setTitle').value)}|${getCodeFromString(icon_list.indexOf(document.getElementById('setIcon').className).toString())}`;

randomizeIcon = () => document.getElementById('setIcon').className = icon_list[Math.round(Math.random() * (icon_list.length - 1) )];

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


function showCustomCard() {
    document.getElementById('mainCard').style.display = '';
    document.getElementById('titleCard').style.display = 'none';
    enableCards('left_card');
    
}

function showTitleCard() {
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('titleCard').style.display = '';
    disableCards('left_card');
}