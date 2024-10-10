document.addEventListener('DOMContentLoaded', () => {
    const parallax = document.getElementById('cont');
    const image = [{ class: 'layer-bg', speed: 0.1 },
      {class: 'layer-1', speed: 0.3 },
      {class: 'layer-2', speed: 0.5 },
      {class: 'layer-3', speed: 0.7 },
      {class: 'layer-4', speed: 0.9 },
      {class: 'layer-5', speed: 1.2 },
      {class: 'layer-6', speed: 1.5 },
      {class: 'layer-7', speed: 1.7 },
      {class: 'layer-8', speed: 1.9 },
      {class: 'layer-9', speed: 2.1 },
      {class: 'layer-10', speed: 2.3 },];
  
    image.forEach(layer => {
      const div = document.createElement('div');
      div.className = "para " + layer.class;
      parallax.appendChild(div);});
    document.body.style.overflow = 'hidden';
  
    document.addEventListener('mousemove', (a) => {
      const aX = window.innerWidth / 2;
      const aY = window.innerHeight / 2;
      const bX = a.clientX - aX;
      const bY = a.clientY - aY;
  
    image.forEach(layer => {
        const element = document.querySelector("." + layer.class);
        const oX = bX * layer.speed;
        const oY = bY * layer.speed;
        element.style.transform = "translate(" + oX + "px, " + oY + "px)";});});});