<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ahoukan";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Requête pour récupérer les événements de la table nounous
$sql = "SELECT * FROM ";
$result = $conn->query($sql);

$nounous = array();

if ($result->num_rows > 0) {
    // Stocker les événements dans un tableau
    while($row = $result->fetch_assoc()) {
        $nounous[] = $row;
    }
} else {
    echo json_encode(array("message" => "Aucun événement trouvé."));
}

// Fermer la connexion à la base de données
$conn->close();

// Renvoyer les événements au format JSON
echo json_encode($nounous);
?>
