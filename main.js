// Inicio

const logo = document.getElementById("logo");
const textoEntrada = document.getElementById("textoEntrada");
const munieco = document.getElementById("munieco");
const Rectangle1_texto1 = document.getElementById("Rectangle1_texto1");
const Rectangle1_texto2 = document.getElementById("Rectangle1_texto2");
const Frame5 = document.getElementById("Frame5");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const textarea = document.createElement("textarea");
const botonCopiar = document.createElement("button");

function RemoverDefault() {
  munieco.remove();
  Rectangle1_texto1.remove();
  Rectangle1_texto2.remove();
}

function Encriptar() {
  let texto = textoEntrada.value;
  let textoMinusculas = texto.toLowerCase();

  if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {
    alert("No hay texto para encriptar.");
  } else {
    RemoverDefault();
    let textoEncriptado = textoMinusculas
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    textarea.value = "El texto encriptado es: " + '"' + textoEncriptado + '".';
    textarea.spellcheck = false;
    textarea.className = "textoSalida";
    Frame5.append(textarea);
    botonCopiar.className = "btn_co";
    botonCopiar.innerText = "Copiar";
    Frame5.append(botonCopiar);
    botonEncriptar.innerText = "Encriptación Exitosa!";

    botonCopiar.onclick = function () {
      let textoCopiado = textoEncriptado;
      navigator.clipboard.writeText(textoCopiado);
      botonCopiar.innerText = "Texto copiado a portapapeles!";
    };
  }
}

function Desencriptar() {
  let texto = textoEntrada.value;
  let textoMinusculas = texto.toLowerCase();

  if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {
    alert("No hay texto para desencriptar.");
  } else {
    RemoverDefault();
    let textoDesencriptado = textoMinusculas
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    textarea.value =
      "El texto desencriptado es: " + '"' + textoDesencriptado + '".';
    textarea.spellcheck = false;
    textarea.className = "textoSalida";
    Frame5.append(textarea);
    botonCopiar.className = "btn_co";
    botonCopiar.innerText = "Copiar";
    Frame5.append(botonCopiar);
    botonDesencriptar.innerText = "Desencriptación Exitosa!";

    botonCopiar.onclick = function () {
      let textoCopiado = textoDesencriptado;
      navigator.clipboard.writeText(textoCopiado);
      botonCopiar.innerText = "Texto copiado a portapapeles!";
    };
  }
}

botonEncriptar.addEventListener("click", Encriptar);
botonDesencriptar.addEventListener("click", Desencriptar);

window.addEventListener("DOMContentLoaded", () => {
  logo.onmouseenter = () => {
    logo.src = "logo2.svg";
  };

  logo.onmouseleave = () => {
    logo.src = "logo.svg";
  };
});

// Solamente se admite el abecedario en minusculas de la a hasta la z.
// A excepcion de la coma, el punto y nueva linea (parrafo).

function CambiarCarsInvalidos(caracter) {
  const caracteresInvalidos = /[^a-z ,.ñ\n]/gi;

  if (caracteresInvalidos.test(caracter.value)) {
    caracter.value = caracter.value.replace(caracteresInvalidos, "");
  }
}

// Fin

// Descripción

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

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Extras:
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

// La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
// En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
// En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
// Por fin, en la columna Concluido estarán los elementos ya concluidos.
// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

// Desencripta nuestro mensaje secreto!

// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

// Buen proyecto!
