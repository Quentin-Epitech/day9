const imagesData  = [['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
    ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
    ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
    ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
    ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
    ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
    ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
    ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
    ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
    ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
    ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']]

    function genererCartes(donneesDesCartes) {
        const listeDeCartes = document.getElementById('cards-list');
        donneesDesCartes.forEach((donneesCarte, index) => {
            listeDeCartes.innerHTML += '<div class="card ' + index + '">' +'<div class="card_image"><img src="' + donneesCarte[0] + '"/></div>' +
            '<div class="card_title"><p>' + donneesCarte[1] + '</p></div>' +'</div>';});

        listeDeCartes.addEventListener('wheel', (event) => {
            event.preventDefault();
            listeDeCartes.scrollLeft += event.deltaY;  //le scroll se fait de bas en haut ou de haut en bas sur trackpad
        });
    

        const cartes = document.querySelectorAll('.card');
        cartes.forEach(carte => {
            carte.addEventListener('click', () => {
                cartes.forEach(c => c.classList.remove('zoomée')); 
                carte.classList.add('zoomée');  });
        });
    
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                const carteZoomée = document.querySelector('.zoomée');
                if (carteZoomée) {
                    carteZoomée.classList.remove('zoomée'); }}});}
    genererCartes(imagesData);
