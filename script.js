function encriptarTexto(texto) {
    // Mapa de sustitución
    const sustituciones = {
    'e': 'enter',
    'o': 'ober',
    'i': 'imer',
    'a': 'ai',
    'u': 'ufat',
      // Agrega más sustituciones según sea necesario
    };

    // Convertir el texto a minúsculas para ser case-insensitive
    texto = texto.toLowerCase();

    // Aplicar la sustitución utilizando replace
    const textoEncriptado = texto.replace(/[aeiou]/g, function(char) {
      // Si el carácter está en el mapa de sustituciones, lo reemplazamos; de lo contrario, lo dejamos igual
        return sustituciones[char] || char;
    });

        return textoEncriptado;
}

function encriptar(){
    const textoOriginal = document.getElementById("textoEncriptado").value;
    const textoEncriptado = encriptarTexto(textoOriginal);
    
    document.getElementById("textoDesencriptado").value = textoEncriptado;
}
