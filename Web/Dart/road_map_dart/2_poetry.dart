/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes).
! Termi
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

import '2_estructuras_de_control.dart';
//! DESAROOLLO.

/** 
 * Antes... Ten en cuenta lo siguiente...
 * En dart al igual que en otros lenguajes, hay precedencia de operadores, es como una jerarquia de estos,
 * esto significa que tendran mayor relevancia unos sobre otros, por ende se va a ejecutar de primeras a acomparacion 
 * de los otros. 
 * Ejemplo de precedencia de mayor a menor:]
 * * https://dart.dev/language/operators#operator-precedence-example.
*/
//todo: NOTA: Cuando usamos operadores creamos, expresiones dentro del lenguaje.
void main () {
{ //? OPERADORES ARITMETRICOS.
  //Titulo en la terminal.
  print(" -- -- ARITMETRICOS  -- -- ");
  print("-------------");
  print("Suma --> + ${2 + 3}");
  print("Resta --> - ${66 - 13}");
  print("Negacion --> -expr -${10}");
  print("Multiplicar --> * ${10 * 3}");
  print("Dividir --> / ${2000 / 55}");
  print("Dividir devolviendo un entero --> ~/ ${10 ~/ 3}");
  print("Obtenga el resto de una división entera (módulo) --> % ${555 % 33}");
  print("--------------");
}

{ //? OPERADORES DE COMPARACIÓN.
  /**
** Estos operadores se utilizan para comparar dos valores:
**Igualdad (==): Devuelve true si los operandos son iguales.
**Desigualdad (!=): Devuelve true si los operandos son diferentes.
**Mayor que (>): Devuelve true si el operando de la izquierda es mayor que el de la derecha.
**Menor que (<): Devuelve true si el operando de la izquierda es menor que el de la derecha.
**Mayor o igual que (>=): Devuelve true si el operando de la izquierda es mayor o igual al de la derecha.
**Menor o igual que (<=): Devuelve true si el operando de la izquierda es menor o igual al de la derecha.
   */
  print(" -- -- COMPARACIÓN -- -- ");
  print("------------------");
  print("Igualdad >> ${55 == 55}");
  print("No Igual  >> ${44 != 99}");
  print("Mayor que  >> ${03 > 11} ");
  print("Menor que  >>  ${ 44 < 90}");
  print("Mayor o igual  >>  ${ 33 >= 12}");
  print("Menos o igual  >>  ${6000 <= 2000}");
  print("---------------");
}

{
 //? OPERADORES LOGICOS.
  /**
 ** Estos operadores se utilizan para realizar operaciones lógicas:
* * Y lógico (&&): Devuelve true si ambos operandos son verdaderos.
* * O lógico (||): Devuelve true si al menos uno de los operandos es verdadero.
**  NO lógico (!): Invierte el valor de verdad del operando.
 */
  print(" -- -- LOGICOS -- -- ");
  print("------------------");

  void operadoresLogicos() {
    bool verdadero = true;
    bool falso = false;

    print("Y logico (&&)  >> ${verdadero && falso}");
    print("O logico (||)  >> ${verdadero || falso}");
    print("No logico (!)  >> ${!verdadero}");
  }

  operadoresLogicos();
  print("---------------");
  }

  { //? OPERADORES DE ASIGNACION.
    //Nosotros podemos asignar valores con "=", haceindo que la variable tome al valor que le asigamos, sin importar si ya tenia otro.
    //* Pero cuando a la variable es nula tenemos que usar "??=", es este caso solo vamos asigar si es nula, si no, no.

    print("-------------------------");
    print(" -- -- ASIGNACION -- -- ");
    print("--------------------------");
    int? a;
    int? b = 10;

    a ??= 5; // a es null, entonces se le asigna 5
    b ??= 20; // b ya tiene el valor 10, por lo que no se cambia

    //NOTE: Ademas de esos, tenemos los de asignacion compuesta que van en conjunto con los anteriores. (Especial "=").
    /* 
    * Asignación simple (=): Asigna el valor del operando de la derecha al operando de la izquierda.
    * Suma y asignación (+=): Suma el valor del operando de la derecha al operando de la izquierda y asigna el resultado.
    * Resta y asignación (-=): Resta el valor del operando de la derecha al operando de la izquierda y asigna el resultado.
    * Multiplicación y asignación (*=): Multiplica el valor del operando de la derecha al operando de la izquierda y asigna el resultado.
    * División y asignación (/=): Divide el valor del operando de la izquierda por el operando de la derecha y asigna el resultado.
    * División entera y asignación (~/=): Realiza una división entera y asigna el resultado.
    * Módulo y asignación (%=): Calcula el módulo y asigna el resultado.
    */

    void operadoresDeAsignacionCompuesta() {
    int numero = 10;

    numero += 5; // numero = numero + 5 (numero ahora es 15)
    numero -= 3; // numero = numero - 3 (numero ahora es 12)
    numero *= 2; // numero = numero * 2 (numero ahora es 24)
    numero ~/= 4; // numero = numero ~/ 4 (numero ahora es 6)
    numero %= 3; // numero = numero % 3 (numero ahora es 0)

    print("El valor final de numero es: $numero");
  }

  operadoresDeAsignacionCompuesta();
  }

  { //? OPERADORES BIT A BIT.
  /* 
  Te acuerdas de los puertos en la electronica?, como ADN o XOR? asi mismo funcionan estos operadores logicos.
  * Concepto:
  * En un lenguaje de programación, los operadores bit a bit (también conocidos como operadores bitwise) son primitivas lógicas que permiten manipular los bits individuales 
  * de un número entero. Estos operadores se utilizan para realizar operaciones lógicas y aritméticas sobre los bits de un valor, lo que es útil en muchos casos, como:

  * Mascarado: filtrar o seleccionar bits específicos de un valor.
  * Inversión: invertir el valor de un bit o una serie de bits.
  * Combinación: combinar los valores de dos o más bits en un solo bit.
  * Comparación: comparar los valores de dos o más bits.

  En dart  tenemos los siguientes: 
  & (AND bit a bit): Realiza una operación AND bit a bit. Ejemplo: 5 & 3 da 1.
| (OR bit a bit): Realiza una operación OR bit a bit. Ejemplo: 5 | 3 da 7.
^ (XOR bit a bit): Realiza una operación XOR bit a bit. Ejemplo: 5 ^ 3 da 6.
~ (Complemento bit a bit): Invierte los bits del número. Ejemplo: ~5 da -6.
<< (Desplazamiento a la izquierda): Desplaza los bits a la izquierda. Ejemplo: 5 << 2 da 20.
>> (Desplazamiento a la derecha): Desplaza los bits a la derecha. Ejemplo: 5 >> 2 da 1.
>>> El operador >>> realiza un desplazamiento a la derecha de los bits del número, pero sin preservar el signo. Esto significa que los bits de la izquierda se rellenan 
    con ceros, en lugar de copiar el bit del signo. Es útil cuando se trabaja con números sin signo o se desea manipular bits de forma explícita.
  */

    void operadoresBitABit() {
    int a = 5;
    int b = 3;

    print("----------------");
    print("-- BIT A BIT --");
    print("---------------");

    print("AND bit a bit (&): ${a & b}"); // 1
    print("OR bit a bit (|): ${a | b}"); // 7
    print("XOR bit a bit (^): ${a ^ b}"); // 6
    print("Complemento bit a bit (~): ${~a}"); // -6
    print("Desplazamiento a la izquierda (<<): ${a << 2}"); // 20
    print("Desplazamiento a la derecha (>>): ${a >> 2}"); // 1
    print("Desplazamiento a la derecha sin signo (>>>): ${a >>> 2}"); // 1
  }

  operadoresBitABit();
  }

  { //? OPERADORES DE PRUEBA.

  /*
  Estos son utiles en tiempo de ejecución del programa / aplicación, para verificar tipos...
  Tenemos tres:
      * as : Convierte un objeto a un tipo especifico.
      * is : Comprueba si un objeto es de un tiempo especifico.
      * is! : Verifica que no sea de un tiempo especifico.
   */
    print("-----------------");
    print("---DE PRUEBA----");
    print("------------------");


    void operadoresDePrueba() {
    dynamic objeto = "Hola";

    if (objeto is String) {
      print("El objeto es una cadena: $objeto");
    }

    if (objeto is! int) {
      print("El objeto no es un entero");
    }

    try {
      String cadena = objeto as String;
      print("La cadena es: $cadena");
    } catch (e) {
      print("Error al convertir el objeto a una cadena: $e");
    }
  }

  operadoresDePrueba();
  }

  {//? OPERADORES CONDICIONALES.

  /* 
  En dart al igual que en JS (Recientemente), tenemos operadores que que nos permiten evaluar expresiones de una manera más compacta en comparación a las estructuras
  If - Else. 

    * Tenemos el operador ternario (condition ? expr1 : expr2): Es como una alternativa a if - else.
      condition: Es una expresión booleana que evalúa a true o false.
      expr1: Es la expresión que se evalúa y cuyo valor se devuelve si condition es true.
      expr2: Es la expresión que se evalúa y cuyo valor se devuelve si condition es false.
    
    todo: Es bueno cuando queremos verificar una expresión simple que solo requeria devolver un valor, esto se puede hacer en una sola linea de codigo... 
    ! Para casos donde es más complejo, es mejor usar las estructuras de control para que se mantenga legible el codigo. Para logica más compleja.
  */

  // * condition ? expr1 : expr2
  var isPublic = true;
  var visibility = isPublic ? 'public' : 'private'; //! Si es verdadera entonces visibility se establece en "public" si no, en "private".

    /* 
      * Tenemos el operador de coalescencia nula (expre1 ?? expre2). Para verificar si la expresión es nula o no (null).
      expr1 ?? expr2.
      Si expr1 no es null, devuelve su valor.
      Si expr1 es null, evalúa y devuelve el valor de expr2.
    */

    var name = null;
    String playerName(String? name) => name ?? 'Guest';
    /* 
    La función playerName toma un parámetro name que puede ser null.
    Si name tiene un valor no nulo, la función devuelve ese valor.
    Si name es null, la función devuelve 'Guest'.
    */


    print("--------");
    print("--- CONDICIONALES---");
    print("----------------");

      void funcionConOperadoresCondicionales() {
    int edad = 20;
    String mensaje = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
    print(mensaje);

    String? nombre = "Anny Wife";
    String nombreUsuario = nombre ?? 'Invitado';
    print('El nombre del usuario es: $nombreUsuario');
  }

  funcionConOperadoresCondicionales();
  }

  {//? NOTACIÓN EN CASCADA

    /* 
    Actua como un map o un objeto en javascript, esto nos permite es hacer secuencia de operaciones en un solo objeto, accediendo
    a sus intancias. Esto nos ayuda en que no tenemos que repetir el nombre de la variable muchas veces. Esto a menudo nos evita el proceso
    de crear variables temporales. 
    todo: Es particularmente util cuando nesecitamos configurar muchas propiedades en un objeto o llamar multiples metodos.
    todo: Mirar clases por fuera del main.
    */

    print("-----------");
    print("--- CASCADA ---");
    print("--------------");


    var persona = Persona()
    ..nombre = 'Samuel'
    ..direccion.calle = 'Calle 123'
    ..direccion.ciudad = 'Ciudad Ejemplo';

  print('Nombre: ${persona.nombre}');
  print('Dirección: ${persona.direccion.calle}, ${persona.direccion.ciudad}');

  //* Se pueden anidar otros dentro del mismo :D... Tambien se puede trabajar con Null si lo nesecitamos, accediendo a esas intancias. Cambiando si son nullas, si no, no cambian.

  }
  
  estructurasDeControl();

}

class Direccion {
  String calle = '';
  String ciudad = '';
}

class Persona {
  String nombre = '';
  Direccion direccion = Direccion();
}



