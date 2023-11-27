document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    setTimeout(function () {
        document.getElementById('formulario-contacto').style.display = 'none';
        document.getElementById('mensaje-respuesta').innerHTML = '<p>Pronto le daremos respuesta. Hemos recibido su mensaje y lo estamos revisando atentamente. ¡Gracias por contactarnos!</p>';
        document.getElementById('mensaje-respuesta').style.display = 'block';
    }, 1000);
});

document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    setTimeout(function () {
        var mensajeRespuesta = document.getElementById('mensaje-respuesta');
        mensajeRespuesta.innerHTML = '<p>Pronto le daremos respuesta. Hemos recibido su mensaje y lo estamos revisando atentamente. ¡Gracias por contactarnos!</p>';
        

        var volverEnlace = document.createElement('a');
        volverEnlace.href = '../Inicio/index.html';
        volverEnlace.textContent = 'Volver';

        mensajeRespuesta.appendChild(volverEnlace);


        mensajeRespuesta.style.display = 'block';
    }, 1000);
});
