//-----------------------------------------------Constantes-------------------------------------------------------------:
const randomSet = [{char: '无聊', pinyin: 'wú liáo', definition: 'ennuyeux'}, {char: '尴尬', pinyin: 'gān gà', definition: 'génant'}, {char: '告诉', pinyin: 'gào sù', definition: 'avertir/prévenir/informer'}, {char: '打算', pinyin: 'dǎ suàn', definition: 'planifier'}, {char: '参观', pinyin: 'cān guān', definition: 'visiter'}, {char: '胃口好', pinyin: 'wèi kǒu hǎo', definition: 'bon appétit!'}, {char: '感冒', pinyin: 'gǎn mào', definition: 'rhume'}, {char: '反过来说', pinyin: 'fǎn guò lái shuō', definition: "d'autre part (connecteur logique)"}, {char: '春夏秋冬', pinyin: 'chūn xià qīu dōng', definition: 'printemps, été, automne, hiver'}, {char: '虽然', pinyin: 'sūi rán', definition: 'cependant (connecteur logique)'}, {char: '桌子', pinyin: 'zhuō zǐ', definition: 'table'}, {char: '开始', pinyin: 'kāi shǐ', definition: 'Commencer (appuyez sur "Prochaine Carte")'}];
const activeLVBSet = [{char: '爱', pinyin: 'ài', definition: 'amour/affection'}, {char: '八', pinyin: 'bā', definition: 'huit'}, {char: '把', pinyin: 'bǎ', definition: 'tenir/gérer (avec la main)'}, {char: '爸', pinyin: 'bà', definition: 'père (爸爸)'}, {char: '吧', pinyin: 'ba', definition: 'bar/élément phonétique'}, {char: '白', pinyin: 'bái', definition: 'blanc'}, {char: '百', pinyin: 'bǎi', definition: 'cent (100)'}, {char: '班', pinyin: 'bān', definition: 'classe/travail'}, {char: '半', pinyin: 'bàn', definition: 'moitié (一半)'}, {char: '办', pinyin: 'bàn', definition: 'faire/gérer'}, {char: '包', pinyin: 'bāo', definition: 'sac/paquet'}, {char: '报', pinyin: 'bào', definition: 'déclarer/annoncer/répondre'}, {char: '杯', pinyin: 'bēi', definition: 'classificateur de verre (一杯水)'}, {char: '北', pinyin: 'běi', definition: 'nord'}, {char: '本', pinyin: 'běn', definition: 'racine/classificateur de livres'}, {char: '比', pinyin: 'bǐ', definition: 'comparer'}];
const superstitionSet = [{char: '迷信', pinyin: 'mí xìn', definition: 'superstition'}, {char: '避免', pinyin: 'bì miǎn', definition: 'éviter'}, {char: '否则', pinyin: 'fǒu zé', definition: 'sinon'}, {char: '运气', pinyin: 'yùn qì', definition: 'chance'}, {char: '随时', pinyin: 'súi shí', definition: 'à tout moment'}, {char: '降临', pinyin: 'jiàng lín', definition: 'la chance tombe/arrive'}, {char: '许多', pinyin: 'xǔ duō', definition: 'très beaucoup'}, {char: '使用', pinyin: 'shǐ yòng', definition: 'utiliser'}, {char: '甚至', pinyin: 'shén zhì', definition: "voir même jusqu'à/même"}, {char: '直接', pinyin: 'zhí jiē', definition: 'directement'}, {char: '具有', pinyin: 'jù yǒu', definition: 'posséder'}, {char: '意义', pinyin: 'yì yì', definition: 'sens'}, {char: '肯定', pinyin: 'kěn dìng', definition: 'sans aucun doute'}, {char: '不幸', pinyin: 'bù xìng', definition: 'malheureux'}, {char: '无论', pinyin: 'wú lùn', definition: 'peu importe'}, {char: '厄运', pinyin: 'è yùn', definition: 'malheur/malchance'}, {char: '证据', pinyin: 'zhèng jù', definition: 'preuve'}, {char: '证明', pinyin: 'zhèng míng', definition: 'prouver'}, {char: '忌讳', pinyin: 'jì hùi', definition: 'taboo'}, {char: '在意', pinyin: 'zài yì', definition: "s'en foutre"}, {char: '忽视', pinyin: 'hū shì', definition: 'négliger'}];
const legendsSet = [{char: '有害', pinyin: 'yǒu hài', definition: 'endommager'}, {char: '既然', pinyin: 'jì rán', definition: 'étant donné que... (connecteur logique)'}, {char: '打破', pinyin: 'dǎ pò', definition: 'casser/briser'}, {char: '讲解', pinyin: 'jiǎng jiě', definition: 'expliquer'}, {char: '保准', pinyin: 'bǎo zhǔn', definition: 'assurer que/être sûre que'}, {char: '回答', pinyin: 'húi dá', definition: 'répondre'}, {char: '创作', pinyin: 'chuàng zuò', definition: 'inventer/créer [concepte/idée (pas concret)]'}, {char: '胜', pinyin: 'shèng', definition: 'gagner/battre qqn'}, {char: '传说', pinyin: 'chuán shuō', definition: 'légende'}];
const citySet = [{char: '新词', pinyin: 'xīn cí', definition: 'nouveau mot'}, {char: '香港', pinyin: 'xiāng gǎng', definition: 'Hong Kong (Ville)'}, {char: '澳门', pinyin: 'ào mén', definition: 'Macao (Ville)'}, {char: '人口', pinyin: 'rén kǒu', definition: 'Population'}, {char: '地理', pinyin: 'dì lǐ', definition: 'géographie'}, {char: '由…组成', pinyin: 'yóu … zǔ chéng', definition: 'à partir de ... se former'}, {char: '公里', pinyin: 'gōng lǐ', definition: 'kilomètre (km)'}, {char: '面积', pinyin: 'miàn jī', definition: 'surface (aire)'}, {char: '语信', pinyin: 'yǔ xìn', definition: 'langage/langue'}, {char: '气候', pinyin: 'qì hòu', definition: 'climat'}, {char: '经济', pinyin: 'jīng jì', definition: 'économie'}, {char: '历史', pinyin: 'lì shǐ', definition: 'histoire'}, {char: '政治', pinyin: 'zhèng zhì', definition: 'la politique'}, {char: '其他', pinyin: 'qí tā', definition: "d'autre"}, {char: '外国', pinyin: 'wài guó', definition: 'pays étranger'}, {char: '简体字', pinyin: 'jiǎn tǐ zì', definition: 'caractère simplifié'}, {char: '简单', pinyin: 'jiǎn dān', definition: 'simple'}, {char: '离', pinyin: 'lí', definition: 'distant ("struct": A distant de B [distance entre A et B])'}, {char: '土地', pinyin: 'tǔ dì', definition: 'la terre (pas la planète)'}, {char: '平方公里', pinyin: 'píng fāng gōng lǐ', definition: 'kilomètre carré (km²)'}];
const expressionSet = [{char: '胃口好', pinyin: 'wèi kǒu hǎo', definition: 'bon appétit!'}, {char: '原来是这样', pinyin: 'yuán lái shì zhè yáng', definition: ' Je vois... (I see...)'}, {char: '对不起', pinyin: 'dùi bù qǐ', definition: ' pardon/désolé'}];

