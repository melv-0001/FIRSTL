const list=document.querySelector('.list');
function activeLink(){
  list.forEach((item)=>{
    item.classList.remove('active');
  })
  this.classList.add('active');
}
list .forEach(item=>{
item.addEventListener('click',activeLink);})

//onglets
const onglets=document.getElementById('onglets');
const contenu=document.querySelectorAll('contenu');
let index=0;
onglets.forEach(onglets=>{
  onglets.addEventListener('click',()=>{
    if(onglets.classList.contains('active')){
      return;
    } else{
      onglets.classList.add('active')
    }
    index=onglets.getAttribute('data-anim');
    console.log(index);

    for (i=0;i< onglets.length;i++){
      if (onglets[i].getAttribute('data-anim')!= index){
        onglets[i].classList.remove('active')

      }
      
    }
    for (j=0 ;contenu.length;j++){
      if (contenu[j].getAttribute('data-anim')==index){
        contenu[j].classList.add('activeContenu');
      }
      else{
        contenu[j].classList.remove('activeContenu');
      }
    }
  })
})


//Occupons nounous
// Fonction pour charger les événements depuis le serveur
function chargernounous() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              // Succès de la requête
              var nounous = JSON.parse(xhr.responseText);
              affichernounous(nounous);
          } else {
              // Erreur lors de la requête
              console.error("Erreur de chargement des nounous: " + xhr.status);
          }
      }
  };
  xhr.open("GET", "contenu.php", true);
  xhr.send();
}

// Fonction pour afficher les nounous sur la page
function affichernounous(nounous) {
  var articlesContainer = document.getElementById("Nounous");
  articlesContainer.innerHTML = ""; // Effacer le contenu précédent

  // Générer les elements pour chaque nounou
  nounous.forEach(function(nounous) {
      var nounous = document.createElement("Nounou");
      nounous.className = "article";
      nounous.innerHTML = "<h2>" + nounous.nom + "</h2>" +
                          "<p>Stade: " +  nounous.prenom + "</p>" +
                          "<p>Date: " +  nounous.email + "</p>" +
                          "<p>Heure: " +  nounous.password + "</p>" +
                          "<button onclick='reserver(" + nounous.id_Nounous + ")'>Réserver</button>";
      articlesContainer.appendChild(nounous);
  });
}

// Function to handle reservation
function reserver(id_Nounous) {
  // Assuming you want to navigate to "billets.html" when the button is clicked
  window.location.href = "accueil.html";
}

// Appel de la fonction pour charger les événements au chargement de la page
window.onload = chargernounous;

