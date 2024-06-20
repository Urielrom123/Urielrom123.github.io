document.getElementById('compraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    emailjs.send('service_g87nia5', 'template_a13errm', {
        nombre: nombre,
        email: email
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.querySelector('.mensajeExito').classList.remove('oculto');
        document.querySelector('.formulario').classList.add('oculto');
    }, function(error) {
        console.error('FAILED...', error);
    });
});