document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  // queda pendiente de implementar la validación del formulario

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        alert(
          'Consulta enviada con éxito, le responderemos a la brevedad. Muchas gracias por contactarnos.'
        );
        window.location.href = '/';
      } else {
        const errorData = await response.json();
        alert(
          'Error al enviar consulta, disculpe las molestias, ' +
            errorData.message
        );
      }
    } catch (error) {
      alert('tipo de error: ' + error.message);
    }
  });
});
