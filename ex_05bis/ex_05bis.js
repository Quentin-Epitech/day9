const charact = document.getElementById('character');
let carac = {};
let x = 0;
document.addEventListener('keydown', function(a) {carac[a.key] = true;});
document.addEventListener('keyup', function(a) {carac[a.key] = false;});

function jeu() {
    let deplacement = 0;
    
    if (carac['ArrowLeft']) { //quand fleche gauche toucher
        deplacement = -1;
        charact.classList.add('gauche');
        charact.classList.add('droite');} 
    else if (carac['ArrowRight']) { //fleche droite
        deplacement = 1;
        charact.classList.remove('gauche');
        charact.classList.add('droite');} 
        else {
        charact.classList.remove('marche');
        charact.classList.add('reste');}

    if (deplacement !== 0) {
        x += deplacement * 2; 
        charact.style.transform = "translatex(" + x + "px)";}
requestAnimationFrame(jeu);} //native  pour bouger 
jeu();