//
// Archivo de JS con todas las funcionalidades del challenge "Amigo Secreto"
// este codigo es la versión mejorada de la versión app.js
// Cambios y mejoras realizadas
//  * Uso de const y let en lugar de var para mayor seguridad y claridad.
//  * Eliminación de variable global innecesaria (capturaAmigo), ahora se maneja localmente.
//  * Validación más limpia en agregarAmigo(): primero se revisa si el campo está vacío antes de procesar.
//
//Renombrado de funciones:
//
// * evaluaAmigo → esAmigoValido (más semántico).
// * habilitarJuego → habilitarBoton (consistencia).
// * Uso de childElementCount en lugar de childNodes.length, ya que evita contar nodos de texto.
// * Uso de template literals (`texto ${variable}`) para mayor legibilidad.
// * Separación clara de responsabilidades en funciones: cada una hace una sola cosa.
// * Código más conciso y legible eliminando comentarios redundantes.

// Lista global de amigos
let listaAmigos = [];

// Agrega un amigo secreto a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const listaElement = document.getElementById("listaAmigos");
  let nombreAmigo = capitalize(inputAmigo.value.trim());

  if(!validarSoloTexto(nombreAmigo)){
    alert("Por favor :), escribe un amigo válido para agregar.");
    inputAmigo.value = "";
    return;
  }

  if (!nombreAmigo) {
    alert("Por favor :), escribe un amigo válido para agregar.");
    return;
  }

  if (!esAmigoValido(nombreAmigo, listaElement)) {
    alert("Ese amigo ya se encuentra en la lista.");
    inputAmigo.value = "";
    return;
  }

  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = nombreAmigo;
  listaElement.appendChild(nuevoLi);

  listaAmigos.push(nombreAmigo);
  inputAmigo.value = "";
}

// Sortea un amigo secreto de la lista
function sortearAmigo() {
  const listaResultado = document.getElementById("resultado");
  const listaSorteo = document.getElementById("listaAmigos");

  if (listaSorteo.childElementCount === 0) {
    alert("Por favor :), agrega un amigo para comenzar el juego.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[randomIndex];

  const resultadoLi = document.createElement("li");
  resultadoLi.textContent = `El amigo secreto elegido es: ${amigoSorteado}`;
  listaResultado.appendChild(resultadoLi);

  deshabilitarBoton("botonSorteo");
  habilitarBoton("botonReinicio");
}

// Verifica si el amigo ya existe en la lista
function esAmigoValido(nombreAmigo, listaElement) {
  const nombresExistentes = Array.from(listaElement.querySelectorAll("li"))
    .map(li => li.textContent);

  return !nombresExistentes.includes(nombreAmigo);
}

// Convierte un texto a "Capitalizado"
function capitalize(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function validarSoloTexto(cadena) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Permite letras, acentos, ñ y espacios
  return regex.test(cadena);
}

// Deshabilita un botón por ID
function deshabilitarBoton(idBoton) {
  const boton = document.getElementById(idBoton);
  boton.disabled = true;
  boton.textContent = "Botón ha sido deshabilitado";
}

// Habilita un botón por ID
function habilitarBoton(idBoton) {
  const boton = document.getElementById(idBoton);
  boton.disabled = false;
}