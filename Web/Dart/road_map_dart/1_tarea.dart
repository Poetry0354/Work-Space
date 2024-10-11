/*
 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado. LISTO
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...). LISTO
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */

//! DESAROLLO.
//* Y este es el link de la web oficial de dart: https://dart.dev/ 
// Este es un comentario en dart.
/*
Este es en varias lineas 
*/

//* Variable y Constante.
/*
En dart antes de ver el tema de las variables y como el lenguaje lo maneja... 
Tenemos que tener en cuenta que, en Dart, tiene una función principal que va a ejecutar todo el codigo
que tengamos, es como una función global a todo el codigo que trabajemos...
*/
//*Ejemplo:
void main () { // Esa función que tenemos es un punto de entrada a la apliación que trabajemos, desde aca Dart comienza a ejecutar.
  print("Hello people");
}
//! Al tener Void, no retorna valor, solo ejecuta el codigo que tenga adentro.
//? Dentro de Main podemos poner un parametro que es opcional...
/* De tipo "List<String>": Este parámetro permite recibir argumentos de línea de comandos cuando ejecutas 
tu aplicación. Esto es útil para aplicaciones que requieren entradas del usuario o configuraciones al inicio.
*Luego lo veremos con más detalle ;)
*/

//?Variables y Constantes.
//Tenemos var, en esta Dart va inferir que tipo de varible le estamos pasando.

var name = 'Anny <3'; //NOTE: En este caso Dart, infiere que es una variable tipo "string", esto lo hace segun el valor que pongamos.

dynamic valor = 5; //NOTE: En este caso el valor puede cambiar luego... tambien se puede usar Object.
Object home = 'casa';

String names = 'Anny Sofia'; //NOTE: Podemos tambien especificar exactamente el tipo. Al especificar mejoramos la seguridad y claridad.

//? Constantes.







