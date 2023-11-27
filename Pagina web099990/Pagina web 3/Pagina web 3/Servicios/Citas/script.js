  document.getElementById('formulario-cita').addEventListener('submit', function (event) {
            event.preventDefault();

      
            setTimeout(function () {
                document.getElementById('formulario-cita').style.display = 'none';
                var mensajeRespuesta = document.getElementById('mensaje-respuesta');
                mensajeRespuesta.innerHTML = '<p>Gracias por reservar una cita. Pronto nos pondremos en contacto para confirmar los detalles.</p>';
                
                var volverEnlace = document.createElement('a');
                volverEnlace.href = '../../Inicio/index.html';
                volverEnlace.textContent = 'Volver';


                mensajeRespuesta.appendChild(volverEnlace);

                mensajeRespuesta.style.display = 'block';
            }, 1000);
        });