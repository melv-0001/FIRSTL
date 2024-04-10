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
//let onglets=document.querySelectorAll('nav ul li');

//for(let i=0;i<onglets.length;i+=1){
  //onglets[i].addEventListener('click',function () {
  //onglets[i].classList.add('active')
  //})
//}

$(window).scroll(function (event) {
  // A chaque fois que l'utilisateur va scroller (descendre la page)
  var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

  //si cette valeur > à 200 on ajouter la class
  if (y >= 200) {
    $('.mokey').addClass('fixed');
  } else {
    // sinon, on l'enlève
    $('.mokey').removeClass('fixed');
  }
});
