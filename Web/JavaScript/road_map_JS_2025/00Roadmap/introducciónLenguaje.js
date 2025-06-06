/* La idea de este Roadmap es que desarrollemos las habilidades necesarias dentro del lenguaje seleccionado y la logica en si misma.
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */

// Sitio web oficial de JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript

// Primera parte del ejercicio: URL del sitio web oficial del lenguaje
// Posd: En JS los comentarios se pueden escribir de dos formas... de una línea o varias (una linea como esta es con //).
/*
 * Y este es un comentario de varias lineas, cada uno de estos
 * Tiene distintos objetivos y usos, pero en general Cumplen con la función de una
 * Documentación interna en el codigo, para comprender mejor el flujo del codigo...
 */

const nombreLenguaje = "JavaScript"; // Definimos una constante con el nombre del lenguaje, se usa const
let saludo = "Hola"; // Creamos una variable que puede cambiar con let

// Tipos de datos primitivos en JavaScript

// Cadenas de texto / Strings
/*
 * En JS las cadenas de texto se pueden manejar de 3 formas, con ("", '', ``)
 * como caracteristica especial, cuando se usa `` dentro de las cadenas de texto, permite incrustar variables,
 * de manera directa en la cadena de texto.
 * */

let cadenaTexto = "¡Hola, mundo!"; // String con comillas dobles
let cadenaTexto2 = "¡Hola, mundo!"; // String con comillas simples
let cadenaTexto3 = `¡Hola, ${nombreLenguaje}!`; // String con template literals (las comillas invertidas `` se llaman template literals)

console.log(cadenaTexto3); // Imprime: ¡Hola, JavaScript!

// Numbers / Números.
// En JavaScript, los números pueden ser enteros o de punto flotante (decimales). Hasta negativos (-5)
// En JavaScript, no hay distinción entre enteros y flotantes, todos son del tipo "number".

let edad = 30; // Un número entero
let precio = 99.99; // Un número con decimales
let cantidad = -5; // Un número negativo

let total = precio * 2;

console.log(total); // Imprimirá 199.98

//Booleanos (True/False)
// En el caso de los Booleanos (true/false), en JavaScript se representan con las palabras clave true y false.
// Son la base de las condiciones en JavaScript, permitiendo controlar el flujo del programa. (Y de la logica en si). Por ejemplo en los if...

let esAlto = true; // Un booleano verdadero
let esBajo = false; // Un booleano falso

console.log(esAlto); // Imprimirá true

// Undefined (Indefinido) no se le a asingnado un valor.
let direccion; // Una variable declarada pero sin valor asignado

console.log(direccion); // Imprimirá undefined ya que no se le a dado ningun valor.

// Null (Nulo) se le asigna un valor nulo.
// En JavaScript, null es un valor especial que indica la ausencia intencional de cualquier valor u objeto.
// Es útil para indicar que una variable no tiene un valor asignado, pero se espera que tenga uno en el futuro.
// La diferencia con Undefined es que null se asigna explícitamente, mientras que undefined significa que la variable no ha sido inicializada.

let autoSeleccionado = null;

// Más adelante en el código, podrías asignarle un objeto
// autoSeleccionado = { marca: "Toyota", modelo: "Corolla" };

// Symboll en especial es un tipo que es más nuevo y avanzado... Cada uno de ellos es unico y inmutable.
// Su finalidad es crear identificadores únicos para propiedades de objetos.

let idUnico = Symbol("id"); // Crea un símbolo único con una descripción opcional
let idOtro = Symbol("id"); // Otro símbolo con la misma descripción

console.log(idUnico === idOtro); // Imprimirá false, ya que cada símbolo es único

let usuario = {
  nombre: "Diego",
  [idUnico]: "12345", // Usando el símbolo como clave de propiedad
};

console.log(usuario[idUnico]); // Imprimirá "12345"

// Otro que es nuevo y especial es BigInt, que permite trabajar con enteros de gran tamaño.
/*
 * BigInt es un tipo de dato que se usa para Claro. Trabajar con números enteros muy grandes,
 * más allá del límite de los números enteros normales (`Number.MAX_SAFE_INTEGER`, que es 2^53 - 1).
 * * Se representa con el sufijo `n` al final del número o con el constructor `BigInt()`.
 * Segun la documentación estos no se pueden trabajar con Math dentro de JS y no puede ser mezclado con Numbers normales.
 * en operaciones, para hacerlo tiene que ser convertidos al mismo tipo (Esto ultimo no se recomienda hacerlo muchas veces ya que se pierde presición)
 * */

const grande = 1234567890123456789012345678901234567890n;
const otro = BigInt("9007199254740993");

const suma = grande + otro; // OK

const num = 10;
// const error = grande + num; // Error: no se puede mezclar BigInt y Number

const correcto = grande + BigInt(num); // OK

// Por ultimo, los objetos son estructuras que pueden contener múltiples valores y propiedades.
// Los objetos son una parte fundamental de JavaScript y se utilizan para agrupar datos relacionados.
// Pueden contener propiedades (atributos) y métodos (funciones asociadas al objeto).
// Se definen utilizando llaves `{}` y pueden contener pares clave-valor.
let persona = {
  nombre: "Diego",
  edad: 20,
  estatura: 1.7,
  esEstudiante: true,
};
