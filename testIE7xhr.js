
//Pour IE inférieur à la version 7. Test si le navigateur supporte les objets XMLHttpRequest.
var xhr = null;
	
if (window.XMLHttpRequest || window.ActiveXObject) {
	if (window.ActiveXObject) {
		try {
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	} else {
		xhr = new XMLHttpRequest(); 
	}
} else {
	alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
	return;
}

//************************INSTANCIER UN OBJET XHR DE BASE****************************************
var xhr = getXMLHttpRequest(); 

xhr.open("GET", "traitement.php", true);//définir les modalités d'envoi

/*open  s'utilise de cette façon : open(sMethod, sUrl, bAsync):

->sMethod : la méthode de transfert : GET ou POST

->sUrl : la page qui donnera suite à la requête.
 Ça peut être une page dynamique (PHP, CFM, ASP) ou une page statique (TXT, XML...)

->bAsync : définit si le mode de transfert est asynchrone ou non (synchrone).
  Dans ce cas, mettez true . Ce paramètre est optionnel et vaut true  par défaut,
  mais il est courant de le définir quand même.*/
xhr.send(null);//et la méthode.
//*************************OBJET XHR AVEC DES VARIABLES*********************************************
var sVar1 = encodeURIComponent("contenu avec des espaces");
var sVar2 = encodeURIComponent("je vois que vous êtes un bon élève... oopa !");
/*Il est important de protéger les variables pour conserver les caractères spéciaux et 
les espaces. Pour cela, on utilise la fonction globale encodeURIComponent*/
xhr.open("GET", "handlingData.php?variable1=" + sVar1 + "&variable2= " + sVar2, true);
xhr.send(null);
