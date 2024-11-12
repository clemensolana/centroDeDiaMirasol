// Require's
const { sendEmail } = require('../services/emailService');
require('dotenv').config();

const sendContactForm = async (req, res) => {
  // resta validar y limpiar los datos del formulario mediante express-validator
  const {
    name,
    phone,
    email,
    healthInsurance,
    age,
    message,
    terms,
    dataProtection,
  } = req.body;

  const cleanedPhone = phone.replace(/\D/g, '');
  const phoneNumber = Number(cleanedPhone);

  const subject = `Consulta desde sitio web de Mirasol de ${name}`;
  const text = `Nombre y apellido: ${name}\nTeléfono: ${phoneNumber}\nEmail: ${email}\nObra social: ${healthInsurance}\nEdad: ${age}\nMensaje:\n${message}\n\nTérminos y condiciones: ${
    terms ? 'Aceptado' : 'No aceptado'
  }\nPolítica de protección de datos: ${
    dataProtection ? 'Aceptado' : 'No aceptado'
  }`;

  try {
    await sendEmail(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      subject,
      text,
      email
    );
    res.status(200).send('Correo enviado con éxito.');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send(`Error al enviar el correo: ${error.message}`);
  }
};

module.exports = { sendContactForm };
