/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
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

{//? OPERADORES LOGICOS.
/**
 ** Estos operadores se utilizan para realizar operaciones lógicas:
* * Y lógico (&&): Devuelve true si ambos operandos son verdaderos.
* * O lógico (||): Devuelve true si al menos uno de los operandos es verdadero.
**  NO lógico (!): Invierte el valor de verdad del operando.
 */
{ //? OPERADORES LOGICOS.
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
  }
}


