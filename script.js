function responder() {
  const input = document.getElementById("input").value.toLowerCase();
  const respuesta = document.getElementById("respuesta");

  if (input.includes("hola")) {
    respuesta.innerText = "Hola, ¿cómo estás?";
  } else if (input.includes("quién eres")) {
    respuesta.innerText = "Soy una IA creada por ti 😎";
  } else {
    respuesta.innerText = "No entendí, pero estoy aprendiendo...";
  }
}
