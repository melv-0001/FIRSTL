// Cacher le loader après le chargement complet de la page
window.addEventListener('load', function() {
    const loader= document.querySelector('.loading-wave');
    loading-wave.style.display=='none';
});
const hoverbtn=document.querySelectorAll('.hoverbtn').
hoverbtn.forEach(hoverbtn => {
    hoverbtn.addEventListener('mouseover',(e)=>{
        let x = e.pageX - hoverbtn.offsetLeft;
        let y = e.pageY - hoverbtn.offsetTop;

        hoverbtn.style.setProperty('--x',x + "px");
        hoverbtn.style.setProperty('--y',y + "px");
    })

    
});