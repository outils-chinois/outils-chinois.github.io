const LVBList = ['啊','爱','安','爸','把','八','白','百','半','办','班','帮','报','包','吧','被','备','北','杯','本','笔','比','变','便','边','表','别','病','并','部','不','才','菜','茶','差','产','长','常','唱','厂','场','车','成','城','吃','除','处','楚','初','出','传','穿','床','春','词','次','此','从','村','错','答','大','打','带','代','但','当','道','到','的','得','等','第','地','底','低','电','店','点','定','动','懂','冬','东','都','读','短','对','多','饿','而','儿','二','法','发','饭','反','房','放','方','费','飞','非','份','分','风','封','服','父','夫','该','感','干','刚','告','高','各','个','歌','哥','给','跟','更','共','工','公','古','怪','惯','馆','管','关','广','贵','国','过','果','还','孩','海','汉','号','好','河','和','合','喝','黑','很','红','后','候','湖','话','画','化','花','坏','欢','黄','回','会','婚','活','或','火','极','急','记','寄','己','几','鸡','机','假','家','见','件','间','讲','江','觉','较','叫','饺','教','交','节','结','界','介','解','姐','街','接','进','近','金','斤','今','经','京','旧','就','酒','九','久','决','开','看','课','刻','渴','可','口','筷','快','块','况','来','老','了','累','冷','离','力','里','礼','理','李','连','凉','辆','亮','两','零','另','六','龙','楼','路','马','妈','卖','买','慢','忙','毛','吗','么','没','美','每','们','门','米','面','民','明','名','目','母','拿','那','哪','难','男','南','脑','呢','能','你','年','念','您','牛','农','女','欧','怕','旁','胖','跑','朋','皮','片','票','品','平','骑','奇','其','汽','气','起','期','七','钱','前','千','亲','情','请','轻','清','秋','趣','去','取','区','全','然','让','热','人','认','日','肉','如','三','色','山','上','商','绍','少','社','什','身','生','声','识','时','实','十','视','是','市','室','事','世','始','师','受','首','手','收','树','书','双','谁','睡','水','说','四','死','思','送','诉','算','岁','虽','所','它','她','他','太','谈','特','题','提','体','天','条','听','同','统','头','图','突','外','玩','完','万','晚','王','望','忘','网','往','为','位','文','问','我','无','物','午','五','习','系','洗','喜','西','息','希','夏','下','现','先','向','像','想','相','笑','校','小','消','谢','写','些','信','新','心','行','姓','兴','星','休','许','学','亚','言','阳','羊','样','要','药','夜','业','也','意','已','以','衣','医','一','音','因','影','应','用','又','有','友','鱼','于','雨','语','园','原','院','愿','远','越','月','在','再','咱','早','怎','站','张','照','找','着','这','者','真','正','纸','只','知','之','重','种','钟','中','洲','祝','助','住','主','准','自','字','子','总','走','租','最','昨','坐','做','作',
	"，", "。", "、", "》", "《", "？","：","；", "“", "”", "‘", "’", "|", "】", "【", "\n", "(", ")"];

//---------------------Tool functions---------------------:

//turns string into list of dicts containing every char + its associated color
stringToDictArray = inputString => {
	var endList = [];
	[...inputString].forEach(element => elementInList(element) ? endList.push({char: element.replace("\n", "<br>"), color: ""}) : endList.push({char: element.replace("\n", "<br>"), color: "red"}));
	console.log(endList)
	return endList;
}

//sets html element text & color to corresponding values (used to simplify other func)
fillHTMLElement = (htmlElement, textChar, bgColor) => {
	htmlElement.innerHTML = textChar;
	htmlElement.style.backgroundColor = bgColor;
	return htmlElement
}

//literally just a function to ease writing
appendToOutput = (char, color) => document.getElementById('textOutput').appendChild(fillHTMLElement(document.createElement('span'), char, color))

//remove every child of target element
removeChildren = parent => {while (parent.firstChild) {parent.removeChild(parent.firstChild)}}

//---------------------actual functions---------------------:

function elementInList(element, listObj=LVBList) {
	if (listObj.indexOf(element) == -1) {return false} else {return true}
}

function pushToOutput() {
	let outputField = document.getElementById('textOutput');
	removeChildren(outputField);

	stringToDictArray(document.getElementById('textInput').value).forEach(element => appendToOutput(element.char, element.color));
}