//-------------------------------------------------------------------------------------------------------------------------

var currentDictIndex = 11;
var currentSet = randomSet.filter(function(f){return f;});// filtre qui renvoie la même liste pour éviter de modifier la liste originale
var currentSetName = "randomSet"; //met l'ensemble actuel à "randomSet"

//-------------------------------------------------------------------------------------------------------------------------

function replaceCharSet(set) {
	currentSet = eval(set).filter(function(f){return f;});

	document.getElementById(`${currentSetName}_Element`).style.fontWeight = "normal"; //make former set have normal weight
	document.getElementById(`${set}_Element`).style.fontWeight = "bold"; //make current set bold
	document.getElementById(`${currentSetName}_Element`).style.textDecoration = ""; //remove underline from former set
	if (outerWidth < 750) {document.getElementById(`${set}_Element`).style.textDecoration = "underline"}; //add underline to current set (if not mobile)

	currentSetName = set; //update current set
	generateCard(true);
}

function buttonReplaceCharSet(set) {
	replaceCharSet(set);
	restartSet();
}

//-------------------------------------------------------------------------------------------------------------------------

function generateCard(skipDeletion = false) {
	if (skipDeletion !== true) {currentSet.splice(currentDictIndex, 1)}; //removes whole dict from the list (copy)

	currentDictIndex = Math.floor(Math.random() * currentSet.length); // randint(0, len(currentSet)); generate random index val
	let generatedDict = currentSet[currentDictIndex]; //currentSet[currentDictIndex] = {char: "x", pinyin: "y", definition:"z"}

	if (currentSet.length == 0) {
		endCurrentSetName();

	} else {
		document.getElementById("pinyinDisplay").innerHTML = "---"; //enlève le pinyin du caractère
		document.getElementById("definitionDisplay").innerHTML = "---"; //enlève la définition du caractère 
		document.getElementById("characterDisplay").innerHTML = generatedDict.char; //met à jour le caractère actuel
	}
}

function endCurrentSetName() {
	// console.log("currentSet empty."); //affiche que la variable est vide.
	document.getElementById("characterDisplay").innerHTML = "Fin d'ensemble."; //message de fin
	document.getElementById("pinyinDisplay").style.display = "none"; //cache l'élément texte qui affiche le pinyin
	document.getElementById("definitionDisplay").style.display = "none"; //cache l'élément texte qui affiche la définition
	document.getElementById("nextCardButton").innerHTML = "Recommencer"; //change le texte du bouton ) "Recommencer"
	document.getElementById("nextCardButton").onclick = restartSet; //fait que le bouton lance la fonction restartSet() aulieu de generateCard()
}

function restartSet() {
	replaceCharSet(currentSetName); //Remet tous les mots dans la liste
	document.getElementById("nextCardButton").innerHTML = "Prochaine Carte"; //remet le texte du bouton à "Prochaine Carte"
	document.getElementById("nextCardButton").onclick = generateCard; //remet la function du bouton à generateCard()
	document.getElementById("pinyinDisplay").style.display = ""; //affiche les textes
	document.getElementById("definitionDisplay").style.display = ""; //affiche les textes
}

//-------------------------------------------------------------------------------------------------------------------------

function showDefinition() {
	document.getElementById("pinyinDisplay").innerHTML = currentSet[currentDictIndex].pinyin; //met à jour le pinyin
	document.getElementById("definitionDisplay").innerHTML = currentSet[currentDictIndex].definition; //met à jour la définition

}