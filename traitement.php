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
//***********************************************************************
// Plusieurs destinataires
     $to  = 'duinopi3@gmail.com'; 

     // Sujet
     $subject = 'Calendrier des anniversaires pour Août';

     // message
     $message = '
     <html>
      <head>
       <title>Calendrier des anniversaires pour Août</title>
      </head>
      <body>
       <p>Voici les anniversaires à venir au mois d\'Août !</p>
       <table>
        <tr>
         <th>Personne</th><th>Jour</th><th>Mois</th><th>Année</th>
        </tr>
        <tr>
         <td>Josiane</td><td>3</td><td>Août</td><td>1970</td>
        </tr>
        <tr>
         <td>Emma</td><td>26</td><td>Août</td><td>1973</td>
        </tr>
       </table>
      </body>
     </html>
     ';

     // Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
     $headers[] = 'MIME-Version: 1.0';
     $headers[] = 'Content-type: text/html; charset=iso-8859-1';

     /* En-têtes additionnels
     $headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
     $headers[] = 'From: Anniversaire <anniversaire@example.com>';
     $headers[] = 'Cc: anniversaire_archive@example.com';
     $headers[] = 'Bcc: anniversaire_verif@example.com';*/

     // Envoi
     mail($to, $subject, $message, implode("\r\n", $headers));
?>

