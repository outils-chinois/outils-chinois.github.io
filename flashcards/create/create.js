// Sets:
const randomSet = [{char: '无聊', pinyin: 'wú liáo', definition: 'ennuyeux'}, {char: '尴尬', pinyin: 'gān gà', definition: 'génant'}, {char: '告诉', pinyin: 'gào sù', definition: 'avertir/prévenir/informer'}, {char: '打算', pinyin: 'dǎ suàn', definition: 'planifier'}, {char: '参观', pinyin: 'cān guān', definition: 'visiter'}, {char: '胃口好', pinyin: 'wèi kǒu hǎo', definition: 'bon appétit!'}, {char: '感冒', pinyin: 'gǎn mào', definition: 'rhume'}, {char: '反过来说', pinyin: 'fǎn guò lái shuō', definition: "d'autre part (connecteur logique)"}, {char: '春夏秋冬', pinyin: 'chūn xià qīu dōng', definition: 'printemps, été, automne, hiver'}, {char: '虽然', pinyin: 'sūi rán', definition: 'cependant (connecteur logique)'}, {char: '桌子', pinyin: 'zhuō zǐ', definition: 'table'}, {char: '开始', pinyin: 'kāi shǐ', definition: 'Commencer (appuyez sur "Prochaine Carte")'}];
const activeLVBSet = [{char: "啊", pinyin: "a", definition: "ah! (interjection)"}, {char: "爱", pinyin: "ài", definition: "amour/affection"}, {char: "安", pinyin: "ān", definition: "paix"}, {char: "爸", pinyin: "bà", definition: "père (爸爸)"}, {char: "把", pinyin: "bǎ", definition: "de prendre en main (action avec la poignée)"}, {char: "八", pinyin: "bā", definition: "8"}, {char: "白", pinyin: "bái", definition: "blanc"}, {char: "百", pinyin: "bǎi", definition: "100"}, {char: "半", pinyin: "bàn", definition: "moitié (一半 = un demi)"}, {char: "办", pinyin: "bàn", definition: "faire, manager"}, {char: "班", pinyin: "bān", definition: "travail"}, {char: "帮", pinyin: "bāng", definition: "aider (帮助)"}, {char: "报", pinyin: "bào", definition: "annoncer/une annonce d'informations (=journaux)"}, {char: "包", pinyin: "bāo", definition: "sac"}, {char: "吧", pinyin: "ba", definition: "bar"}, {char: "被", pinyin: "bèi", definition: "voix du passif"}, {char: "备", pinyin: "bèi", definition: "se préparer"}, {char: "北", pinyin: "běi", definition: "nord"}, {char: "杯", pinyin: "bēi", definition: "tasse (一杯)"}, {char: "本", pinyin: "běn", definition: "racine, livre"}, {char: "笔", pinyin: "bǐ", definition: "stylo"}, {char: "比", pinyin: "bǐ", definition: "comparer/comparé à"}, {char: "变", pinyin: "biàn", definition: "se changer (变化 = transformer)"}, {char: "便", pinyin: "biàn", definition: "ordinaire"}, {char: "边", pinyin: "biān", definition: "côté/coins"}, {char: "表", pinyin: "biǎo", definition: "extérieur"}, {char: "别", pinyin: "bié", definition: "spécial"}, {char: "病", pinyin: "bìng", definition: "maladie/être malade"}, {char: "并", pinyin: "bìng", definition: "combiner, mettre ensemble"}, {char: "部", pinyin: "bù", definition: "partie (partie du nord = 北部)"}, {char: "不", pinyin: "bù", definition: "négation"}, {char: "才", pinyin: "cái", definition: "seulement"}, {char: "菜", pinyin: "cài", definition: "légumes, par extension repas"}, {char: "茶", pinyin: "chá", definition: "thé"}];
const superstitionSet = [{char: '迷信', pinyin: 'mí xìn', definition: 'superstition'}, {char: '避免', pinyin: 'bì miǎn', definition: 'éviter'}, {char: '否则', pinyin: 'fǒu zé', definition: 'sinon'}, {char: '运气', pinyin: 'yùn qì', definition: 'chance'}, {char: '随时', pinyin: 'súi shí', definition: 'à tout moment'}, {char: '降临', pinyin: 'jiàng lín', definition: 'la chance tombe/arrive'}, {char: '许多', pinyin: 'xǔ duō', definition: 'très beaucoup'}, {char: '使用', pinyin: 'shǐ yòng', definition: 'utiliser'}, {char: '甚至', pinyin: 'shén zhì', definition: "voir même jusqu'à/même"}, {char: '直接', pinyin: 'zhí jiē', definition: 'directement'}, {char: '具有', pinyin: 'jù yǒu', definition: 'posséder'}, {char: '意义', pinyin: 'yì yì', definition: 'sens'}, {char: '肯定', pinyin: 'kěn dìng', definition: 'sans aucun doute'}, {char: '不幸', pinyin: 'bù xìng', definition: 'malheureux'}, {char: '无论', pinyin: 'wú lùn', definition: 'peu importe'}, {char: '厄运', pinyin: 'è yùn', definition: 'malheur/malchance'}, {char: '证据', pinyin: 'zhèng jù', definition: 'preuve'}, {char: '证明', pinyin: 'zhèng míng', definition: 'prouver'}, {char: '忌讳', pinyin: 'jì hùi', definition: 'taboo'}, {char: '在意', pinyin: 'zài yì', definition: "s'en foutre"}, {char: '忽视', pinyin: 'hū shì', definition: 'négliger'}];
const legendsSet = [{char: '有害', pinyin: 'yǒu hài', definition: 'endommager'}, {char: '既然', pinyin: 'jì rán', definition: 'étant donné que... (connecteur logique)'}, {char: '打破', pinyin: 'dǎ pò', definition: 'casser/briser'}, {char: '讲解', pinyin: 'jiǎng jiě', definition: 'expliquer'}, {char: '保准', pinyin: 'bǎo zhǔn', definition: 'assurer que/être sûre que'}, {char: '回答', pinyin: 'húi dá', definition: 'répondre'}, {char: '创作', pinyin: 'chuàng zuò', definition: 'inventer/créer [concepte/idée (pas concret)]'}, {char: '胜', pinyin: 'shèng', definition: 'gagner/battre qqn'}, {char: '传说', pinyin: 'chuán shuō', definition: 'légende'}];
const citySet = [{char: '新词', pinyin: 'xīn cí', definition: 'nouveau mot'}, {char: '香港', pinyin: 'xiāng gǎng', definition: 'Hong Kong (Ville)'}, {char: '澳门', pinyin: 'ào mén', definition: 'Macao (Ville)'}, {char: '人口', pinyin: 'rén kǒu', definition: 'Population'}, {char: '地理', pinyin: 'dì lǐ', definition: 'géographie'}, {char: '由…组成', pinyin: 'yóu … zǔ chéng', definition: 'à partir de ... se former'}, {char: '公里', pinyin: 'gōng lǐ', definition: 'kilomètre (km)'}, {char: '面积', pinyin: 'miàn jī', definition: 'surface (aire)'}, {char: '语信', pinyin: 'yǔ xìn', definition: 'langage/langue'}, {char: '气候', pinyin: 'qì hòu', definition: 'climat'}, {char: '经济', pinyin: 'jīng jì', definition: 'économie'}, {char: '历史', pinyin: 'lì shǐ', definition: 'histoire'}, {char: '政治', pinyin: 'zhèng zhì', definition: 'la politique'}, {char: '其他', pinyin: 'qí tā', definition: "d'autre"}, {char: '外国', pinyin: 'wài guó', definition: 'pays étranger'}, {char: '简体字', pinyin: 'jiǎn tǐ zì', definition: 'caractère simplifié'}, {char: '简单', pinyin: 'jiǎn dān', definition: 'simple'}, {char: '离', pinyin: 'lí', definition: 'distant ("struct": A distant de B [distance entre A et B])'}, {char: '土地', pinyin: 'tǔ dì', definition: 'la terre (pas la planète)'}, {char: '平方公里', pinyin: 'píng fāng gōng lǐ', definition: 'kilomètre carré (km²)'}];
const expressionSet = [{char: '胃口好', pinyin: 'wèi kǒu hǎo', definition: 'bon appétit!'}, {char: '原来是这样', pinyin: 'yuán lái shì zhè yáng', definition: ' Je vois... (I see...)'}, {char: '对不起', pinyin: 'dùi bù qǐ', definition: ' pardon/désolé'}];

