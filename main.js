const textoEntrada = document.getElementById ("textoEntrada");
const munieco = document.getElementById ("munieco");
const Rectangle1_texto1 = document.getElementById ("Rectangle1_texto1");
const Rectangle1_texto2 = document.getElementById ("Rectangle1_texto2");
const rectangulo = document.getElementById ("Frame5");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const vocales = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};

function Encriptar () {

    let texto = textoEntrada.value;

    if (texto == undefined || texto == "" || texto == null) {

        alert ("Debe ingresar el texto primero para poder encriptar.");

    } else {

        let textoEncriptado = texto.replace(/[aeiou]/g, clave => vocales[clave]);

        munieco.remove();
        Rectangle1_texto1.remove();
        Rectangle1_texto2.remove();

        const div = document.createElement ("div");
        const textarea = document.createElement ("textarea");

        textarea.innerText = textoEncriptado;
        div.innerHTML = `<textarea class="textoSalida" placeholder="Ingrese el texto aqui" autofocus></textarea>`;
        rectangulo.append(div);
        div.append(textarea);
        console.log (textoEncriptado);

    }

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
