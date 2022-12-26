const textoEntrada = document.getElementById ("textoEntrada");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");

function Encriptar () {

    let texto = textoEntrada.value;
    document.getElementById("Frame5").style.display = "none";
    console.log (texto);

}

botonEncriptar.onclick = () => {

    Encriptar();

};


// https://www.w3schools.com/jsref/prop_style_display.asp


// ¡Bienvenidos y Bienvenidas a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

// Desencripta nuestro mensaje secreto!

// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
