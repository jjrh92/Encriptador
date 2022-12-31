const textoEntrada = document.getElementById ("textoEntrada");
const munieco = document.getElementById ("munieco");
const Rectangle1_texto1 = document.getElementById ("Rectangle1_texto1");
const Rectangle1_texto2 = document.getElementById ("Rectangle1_texto2");
const Frame5 = document.getElementById ("Frame5");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const vocales = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat","á":"ai", "é":"enter", "í":"imes", "ó":"ober", "ú":"ufat","à":"ai", "è":"enter", "ì":"imes", "ò":"ober", "ù":"ufat"};
const textarea = document.createElement ("textarea"); // Al crear este elemento fuera del scope de la funcion prevenimos la superposicion del texto.
const botonCopiar = document.createElement ("button"); // Este boton llevara el texto encriptado/desencriptado al portapapeles.

function RemoverDefault () {

    munieco.remove();
    Rectangle1_texto1.remove();
    Rectangle1_texto2.remove();

}

function Encriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para encriptar o se ingresó un valor numerico.");
        window.location.reload();

    } else {

        RemoverDefault ();
        let textoEncriptado = textoMinusculas.replace(/[aeiouáéíóúàèìòù]/g, clave => vocales[clave]);
        textarea.value = textoEncriptado;
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append(textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copiar";
        Frame5.append(botonCopiar);
        botonEncriptar.innerText = "Encriptación Exitosa!";
        // console.log("El texto convertido es " +textoEncriptado+ ".");


        botonCopiar.onclick = function () {

        let textoCopiado = textoEncriptado;
        navigator.clipboard.writeText (textoCopiado);
        // console.log ("El texto copiado es " +textoEncriptado+ ".");
        botonCopiar.innerText = "Texto copiado a portapapeles!";
        }

        
    }

}

botonEncriptar.onclick = () => {

    Encriptar();

};

function Desencriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para desencriptar o se ingresó un valor numerico.");
        window.location.reload();

    } else {

        RemoverDefault ();
        // let textoDesencriptado = textoMinusculas.replace(/[aeiouáéíóúàèìòù]/g, clave => vocales[clave]);
        textarea.value = textoDesencriptado;
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append(textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copiar";
        Frame5.append(botonCopiar);
        botonDesencriptar.innerText = "Desencriptaciòn Exitosa!";
        // console.log("El texto convertido es " +textoEncriptado+ ".");


        botonCopiar.onclick = function () {

        let textoCopiado = textoDesencriptado;
        navigator.clipboard.writeText (textoCopiado);
        // console.log ("El texto copiado es " +textoDesencriptado+ ".");
        botonCopiar.innerText = "Texto copiado a portapapeles!";
        }

        
    }
    
};

botonDesencriptar.onclick = () => {

    Desencriptar();

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
