
/*Зачем я пишу этот код?*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    document.getElementById("pc").style.display ="none";




let gradient1 = 'background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);';
var cout = 0;
var getcout = 1;
var pricegetcout = 100;
var pricepop = 5000;
var priceautopop = 1000;
var xp = 0;
var needxp = 150;
var lvl = 1;
var randxp = 0;
var shopopen = 0;
var autopopLVL = 0;
var backgroundIMG = "Gradient";
var autopopspeed = 200;

var skin = 'Default';


// load data
console.log("Heeeeeey :D I LOVE U <3");


priceautopop = localStorage.getItem('priceautopop');
if(priceautopop <= 0) priceautopop = 1000;
priceautopop = parseInt(priceautopop);

autopopLVL = localStorage.getItem('autopopLVL');
if(autopopLVL <= 0) autopopLVL = 0;
autopopLVL = parseInt(autopopLVL);

cout = localStorage.getItem('cout');
if(cout <= 0) cout = 0;
cout = parseInt(cout);

getcout = localStorage.getItem('getcout');
if(getcout <= 0) getcout = 1;
getcout = parseInt(getcout);

pricegetcout = localStorage.getItem('pricegetcout');
if(pricegetcout <= 0) pricegetcout = 100;
pricegetcout = parseInt(pricegetcout);

xp = localStorage.getItem('xp');
if(xp <= 0) xp = 0;
xp = parseInt(xp);

needxp = localStorage.getItem('needxp');
if(needxp <= 0) needxp = 150;
needxp = parseInt(needxp);

lvl = localStorage.getItem('lvl');
if(lvl <= 0) lvl = 1;
lvl = parseInt(lvl);

pricepop = localStorage.getItem('pricepop');
if(pricepop <= 0) pricepop = 5000;
pricepop = parseInt(pricepop);

backgroundIMG = localStorage.getItem('backgroundIMG');
if(backgroundIMG == null){
 backgroundIMG = "Gradient";
 document.body.style = gradient1;
}
if(backgroundIMG == "Pixel") document.body.style.backgroundImage = "url('img/background.png')";
if(backgroundIMG == "Red") document.body.style.backgroundImage = "url('img/backgrounds/red.png')";
if(backgroundIMG == "Green") document.body.style.backgroundImage = "url('img/backgrounds/green.png')";
if(backgroundIMG == "Orange") document.body.style.backgroundImage = "url('img/backgrounds/orange.png')";


skin = localStorage.getItem('skin');
if(skin == null)
{
	skin = 'Default';
}
if(skin == 'Black Eye') {
	$("#default_skin").remove();
	$("head").append('<link id="black_eye" rel="stylesheet" type="text/css" href="black_eye.css">');
}
if(skin == "Terminator")
{
	$("#default_skin").remove();
	$("head").append('<link id="black_eye" rel="stylesheet" type="text/css" href="terminator.css">');
}
if(skin == "Old")
{
	$("#default_skin").remove();
	$("head").append('<link id="black_eye" rel="stylesheet" type="text/css" href="old.css">');
}

document.getElementById("lvl").textContent = "LVL: " + lvl + " ";
document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
document.getElementById("autopop").textContent = "Auto Pop: " + priceautopop + " POPS";
document.getElementById("autopopinfo").textContent = "Gives " + autopopLVL + " POPS per second";
document.getElementById("background").textContent = "Background: " + backgroundIMG;
document.getElementById("cat_skin").textContent = "Skin: " + skin;
document.getElementById("cpc").textContent = "Pops Per Click: " + getcout;
document.getElementById("upgradecats").textContent = "Mini Pop: " + pricegetcout + " POPS";
document.getElementById("pop").textContent = "Pop: " + pricepop + " POPS";
document.getElementById("achbutton").textContent = "Achivements";

document.getElementById("menu").style.display ="none";
document.getElementById("shopopened").style.display ="none";
//document.getElementById("autopopgif").style.display ="none";
document.getElementById("buystatus").style.display ="none";
document.getElementById("achivements_menu").style.display ="none";
document.getElementById("sure").style.display ="none";

//getcout *= 2; // event


if(autopopLVL > 0)
{
	//document.getElementById("autopopgif").style.display ="inline";
}


for(var i = 1; i < 31; i++)
{
	if(i != lvl)
	{
		document.getElementById("lvl_"+i).style.display ="none";
	}
}

var achmenu = 0;
function achivementsmenu()
{
		if(achmenu == 0)
		{
			document.getElementById("achbutton").textContent = "Close";
			document.getElementById("achivements_menu").style.display ="block";
			document.getElementById("cat").style.display ="none";
			//document.getElementById("autopopgif").style.display ="none";
			document.getElementById("shopopen").style.display ="none";
			document.getElementById("opened").style.display ="none";
			achmenu = 1;
			for(var i = 0; i <= x; i++)
			{
				$("#x"+i).remove();
			}
			x = 0;
		}
		else{
			for(var i = 0; i <= x; i++)
			{
				$("#x"+i).remove();
			}
			x = 0;
			document.getElementById("achbutton").textContent = "Achivements";
			document.getElementById("achivements_menu").style.display ="none";
			document.getElementById("cat").style.display ="block";
			//document.getElementById("autopopgif").style.display ="inline";
			document.getElementById("shopopen").style.display ="inline";
			document.getElementById("opened").style.display ="inline";
			achmenu = 0;
		}
		
}

function buyautopop()
{
	document.getElementById("buystatus").style.display ="inline";
	document.getElementById("buystatus").textContent = "You bought Auto Pop";
	setTimeout(closebuystatus, 4000);
if(cout >= priceautopop)
{
	if(autopopLVL <= 0)
{
	//document.getElementById("autopopgif").style.display ="inline";
}
	cout -= priceautopop;
	localStorage.setItem('cout',cout);
	priceautopop += 500;
	localStorage.setItem('priceautopop',priceautopop);
	autopopLVL += 1;
	localStorage.setItem('autopopLVL', autopopLVL);
	randxp = Math.floor(Math.random() * (50 - 0) + 0);
	xp += randxp;
	localStorage.setItem('xp',xp);
	document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
	document.getElementById("autopop").textContent = "Auto Pop: " + priceautopop + " POPS";
document.getElementById("autopopinfo").textContent = "Gives " + autopopLVL + " POPS per second";
	upgrade();
}
}

autopop();
function autopop()
{
	cout += autopopLVL;
	document.getElementById("opened").textContent = "POPS: " + cout;
	setTimeout(autopop, autopopspeed);
	localStorage.setItem('cout',cout);
	if(autopopLVL > 0){
    x++;
    $("#cat").append('<div id="x'+x+'" hidden></div>');
    document.getElementById('x'+x).textContent = autopopLVL+'.0';
    randxp = Math.floor(Math.random() * (320 - 0) + 0);
    $("#x"+x).css("top", randxp);
    randxp = Math.floor(Math.random() * (320 - 0) + 0);
    $("#x"+x).css("left", randxp);
    $("#x"+x).css("position", "absolute");
    $("#x"+x).css("width", "25px");
    $("#x"+x).css("height", "25px");
    $("#x"+x).css("color", "black");
    $("#x"+x).css("font-family", "SFProDisplay-Light");
    $("#x"+x).css("animation", "GoUp 2s forwards linear");
    $("#x"+x).show();
    }
}

function openshop(){
if(shopopen == 0)
{
	document.getElementById("achbutton").style.display ="none";
	document.getElementById("shopopened").style.display ="inline";
	document.getElementById("openshop").style.display ="none";
	document.getElementById("menu").style.display ="block";
	document.getElementById("cat").style.display ="none";
	shopopen = 1;
//	document.getElementById("autopopgif").style.display ="none";
	for(var i = 0; i <= x; i++)
	{
		$("#x"+i).remove();
	}
	x = 0;
}
else{
	for(var i = 0; i <= x; i++)
	{
		$("#x"+i).remove();
	}
	x = 0;
	document.getElementById("achbutton").style.display ="inline";
	document.getElementById("shopopened").style.display ="none";
	document.getElementById("openshop").style.display ="inline";
		document.getElementById("menu").style.display ="none";
	document.getElementById("cat").style.display ="block";
	document.getElementById("buystatus").style.display = "none";
	document.getElementById("sure").style.display ="none";
	shopopen = 0;
	if(autopopLVL > 0)
{
	//document.getElementById("autopopgif").style.display ="inline";
}
	}
}

function upgrade()
{
	if(xp >= needxp)
	{
		document.getElementById("lvl_"+lvl).style.display ="none";
		xp = 0;
		localStorage.setItem('xp',xp);
		needxp *= 1.8;
		needxp = Math.floor(needxp);
		localStorage.setItem('needxp',needxp);
		lvl += 1;
		localStorage.setItem('lvl',lvl);
		document.getElementById("lvl").textContent = "LVL: " + lvl + " ";
		document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
		document.getElementById("lvl_"+lvl).style.display ="inline";
		cout += lvl * 100;
		document.getElementById("opened").textContent = "POPS: " + cout;
		localStorage.setItem('cout',cout);

	}
}
function closebuystatus(){
document.getElementById("buystatus").style.display ="none";
}
cat.onclick=function(event)
{	

	pop();
	
}

DivObject = function() {
	    this.div = document.createElement( "div" ) ;
	    document.body.appendChild( this.div ) ;
	    this.div.className = "panel" ;
	    this.div.innerHTML = getcout ;
	}
function pop(touch){
	cout += getcout;
	document.getElementById("opened").textContent = "POPS: " + cout;
	randxp = Math.floor(Math.random() * (14 - 0) + 0);
	xp += randxp;
	localStorage.setItem('xp',xp);
	document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
	localStorage.setItem('cout',cout);
	upgrade();
	getachivements();
}

function upgradeGet(){
	if(cout >= pricegetcout)
	{
		document.getElementById("buystatus").style.display ="inline";
	document.getElementById("buystatus").textContent = "You bought Mini Pop";
	setTimeout(closebuystatus, 3000);
		cout -= pricegetcout;
		localStorage.setItem('cout',cout);
		getcout += 1;
		localStorage.setItem('getcout', getcout);
		pricegetcout += 100;
		localStorage.setItem('pricegetcout',pricegetcout);
		document.getElementById("cpc").textContent = "Pops Per Click: " + getcout;
		document.getElementById("opened").textContent = "POPS: " + cout;
		document.getElementById("upgradecats").textContent = "Mini Pop: " + pricegetcout + " POPS";
		randxp = Math.floor(Math.random() * (50 - 0) + 0);
		xp += randxp;
		localStorage.setItem('xp',xp);
		document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
		upgrade();
		getachivements();
	}
}

function upgrade2()
{
if(cout >= pricepop)
	{
		document.getElementById("buystatus").style.display ="inline";
	document.getElementById("buystatus").textContent = "You bought a Pop";
	setTimeout(closebuystatus, 3000);
		cout -= pricepop;
		localStorage.setItem('cout',cout);
		getcout *= 2;
		localStorage.setItem('getcout', getcout);
		pricepop *= 4;
		localStorage.setItem('pricepop',pricepop);
		document.getElementById("cpc").textContent = "Pops Per Click: " + getcout;
		document.getElementById("opened").textContent = "POPS: " + cout;
		document.getElementById("pop").textContent = "Mini Pop: " + pricepop + " POPS";
		randxp = Math.floor(Math.random() * (150 - 0) + 0);
		xp += randxp;
		localStorage.setItem('xp',xp);
		document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
		upgrade();
		getachivements();
	}
}

function changebackground(){
	if(backgroundIMG == "Gradient")
	{
		backgroundIMG = "Pixel";
		localStorage.setItem('backgroundIMG',backgroundIMG);
		document.body.style.backgroundImage = "url('img/background.png')";
	}
	else if(backgroundIMG == "Pixel")
	{
		backgroundIMG = "Red";
		localStorage.setItem('backgroundIMG',backgroundIMG);
		document.body.style.backgroundImage = "url('img/backgrounds/red.png')";
	}
		else if(backgroundIMG == "Red")
	{
		backgroundIMG = "Green";
		localStorage.setItem('backgroundIMG',backgroundIMG);
		document.body.style.backgroundImage = "url('img/backgrounds/green.png')";
	}
		else if(backgroundIMG == "Green")
	{
		backgroundIMG = "Orange";
		localStorage.setItem('backgroundIMG',backgroundIMG);
		document.body.style.backgroundImage = "url('img/backgrounds/orange.png')";
	}
	else{
		backgroundIMG = "Gradient";
		localStorage.setItem('backgroundIMG',backgroundIMG);
		document.body.style = gradient1;

	}
	document.getElementById("background").textContent = "Background: " + backgroundIMG;
}

function changeskin(){
	if(skin == 'Default')
	{
		$("#default_skin").remove();
	$("head").append('<link id="black_eye" rel="stylesheet" type="text/css" href="black_eye.css">');
	skin = 'Black Eye';
	localStorage.setItem('skin', skin);
	document.getElementById("cat_skin").textContent = "Skin: " + skin;
	}
	else if(skin == "Black Eye")
	{
		$("#black_eye").remove();
	$("head").append('<link id="terminator" rel="stylesheet" type="text/css" href="terminator.css">');
		skin = 'Terminator';
	localStorage.setItem('skin', skin);
	document.getElementById("cat_skin").textContent = "Skin: " + skin;
	}
	else if(skin == "Terminator")
	{
		$("#terminator").remove();
	$("head").append('<link id="old" rel="stylesheet" type="text/css" href="old.css">');
		skin = 'Old';
	localStorage.setItem('skin', skin);
	document.getElementById("cat_skin").textContent = "Skin: " + skin;
	}
	else{
		$("#old").remove();
	$("head").append('<link id="black_eye" rel="stylesheet" type="text/css" href="main.css">');
		skin = 'Default';
	localStorage.setItem('skin', skin);
	document.getElementById("cat_skin").textContent = "Skin: " + skin;
	}
	
}
getachivements();
function getachivements(){
	if(lvl >= 10)
	{
		document.getElementById("lvl10").style.display ="inline";
	}
	else{
		document.getElementById("lvl10").style.display ="none";
	}
}

function restoreapply(){
	document.getElementById("sure").style.display ="inline";
}

function restoreno(){
	document.getElementById("sure").style.display ="none";
}

function restore(){
	document.getElementById("lvl_"+lvl).style.display ="none";
	//document.getElementById("autopopgif").style.display ="none";

	localStorage.setItem('cout', 0);
	localStorage.setItem('getcout', 0);
	localStorage.setItem('pricegetcout', 0);
	localStorage.setItem('xp', 0);
	localStorage.setItem('needxp', 0);
	localStorage.setItem('lvl', 0);
	localStorage.setItem('pricepop', 0);
	localStorage.setItem('priceautopop',0);
	localStorage.setItem('autopopLVL', 0);
	localStorage.setItem('lvl10', 0);

	


priceautopop = localStorage.getItem('priceautopop');
if(priceautopop <= 0) priceautopop = 1000;
priceautopop = parseInt(priceautopop);

autopopLVL = localStorage.getItem('autopopLVL');
if(autopopLVL <= 0) autopopLVL = 0;
autopopLVL = parseInt(autopopLVL);
	
cout = localStorage.getItem('cout');
if(cout <= 0) cout = 0;
cout = parseInt(cout);

pricepop = localStorage.getItem('pricepop');
if(pricepop <= 0) pricepop = 5000;
pricepop = parseInt(pricepop);

getcout = localStorage.getItem('getcout');
if(getcout <= 0) getcout = 1;
getcout = parseInt(getcout);

pricegetcout = localStorage.getItem('pricegetcout');
if(pricegetcout <= 0) pricegetcout = 100;
pricegetcout = parseInt(pricegetcout);

xp = localStorage.getItem('xp');
if(xp <= 0) xp = 0;
xp = parseInt(xp);

needxp = localStorage.getItem('needxp');
if(needxp <= 0) needxp = 150;
needxp = parseInt(needxp);

lvl = localStorage.getItem('lvl');
if(lvl <= 0) lvl = 1;
lvl = parseInt(lvl);

backgroundIMG = localStorage.getItem('backgroundIMG');
if(backgroundIMG == null){
 backgroundIMG = "Gradient";
 document.body.style = gradient1;
}

if(backgroundIMG == "PixelBackground") document.body.style.backgroundImage = "url('img/background.png')";
getachivements();
document.getElementById("lvl").textContent = "LVL: " + lvl + " ";
document.getElementById("xp").textContent = " - XP: " + xp + " / " + needxp;
document.getElementById("background").textContent = "Background: " + backgroundIMG;
document.getElementById("opened").textContent = "POPS: " + cout;
document.getElementById("cpc").textContent = "Pops Per Click: " + getcout;
document.getElementById("upgradecats").textContent = "UPGRADE: " + pricegetcout + " POPS";
document.getElementById("pop").textContent = "Pop: " + pricepop + " POPS";
document.getElementById("lvl_"+lvl).style.display ="inline";
document.getElementById("autopop").textContent = "Auto Pop: " + priceautopop + " POPS";
document.getElementById("autopopinfo").textContent = "Gives " + autopopLVL + " POPS per second";
}


		
	var x = 0;
	$("#cat").click(function(e) {
    x++;
    $("#cat").append('<div id="x'+x+'" hidden></div>');
    document.getElementById('x'+x).textContent = getcout+'.0';
    $("#x"+x).css("top", e.clientY);
    $("#x"+x).css("left", e.clientX - 10);
    $("#x"+x).css("position", "absolute");
    $("#x"+x).css("width", "25px");
    $("#x"+x).css("height", "25px");
    $("#x"+x).css("color", "black");
    $("#x"+x).css("font-family", "SFProDisplay-Light");
    $("#x"+x).css("animation", "GoUp 2s forwards linear");
    $("#x"+x).show();
	});	
	} else 
{
document.getElementById("mobile").style.display ="none";
$("#default_skin").remove();
$("head").append('<link id="black_eye" rel="stylesheet" type="text/css" href="pc/pc_style.css">');
	skin = 'Default';}