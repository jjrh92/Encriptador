// Inicio

const logo = document.getElementById ("logo");
const textoEntrada = document.getElementById ("textoEntrada");
const munieco = document.getElementById ("munieco");
const Rectangle1_texto1 = document.getElementById ("Rectangle1_texto1");
const Rectangle1_texto2 = document.getElementById ("Rectangle1_texto2");
const Frame5 = document.getElementById ("Frame5");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const textarea = document.createElement ("textarea");
const botonCopiar = document.createElement ("button");

function RemoverDefault () {

    munieco.remove ();
    Rectangle1_texto1.remove ();
    Rectangle1_texto2.remove ();

}

function Encriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas || textoMinusculas == (/[áéíóúàèìòù|°¬\^`=,.()&!#$%'¿?!¡*<>@-]/g)) {

        alert ("No hay texto para encriptar.");

    } else {

        RemoverDefault ();
        let textoEncriptado = textoMinusculas.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textarea.value = 'El texto encriptado es: '+'"' +textoEncriptado+'".';
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append (textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copiar";
        Frame5.append (botonCopiar);
        botonEncriptar.innerText = "Encriptación Exitosa!";

        botonCopiar.onclick = function () {
            
            let textoCopiado = textoEncriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Texto copiado a portapapeles!";

        }

    }

}

function Desencriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para desencriptar.");

    } else {

        RemoverDefault ();
        let textoDesencriptado = textoMinusculas.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        textarea.value = 'El texto desencriptado es: '+'"' +textoDesencriptado+'".';
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append (textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copiar";
        Frame5.append (botonCopiar);
        botonDesencriptar.innerText = "Desencriptación Exitosa!";


        botonCopiar.onclick = function () {

            let textoCopiado = textoDesencriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Texto copiado a portapapeles!";

        }

    }

};

botonEncriptar.addEventListener ("click", Encriptar);
botonDesencriptar.addEventListener ("click", Desencriptar);

window.addEventListener('DOMContentLoaded', () => {

    logo.onmouseenter = () => {
    logo.src = "logo2.svg"
    };
        
    logo.onmouseleave = () => {
        logo.src = "logo.svg"
    };

});

// Solamente se admite el abecedario en minusculas de la a hasta la z.
// A excepcion de la coma, el punto y nueva linea (parrafo).

function CambiarCarsInvalidos (caracter) {

    const caracteresInvalidos = /[^a-z ,.\n]/gi; 
  
    if (caracteresInvalidos.test(caracter.value)) {

        caracter.value = caracter.value.replace(caracteresInvalidos, "");

    }
};

// Fin