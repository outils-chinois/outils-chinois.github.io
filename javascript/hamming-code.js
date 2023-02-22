//---------------------------------------------------Find Errors---------------------------------------------------:
function changeBitValue(event) {
	let currentValue = parseFloat(event.srcElement.innerHTML)
	if (currentValue == 1) {event.srcElement.innerHTML = "0"} else {event.srcElement.innerHTML = "1"}
}

function findError() {
	return
}

getBackgroundColor = element => document.defaultView.getComputedStyle(element, null)['backgroundColor']

//-----------------------------------------------Generate random message--------------------------------------------------
function randomMessage() {
	let container = document.getElementById("sentMessage");
	container.innerHTML = "";
	for (var i=0; i < 11; i++) {
		let currentSpan = document.createElement("span");
		currentSpan.className = "messageBit";
		randomNumber = Math.round(Math.random());
		
		currentSpan.innerHTML = String(randomNumber);
		container.appendChild(currentSpan);
	}
}

//-----------------------------------------------Displaying message, etc...--------------------------------------------------
function getBitArrayFromMessage() {
	let strList = document.getElementsByClassName("messageBit");
	var bitArray = [];
	for (var i = 0 ; i < strList.length ; i++) {
		bitArray.push(parseFloat(strList[i].innerHTML))
	}
	return bitArray
}


function arraySum(inputArray) {
	function partialSum(value1, value2) {return value1 + value2}

	return inputArray.reduce(partialSum, 0)
}


function getFullBytes(bitArray) {
	fullBitArray = [2, 2, 2, bitArray[0], 2, bitArray[1], bitArray[2], bitArray[3], 2, bitArray[4], bitArray[5], bitArray[6], bitArray[7], bitArray[8], bitArray[9], bitArray[10]];
	testIndex_1 = [fullBitArray[5], fullBitArray[9], fullBitArray[13], fullBitArray[3], fullBitArray[7], fullBitArray[11], fullBitArray[15]]
	testIndex_2 = [fullBitArray[6], fullBitArray[10], fullBitArray[14], fullBitArray[3], fullBitArray[7], fullBitArray[11], fullBitArray[15]]
	testIndex_3 = [fullBitArray[5], fullBitArray[6], fullBitArray[7], fullBitArray[12], fullBitArray[13], fullBitArray[14], fullBitArray[15]]
	testIndex_4 = [fullBitArray[9], fullBitArray[10], fullBitArray[11], fullBitArray[12], fullBitArray[13], fullBitArray[14], fullBitArray[15]]
	
	testIndex_Pos = [1, 2, 4, 8]

	for (var i=1; i<=4; i++) {
		//console.log(`testIndex_1: ${testIndex_1}\nFull Array: ${fullBitArray}\nCondition: ${arraySum(eval(`testIndex_${i}`))}\n`)
		if (arraySum(eval(`testIndex_${i}`))%2 == 0) {fullBitArray[testIndex_Pos[i - 1]] = 0} else {fullBitArray[testIndex_Pos[i - 1]] = 1}
	}

	return fullBitArray
}

function fillBitGrid(inputArray) {
	let gridContainer = document.getElementById("bitGrid");
	for (var i = 0; i < inputArray.length; i++) {
		let currentBitElement = document.createElement("button");
		currentBitElement.className = 'bitGridElement';
		currentBitElement.innerHTML = inputArray[i];
		currentBitElement.onclick = function onclick(event) {changeBitValue(event);}
		gridContainer.appendChild(currentBitElement);
	}
}

function resetGrid() {
	document.getElementById("bitGrid").remove();
	let newBitGrid = document.createElement("div");
	newBitGrid.id = "bitGrid";
	document.getElementsByClassName("mainBody")[0].appendChild(newBitGrid);
}

function newMessage() {
	randomMessage();
	resetGrid();
	fillBitGrid(getFullBytes(getBitArrayFromMessage()));
}