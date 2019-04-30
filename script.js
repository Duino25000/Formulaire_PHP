
function traitement() {
	var nomSaisie = document.querySelector("#nom").value;
	var mailSaisie = document.querySelector("#mail").value; 
	var contactSaisie = document.querySelector("#contact").value;
	
	var chgt_p_nom = document.querySelector("#label_p_nom");
	var chgtNom = document.querySelector("#label_nom");
	var chgt_p_contact = document.querySelector("#pArea");
	var chgtContact = document.querySelector("#label_contact");
	var chgt_p_mail = document.querySelector("#pMail");
	var chgtMail = document.querySelector("#label_mail");

//************************************
    if (nomSaisie!=""){	
    	if(/^[a-zA-Z- ]+$/.test(nomSaisie)){
    		console.log('ok')
    		chgtNom.innerHTML = "Nom";
    		chgt_p_nom.innerHTML = "Format correct";
    		document.querySelector("#nom").style.borderColor = 'green';	
    	}else{
    		chgt_p_nom.innerHTML = "Seule les majuscules, minuscules et le tiret sont autorisés.";
    		document.querySelector("#nom").style.borderColor = 'red';	
    	}
    }
//**********************************
	if (mailSaisie!=""){
    	 if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mailSaisie)){
    	 	chgtMail.innerHTML = "Mail";
    		document.querySelector("#mail").style.borderColor = 'green';
    		chgt_p_mail.innerHTML = "Format correct";	
    	}else{
    		chgt_p_mail.innerHTML = "Veuillez saisir une adresse mail valide.";
    		document.querySelector("#mail").style.borderColor = 'red';
    	}
    }
//*********************************
	if (contactSaisie!=""){  	
	    	if(/^[a-zA-Z0-9-()!?@.,;:{}"']+$/.test(contactSaisie)){
	    		chgtContact.innerHTML = "Laissez nous un message";
	    		document.querySelector("#contact").style.borderColor = 'green';	
	    		chgt_p_contact.innerHTML = "Format correct";
	    	}else{
	    		chgt_p_contact.innerHTML = "Caractère spécial non autorisé";
	    		document.querySelector("#contact").style.borderColor = 'red';
	    	}
	}
}//fonction
//*************************************************************************************
var flag=true;
function check(){
	var inputs = document.querySelectorAll(".vide");
	var i;
	
	for (i=0; i<inputs.length; i++){
		if (inputs[i].value==""){	
			var champs=inputs[i];
			champs.style.borderColor = 'red';
			var label_id = "#label_" + champs.id;
			var monLabel=document.querySelector(label_id);
			var texteDeMonLabel = monLabel.innerHTML;
			monLabel.innerHTML= texteDeMonLabel + "*";

			while (flag){
				alert("Tous les renseignements sont obligatoires!\nVérifiez les champs en rouges.");
				flag=false;
			}//while
  		}else{
  			traitement();
  		}
	}//for
}//fonction
//************************INSTANCIER UN OBJET XHR****************************************
var xhr = getXMLHttpRequest(); 

var sVar1 = encodeURIComponent("");
var sVar2 = encodeURIComponent("");
var sVar2 = encodeURIComponent("");

xhr.open("GET", "handlingData.php?variable1=" + sVar1 + "&variable2= " + sVar2 + "&variable3= " + sVar3, true);

xhr.send(null);
