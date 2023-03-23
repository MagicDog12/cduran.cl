let contenedor = document.getElementById('pcPixelArt');
document.addEventListener('mousemove', function(evento) {
    let x = evento.clientX;
    let y = evento.clientY;

    let contenedorRect = contenedor.getBoundingClientRect();
    let xRelativo = x - contenedorRect.left;
    let yRelativo = y - contenedorRect.top;

    let pc = document.getElementById('pcPixelArt');
    let xMov = (xRelativo - contenedorRect.width / 2) / 60;
    let yMov = (yRelativo - contenedorRect.height / 2) / 60;
    pc.style.transform = 'translate(' + xMov + 'px, ' + yMov + 'px)';
});