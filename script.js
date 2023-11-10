//Encriptar texto
function encriptarTexto(texto) {
    // Mapa de sustitución
    const sustituciones = {
    'e': 'enter',
    'o': 'ober',
    'i': 'imer',
    'a': 'ai',
    'u': 'ufat',
    };

    // Convertir el texto a minúsculas para ser case-insensitive
    texto = texto.toLowerCase();

    // Aplicar la sustitución utilizando replace
    const textoEncriptado = texto.replace(/[aeiou]/g, function(letra) {
      // Si el carácter está en el mapa de sustituciones, lo reemplazamos; de lo contrario, lo dejamos igual
        return sustituciones[letra] || letra;
    });

        return textoEncriptado;
}

function encriptar(){
    const textoOriginal = document.getElementById("textoEncriptado").value;
    const textoEncriptado = encriptarTexto(textoOriginal);
    
    document.getElementById("textoDesencriptado").value = textoEncriptado;

  // Limpiar las advertencias después de encriptar
  resetearMensajes();
}

//Copiar el texto encriptado
function copiarTexto() {
  const textarea = document.getElementById("textoDesencriptado");

  // Seleccionar el texto en el área de texto
  textarea.select();
  
  // Copiar el texto al portapapeles
  document.execCommand("copy");

  // Desseleccionar el texto
  window.getSelection().removeAllRanges();

  //Limpiar el campo de entrada
  document.getElementById("textoDesencriptado").value = "";
}

// Asociar la función al botón de copia
document.getElementById("botonCopiar").addEventListener("click", copiarTexto);


//Desencriptar
function desencriptarTexto(texto){
  const originales = {
    'ober': 'o',
    'enter': 'e',
    'imer': 'i',
    'ai': 'a',
    'ufat': 'u',
    };

    texto = texto.toLowerCase();

    // Aplicar la letra original utilizando replace
    const textoDesencriptado = texto.replace(/(ober|enter|imer|ai|ufat)/g, function(palabra) {
      // Si la palabra está en el mapa de originales, se reemplaza
        return originales[palabra] || palabra;
    });

        return textoDesencriptado;
}

function desencriptar(){
  const textoEncriptado = document.getElementById("textoEncriptado").value;
  const textoOriginal = desencriptarTexto(textoEncriptado);
  
  document.getElementById("textoDesencriptado").value = textoOriginal;

  // Limpiar las advertencias después de encriptar
  resetearMensajes();
}

function limpiarTodo(){
  const textareaInfo = document.getElementById("textoDesencriptado");
  const inputInfo = document.getElementById("textoEncriptado");

  inputInfo.value = "";
  textareaInfo.value = "";
}

document.getElementById("botonLimpiar").addEventListener("click", limpiarTodo);

//Validación de entrada
const input = document.getElementById("textoEncriptado");

//Mensajes para notificarle al usuario las advertencias
const advertenciaTexto = document.getElementById("advertenciaTexto");
const sugerenciaTexto = document.getElementById("sugerenciaTexto");

document.getElementById("botonEncriptado").addEventListener("click", function () {

  if (input.value.length === 0){
    mostrarAdvertencia(advertenciaTexto, "Ningún mensaje fue encontrado");
    mostrarSugerencia(sugerenciaTexto, "Ingresa el texto que desees encriptar.");
  }
  else{
    resetearMensajes();
  }
});

  document.getElementById("botonDesencriptado").addEventListener("click", function () {
    if (input.value.length === 0){
      mostrarAdvertencia(advertenciaTexto, "Ningún mensaje fue encontrado");
      mostrarSugerencia(sugerenciaTexto, "Ingresa el texto que desees desencriptar.");
    }
    else{
      resetearMensajes();
    }
  });

function resetearMensajes() {
  advertenciaTexto.innerHTML = "";
  sugerenciaTexto.innerHTML = "";
}

function mostrarAdvertencia(elemento, mensaje) {
  elemento.innerHTML = mensaje;
}

function mostrarSugerencia(elemento, mensaje) {
  elemento.innerHTML = mensaje;
}