var current_set = 'randomSet'; //Default set
var current_set_list = '';
var current_index = 0;

//------------------------Functions------------------------:

function selectSet(htmlObject) {
    current_set = htmlObject.id

    document.querySelector('#setContainer > button[data-current_set="true"]').setAttribute('data-current_set', false)
    document.getElementById(current_set).setAttribute('data-current_set', true)

    generateSet()
}

function generateSet() {
    const generatedSet = [showTitleCard];
    const set_list = eval(current_set);

    for (var i = set_list.length - 1; i >= 0; i--) {
        random_index = Math.round(Math.random() * (set_list.length - 1));
        generatedSet.push(set_list[random_index]);
    }

    return generatedSet
}


function showTitleCard() {
    
    { // Configure Main display
        const mainDisplay = document.getElementById('mainDisplay');
        mainDisplay.innerHTML = document.querySelector(`#${current_set} > div > p`).innerHTML;
        mainDisplay.style.fontFamily = 'Harlow Solid';
        mainDisplay.style.textDecoration = 'underline';
    }

    { // Configure Secondary displays
        const primaryDisplay = document.getElementById('primaryDisplay');
        primaryDisplay.setAttribute('data-label', '') //set label (::before) to nothing
        primaryDisplay.innerHTML = document.querySelector(`#${current_set} > div > i`).outerHTML;
        primaryDisplay.style.fontSize = '80px'

        const secondaryDisplay = document.getElementById('secondaryDisplay');
        secondaryDisplay.setAttribute('data-label', '');
        secondaryDisplay.innerHTML = '';

    }

    { // Configure Buttons
        //Weird unresolved 'text' nodes in element, so:
        const verifyButton = document.getElementById('cardButtonGroup').childNodes[1];
        const nextButton = document.getElementById('cardButtonGroup').childNodes[3];
        const leftCardButton = document.getElementById('leftCard');

        verifyButton.style.display = 'none';
        leftCardButton.style.display = 'none';
        document.getElementsByClassName('decoratorCard')[1].style.display = 'none'; //left card on hover
        nextButton.innerHTML = 'Commencer';
    }

}