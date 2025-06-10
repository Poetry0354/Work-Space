/*
 * Crea un objeto llamado "usuario" con propiedades que representen solo tipos de datos primitivos en JavaScript:
 * - nombre (string)
 * - edad (number)
 * - esEstudiante (boolean)
 * - identificador (symbol)
 * - puntaje (null)
 * - descripcion (undefined)
 *
 * Luego, muestra por consola el tipo de dato de cada propiedad usando typeof.
 */

// Desarrollo de ejercicio práctico
let idCC = Symbol("1014");
let usuario = {
  nombre: "Samuel",
  edad: 19,
  esEstudiante: true,
  [idCC]: "123456789",
  puntaje: null,
  analisis: undefined,
  estudianteNum: 1324354657687980212143n,
};

console.log(`Tipo de dato de nombre: ${typeof usuario.nombre}`); // string
console.log(`Tipo de dato de edad: ${typeof usuario.edad}`); // number
console.log(`Tipo de dato de esEstudiante: ${typeof usuario.esEstudiante}`); // boolean
console.log(`Tipo de dato de identificador: ${typeof usuario[idCC]}`); // symbol
console.log(`Tipo de dato de puntaje: ${typeof usuario.puntaje}`); // object (null is an object in JS)
console.log(`Tipo de dato de analisis: ${typeof usuario.analisis}`); // undefined
console.log(`Tipo de dato de estudianteNum: ${typeof usuario.estudianteNum}`); // bigint

/*
 * Nota: typeof null devuelve "object" debido a un error histórico en JavaScript.
 * Por lo tanto, es importante recordar que null es un valor especial que representa la ausencia de valor, pero su tipo es "object".
 * Otra cosa es que typeof se usa para determinar el tipo de dato de una variable o propiedad en JavaScript.
 * es muy util para depurar y entender el tipo de datos con los que estamos trabajando.
 * */
