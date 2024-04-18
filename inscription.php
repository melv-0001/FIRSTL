<?php
error_reporting(E_ALL);
session_start();
if(isset($_POST["inscription"])){
    //recuperation des données
    $nom=htmlentities($_POST['nom']);
    $prenom=htmlentities($_POST['prenom']);
    $email=htmlentities($_POST['email']);
    $password=htmlentities($_POST['password']);

    //postage ds la db
    $db_username = 'root';
    $db_password = '';
    $db_name = 'ahoukan';
    $db_host = '127.0.0.1';
    $newURL='\contenu\contenu.html';
    
    
    $mysqli= new mysqli($db_host, $db_username, $db_password,$db_name) ;
    

    if(!$mysqli){
        echo("Erreur de connexion");
    }
    else{
         // Requête d'insertion des données dans la table appropriée
         $sql = "INSERT INTO nounous (nom, prenom, email, password ) VALUES ('$nom', '$prenom', '$email', '$password')";

         // Exécuter la requête et vérifier son succès
        if ($mysqli->query($sql) === TRUE) {
                 header('Location: '.$newURL);
        } else {
                 echo "Erreur lors de l'inscription. Veuillez réessayer ultérieurement.";
        }
        echo "Inscription réussie !";
       
        die();
    }
   


}






?>