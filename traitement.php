<?php


header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain). 

$variable1 = (isset($_GET["variable1"])) ? $_GET["variable1"] : NULL;
$variable2 = (isset($_GET["variable2"])) ? $_GET["variable2"] : NULL;
$variable3 = (isset($_GET["variable3"])) ? $_GET["variable3"] : NULL;

$nomRecu = $variable1;
$mailRecu = $variable2;
$messageRecu = $variable3;

if ($variable1 && $variable2 && $variable3) {
	echo "Nom reçu : $nomRecu\n";
	echo "Mail reçu : $mailRecu\n";
	echo "Message reçu : $messageRecu";
	} else {
		echo "FAIL";
	}
//**************************ENVOI************************************

?>

