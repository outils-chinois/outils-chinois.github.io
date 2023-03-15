//-----------------------------------------------Constantes-------------------------------------------------------------:
const randomSet = [{char: '无聊', pinyin: 'wu liao', definition: 'ennuyeux'}, {char: '尴尬', pinyin: 'gan ga', definition: 'génant'}, {char: '告诉', pinyin: 'gao su', definition: 'avertir/prévenir/informer'}, {char: '打算', pinyin: 'da suan', definition: 'planifier'}, {char: '参观', pinyin: 'can guan', definition: 'visiter'}, {char: '胃口好', pinyin: 'wei kou hao', definition: 'bon appétit!'}, {char: '感冒', pinyin: 'gan mao', definition: 'rhume'}, {char: '反过来说', pinyin: 'fan guo lai shuo', definition: "d'autre part (connecteur logique)"}, {char: '春夏秋冬', pinyin: 'chun xia qiu dong', definition: 'printemps, été, automne, hiver'}, {char: '虽然', pinyin: 'sui ran', definition: 'cependant (connecteur logique)'}, {char: '桌子', pinyin: 'zhuo zi', definition: 'table'}, {char: '开始', pinyin: 'kai shi', definition: 'Commencer (appuyez sur "Prochaine Carte")'}]
const activeLVBSet = [{char: '爱', pinyin: 'ai', definition: 'amour/affection'}, {char: '八', pinyin: 'ba', definition: 'huit'}, {char: '把', pinyin: 'ba', definition: 'tenir/gérer (avec la main)'}, {char: '爸', pinyin: 'ba', definition: 'père (爸爸)'}, {char: '吧', pinyin: 'ba', definition: 'bar/élément phonétique'}, {char: '白', pinyin: 'bai', definition: 'blanc'}, {char: '百', pinyin: 'bai', definition: 'cent (100)'}, {char: '班', pinyin: 'ban', definition: 'classe/travail'}, {char: '半', pinyin: 'ban', definition: 'moitié (一半)'}, {char: '办', pinyin: 'ban', definition: 'faire/gérer'}, {char: '包', pinyin: 'bao', definition: 'sac/paquet'}, {char: '报', pinyin: 'bao', definition: 'déclarer/annoncer/répondre'}, {char: '杯', pinyin: 'bei', definition: 'classificateur de verre (一杯水)'}, {char: '北', pinyin: 'bei', definition: 'nord'}, {char: '本', pinyin: 'ben', definition: 'racine/classificateur de livres'}, {char: '比', pinyin: 'bi', definition: 'comparer'}]
const superstitionSet = [{char: '迷信', pinyin: 'mi xin', definition: 'superstition'}, {char: '避免', pinyin: 'bi mian', definition: 'éviter'}, {char: '否则', pinyin: 'fou ze', definition: 'sinon'}, {char: '运气', pinyin: 'yun qi', definition: 'chance'}, {char: '随时', pinyin: 'sui shi', definition: 'à tout moment'}, {char: '降临', pinyin: 'jiang lin', definition: 'la chance tombe/arrive'}, {char: '许多', pinyin: 'xu duo', definition: 'très beaucoup'}, {char: '使用', pinyin: 'shi yong', definition: 'utiliser'}, {char: '甚至', pinyin: 'shen zhi', definition: "voir même jusqu'à/même"}, {char: '直接', pinyin: 'zhi jie', definition: 'directement'}, {char: '具有', pinyin: 'ju you', definition: 'posséder'}, {char: '意义', pinyin: 'yi yi', definition: 'sens'}, {char: '肯定', pinyin: 'ken ding', definition: 'sans aucun doute'}, {char: '不幸', pinyin: 'bu xing', definition: 'malheureux'}, {char: '无论', pinyin: 'wu lun', definition: 'peu importe'}, {char: '厄运', pinyin: 'e yun', definition: 'malheur/malchance'}, {char: '证据', pinyin: 'zheng ju', definition: 'preuve'}, {char: '证明', pinyin: 'zheng ming', definition: 'prouver'}, {char: '忌讳', pinyin: 'ji hui', definition: 'taboo'}, {char: '在意', pinyin: 'zai yi', definition: "s'en foutre"}, {char: '忽视', pinyin: 'hu shi', definition: 'négliger'}]
const legendsSet = [{char: '有害', pinyin: 'you hai', definition: 'endommager'}, {char: '既然', pinyin: 'ji ran', definition: 'étant donné que... (connecteur logique)'}, {char: '打破', pinyin: 'da po', definition: 'casser/briser'}, {char: '讲解', pinyin: 'jiang jie', definition: 'expliquer'}, {char: '保准', pinyin: 'bao zhun', definition: 'assurer que/être sûre que'}, {char: '回答', pinyin: 'hui da', definition: 'répondre'}, {char: '创作', pinyin: 'chuang zuo', definition: 'inventer/créer [concepte/idée (pas concret)]'}, {char: '胜', pinyin: 'sheng', definition: 'gagner/battre qqn'}, {char: '传说', pinyin: 'chuan shuo', definition: 'légende'}]
const citySet = [{char: '新词', pinyin: 'xin ci', definition: 'nouveau mot'}, {char: '香港', pinyin: 'xiang gang', definition: 'Hong Kong (Ville)'}, {char: '澳门', pinyin: 'ao men', definition: 'Macao (Ville)'}, {char: '人口', pinyin: 'ren kou', definition: 'Population'}, {char: '地理', pinyin: 'di li', definition: 'géographie'}, {char: '由…组成', pinyin: 'you...zu cheng', definition: 'à partir de ... se former'}, {char: '公里', pinyin: 'gong li', definition: 'kilomètre (km)'}, {char: '面积', pinyin: 'mian ji', definition: 'surface (aire)'}, {char: '语信', pinyin: 'yü xin', definition: 'langage/langue'}, {char: '气候', pinyin: 'qi hou', definition: 'climat'}, {char: '经济', pinyin: 'jiang ji', definition: 'économie'}, {char: '历史', pinyin: 'li shi', definition: 'histoire'}, {char: '政治', pinyin: 'zheng zhi', definition: 'la politique'}, {char: '其他', pinyin: 'qi ta', definition: "d'autre"}, {char: '外国', pinyin: 'wai guo', definition: 'pays étranger'}, {char: '简体字', pinyin: 'jian ti zi', definition: 'caractère simplifié'}, {char: '简单', pinyin: 'jian dan', definition: 'simple'}, {char: '离', pinyin: 'li', definition: 'distant (struct: A distant de B [distance entre A et B])'}, {char: '土地', pinyin: 'tu di', definition: 'la terre (pas la planète)'}, {char: '平方公里', pinyin: 'ping fang gong li', definition: 'kilomètre carré (km²)'}]
const expressionSet = [{char: '胃口好', pinyin: 'wei kou hao', definition: 'bon appétit!'}, {char: "原来是这样", pinyin: " yuan lai shi zhe yang", definition: " Je vois... (I see...)"}, {char: "对不起", pinyin: " dui bu qi", definition: " pardon/désolé"}];

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