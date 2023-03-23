let contenedor = document.getElementById('pcPixelArt');
let animacionIniciada = false;

document.addEventListener('mousemove', function(evento) {
    let x = evento.clientX;
    let y = evento.clientY;

    let contenedorRect = contenedor.getBoundingClientRect();
    let xRelativo = x - contenedorRect.left;
    let yRelativo = y - contenedorRect.top;

    let pc = document.getElementById('pcPixelArt');
    let imgContainerSuperior = document.getElementsByClassName('imgContainerSuperior')[0];
    let xMov = (xRelativo - contenedorRect.width / 2) / 60;
    let yMov = (yRelativo - contenedorRect.height / 2) / 60;
    if(!animacionIniciada) {
        pc.style.transform = 'translate(0px, 0px)';
        imgContainerSuperior.style.animation = 'movimientoInicial 5s ease 1';
        imgContainerSuperior.style.animationDelay = '1.5s';
        animacionIniciada= true;
    } else {
        pc.style.transform = 'translate(' + xMov + 'px, ' + yMov + 'px)';
    }
});