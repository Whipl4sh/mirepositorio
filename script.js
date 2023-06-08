// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); 
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    
    // Aquí puedes agregar el código para procesar los datos del formulario
    // Puedes enviar los datos a través de una solicitud HTTP o realizar alguna validación adicional
  
    // Limpiar los campos del formulario después del envío
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
  
  // Agregar el controlador de evento al formulario
  form.addEventListener('submit', handleSubmit);
  