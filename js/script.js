//___________#VARIABLES#_____________//

var gallery = document.getElementById('gallery');
var masco  = document.getElementById('masco');
var monIntsa = document.getElementById('monIntsa');
var contMonInsta = document.getElementById('contMonInsta');
var prenoms = ["Boris", "Karl", "Gauthier", "yc", "loloolo", "kbjhvghfgh"];
var commUser = document.getElementById('commUser');
var comms = document.getElementById('comms');
//___________#FinVARIABLES#_________//

//___________#FUNCTIONS#_________//
function noircir(image){
	image.style.opacity=0.7;
}

function blanchir(image){
	image.style.opacity=1;
}

function apparition(){
	contMonInsta.style.visibility="visible";
	masco.style.visibility="visible";
}

function envoyercomm(){
	var commentaire = commUser.value;
	var hazard = prenoms[Math.floor(Math.random()*5)];
	comms.innerHTML+="<li>"+hazard+" : "+commentaire+"</li>";

}


//___________#FinFUNCTIONS#_________//



//JE METS MES INSTAS

for(var i = 1; i < 9; i++){
	gallery.innerHTML += "<div class=\"contInsta\" ><img class=\"imgInsta\" src=\"images/photo"+i+".jpg\" onclick=\"apparition();\" onmouseover=\"noircir(this)\" onmouseleave=\"blanchir(this)\" ></div>";
}

//J'AI MIS MES INSTAS