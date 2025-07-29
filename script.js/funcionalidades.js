const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        e.preventDefault();
    }
});
