# Bienvenidos a mi proyecto!

Hola! Mi nombre es **Julio Reyes**. Este proyecto trata de un **encriptador de texto** a continuación podrá conocer sus funcionalidades y características.


# Descripción

vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada. Las **llaves** de encriptación son las siguientes:

**`La letra "e" es convertida para "enter"`  
`La letra "i" es convertida para "imes"`  
`La letra "a" es convertida para "ai"`  
`La letra "o" es convertida para "ober"`  
`La letra "u" es convertida para "ufat"`**

## Requisitos

- Debe funcionar solo con letras minúsculas  
- No deben ser utilizados letras con acentos ni caracteres especiales  
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:  
`"gato" => "gaitober"`  
`gaitober" => "gato"`

-   La página debe tener campos para  
    inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
-   El resultado debe ser mostrado en la pantalla.

## Extras

- Un botón que **copie** el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del **`ctrl+C`** o de la opción "copiar" del menú de las aplicaciones.

## Mensaje secreto

Desencripta nuestro mensaje secreto!

> fenterlimescimesdaidenters poberr enternfrenterntair enterstenter
> dentersaifimesober y haibenterrlober cobernclufatimesdober cobern
> enterximestober!

### ✔️  Validaciones

-   Captura de texto únicamente en minúsculas
-   Si el texto ingresado fuera en mayúsculas, se convierte automáticamente a minúsculas.
-   No se aceptan números
-   No permite encriptar / desencriptar si el textarea de captura se encuentra vacío.
