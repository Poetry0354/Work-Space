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
 * - Crea una variable (y una constante si el lenguaje lo soporta). LISTO
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).  LISTO
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!" LISTO 
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
  print("¡Hola Dart!");
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
//* Se llegan a usar dos en las "constantes", final y const.
/** 
 * Estas dos se usan en distintos casos de uso...
 * ? Es decir...  en el caso de "final", se usa cuando queremos que el valor se establezca una vez
 * ? y este no puede cambiar, pero se puede incializar en tiempo de ejecución... 
 */

final String lastName = 'Garcia'; //NOTE: En este caso usamos final para especificar que es constante. Es inmutable.
final Function myFunction = () {
  print('Funcion para el tiempo de ejecución'); 
};
final DateTime now = DateTime.now(); //NOTE: En este caso entonces el valor inicial se le asigna en tiempo de ejecución.
/*Esta constante que nos da Dart, nos permite que una vez asignado el valor... en el tiempo de copilación no puede cambiar, 
  esto evita errores accidentales al intentar cambiar el valor de algo que debe ser inmutable.
*/
//? En el caso de Const... de toda la vida xd. Este debe ser conocido en el mismo tiempo de copilación, siendo una variable unica.

const pi = 03.062023;
const cel = 3104520308; 
//cel = 122346; --> No deja por que es algo inmutable y que se conoce dentro del mismo tiempo de copilación. 

//! Ejemplo general.

  var nombre = 'Samuel'; // var
  String apellido = 'González'; // tipo explícito
  dynamic cualquierCosa = 42; // dynamic

  final year = 2024; // final
  const velocidadDeLaLuz = 299792458; // const

//! Tipos de Datos Primitivos.
/**
 * * Números (int, double)
** Cuerdas (String)
** Booleanos (bool)
** Registros ((value1, value2))
** Listas (List, también conocido como matrices)
** Conjuntos (Set)
** Mapas (Map)
** Runas (Runes; a menudo reemplazado por el characters API)
** Símbolos (Symbol)
** El valor null (Null)
 */

//? Int.
void uno() {
  int age = 25;
  print('Edad: $age');
}
//? Double.
void dos() {
  double price = 19.99;
  print('Precio: \$${price}');
}
//? Bool.
void tres() {
  bool isActive = true;
  print('Está activo: $isActive');
}
//?String.
void cuatro() {
  String name = 'Samuel';
  print('Nombre: $name');
}
//? List.
void cinco() {
  List<int> numbers = [1, 2, 3, 4, 5];
  print('Números: $numbers');
}
//? Map.
void seis() {
  Map<String, int> scores = {'math': 90, 'science': 85};
  print('Puntajes: $scores');
}
//? Set.
void siete () {
  Set<String> uniqueNames = {'Samuel', 'Anny', 'Samuels'};
  print('Nombres únicos: $uniqueNames');
}
//? Null.
void ocho() {
  String? nullableString; // Puede ser null
  print('Valor inicial: $nullableString');
}
//? Rune.
void nueve() {
  String greeting = 'Hola';
  // Obtener la representación en runas del carácter 'H'
  int firstCharCode = greeting.codeUnitAt(0); /**Dado el caso para acceder a un solo carácter en una cadena y obtener su código de unidad
                                              Unicode, debes usar codeUnitAt directamente con int, en lugar de Rune */ 
  //Rune firstChar = greeting.codeUnitAt(0); --> Es teoricamente correcto.
  print('Código de la primera letra: $firstCharCode');
}
//? Symbol.
void diez() {
  Symbol symbol = #miSimbolo; // Crear un símbolo
  print('Símbolo: $symbol');
}
//? Record.
void once() {
  var record = (name: 'Samuel', age: 25); // Definir un registro
  print('Nombre: ${record.name}, Edad: ${record.age}');
}






