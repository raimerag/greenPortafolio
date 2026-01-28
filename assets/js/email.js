// 1. Obtener elementos
const form = document.getElementById("contacto");
const formStatus = document.getElementById("formStatus");

emailjs.init("PfMJcNz5k6HOYCbYm");
// 2. Escuchar submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    !form.nombre.value.trim() ||
    !form.email.value.trim() ||
    !form.mensaje.value.trim()
  ) {
    formStatus.textContent = "Completar Todos los Campos";
    return;
  }

  // Estado: enviando
  formStatus.textContent = "Enviando...";
  formStatus.className = "text-yellow-400 text-sm mt-2";

  // 3. Enviar con EmailJS
  emailjs
    .sendForm(
      "service_xzgb2ld", // SERVICE ID
      "template_h9s51s3", // TEMPLATE ID
      this,
    )

    .then(() => {
      formStatus.textContent = `${form.nombre.value} Gracias, Su Mensaje fue enviado correctamente ✅`;
      formStatus.className = "text-green-500 text-sm mt-2";
      form.reset();
    })
    .catch(() => {
      formStatus.textContent = "Error al enviar el mensaje ❌";
      formStatus.className = "text-red-500 text-sm mt-2";
    });
});
