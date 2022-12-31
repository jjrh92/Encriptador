const textoEntrada = document.getElementById ("textoEntrada");
const munieco = document.getElementById ("munieco");
const Rectangle1_texto1 = document.getElementById ("Rectangle1_texto1");
const Rectangle1_texto2 = document.getElementById ("Rectangle1_texto2");
const Frame5 = document.getElementById ("Frame5");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const vocalesEncriptar = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat","á":"ai", "é":"enter", "í":"imes", "ó":"ober", "ú":"ufat","à":"ai", "è":"enter", "ì":"imes", "ò":"ober", "ù":"ufat"};
const vocalesDesencriptar = {"ai":"a", "enter":"e", "imes":"e", "ober":"o", "ufat":"u"};
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
        let textoEncriptado = textoMinusculas.replace(/[aeiouáéíóúàèìòù]/g, clave => vocalesEncriptar[clave]);
        textarea.value = textoEncriptado;
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append(textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copiar";
        Frame5.append(botonCopiar);
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

        alert ("No hay texto para desencriptar o se ingresó un valor numerico.");
        window.location.reload();

    } else {

        RemoverDefault ();
        let textoDesencriptado = textoMinusculas.replace(vocalesDesencriptar, /[aienterimesoberufat]/g);
        textarea.value = textoDesencriptado;
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append(textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copiar";
        Frame5.append(botonCopiar);
        botonEncriptar.innerText = "Desencriptación Exitosa!";


        botonCopiar.onclick = function () {

            let textoCopiado = textoDesencriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Texto copiado a portapapeles!";

        }

    }

};

botonDesencriptar.onclick = () => {

    Desencriptar();

};

botonEncriptar.onclick = () => {

    Encriptar();

};

// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
