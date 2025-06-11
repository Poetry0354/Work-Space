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
 * */

// Desarrollo del ejercicio.

/* 
* En JS, los operadores se dividen en varias categorías:
* Operadores de asignación
Operadores de comparación
Operadores aritméticos
Operadores bit a bit
Operadores lógicos
Operadores de cadena
Operador condicional (ternario)
Operador coma
Operadores unarios
Operadores relacionales

Cada uno con sus usos y objetivos.
 * */

// Operadores de asignación.

let asignacion = 10; // Asignación simple (se hace con el =)

let totalPer = 50;

totalPer += 5; // Este es de Asignación de adición, es sumar un valor a una variable ya declarada y definida. (se puede usar con Strings)

console.log(totalPer); // Imprime: 55

totalPer -= 5; // Asignación de sustracción, resta un valor a una variable ya declarada y definida.

console.log(totalPer); // Imprime: 50

totalPer *= 2; // Asignación de multiplicación

console.log(totalPer); // Imprime: 100

totalPer /= 2; // Asignación de división

console.log(totalPer); // Imprime: 50 por que es 100/2

totalPer %= 2; // Asignación de residuo (resto de la división)

console.log(totalPer); // Imprime: 0 por que 50%2 es 0

/*
 * Estos son algunos de asignación, todavia faltan otros más pero podemos consultar a la documentación ;)
 * */

/*
 * Operadores de comparación.
 * Un operador de comparación compara sus operandos y devuelve un valor lógico en
 * función de si la comparación es verdadera (true) o falsa (false).
 * Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos.
 * Cabe decir que si son dos tipos distintos, JS los intentara convertir en tipos iguales apropiados para la comparación.
 * Los unicos donde no se aplica es con "=== y !==". Ya que son estrictas de igualdad y desigualdad.
 * */

let dia = 5; // Por ejemplo, el día de la semana (1-7)

dia == 6; // Igualdad (no estricta) - Compara si dia es igual a 5, devuelve true o false.

console.log(dia == 6); // Imprime: false

console.log(dia != 6); // Desigualdad (no estricta) - Compara si dia es distinto a 6, devuelve true o false.

console.log(dia === 5); // Igualdad estricta - Compara si dia es exactamente igual a 5, devuelve true o false. Tambien mira si son del mismo tipo...

console.log(dia !== 5); // Desigualdad estricta - Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.

console.log(dia > 4); // Mayor que - Compara si dia es mayor que 4, devuelve true o false.

console.log(dia < 6); // Menor que - Compara si dia es menor que 6, devuelve true o false.

console.log(dia >= 5); // Mayor o igual que - Compara si dia es mayor o igual a 5, devuelve true o false.

console.log(dia <= 5); // Menor o igual que - Compara si dia es menor o igual a 5, devuelve true o false.

/*
 *  Operadoes Aritméticos.
 *
 *  Se utilizan para llevar a cabo operaciones matemáticas básicas como la
 *  adición, resta, multiplicación, división, módulo (resto), exponenciación e incremento/decremento.
 *  Toman valores numéricos (literales o variables) como operandos y devuelven un único valor numérico como resultado.
 * */

let a = 10;
let b = 5;

console.log(a + b); // Suma - Imprime: 15

let c = a - b; // Resta - Imprime: 5

console.log(c);

let d = a * b; // Multiplicación - Imprime: 50

console.log(d);

let e = a / b; // División - Imprime: 2

console.log(e);

let f = a % b; // Módulo (resto de la división) - Imprime: 0

console.log(f);

let g = a ** b; // Exponenciación - Imprime: 100000

console.log(g);

let h = a++; // Incremento - Imprime: 11 (a se incrementa después de la operación)

console.log(h);

let i = b--; // Decremento - Imprime: 4 (b se decrementa después de la operación)

console.log(i);

let j = -b; // Negación unaria - Imprime: -4 (cambia el signo de b)

console.log(j);

// En los de Decremento y Incremento, si se pone antes del valor, se incrementa o decrementa antes de la operación.

/*
 * Operadores Bit a Bit.
 * Estos operadores realizan operaciones a nivel de bits en números enteros.
 * * Los operandos se tratan como enteros de 32 bits con signo y los resultados también son enteros de 32 bits.
 * * Los operadores bit a bit incluyen AND (&), OR (|), XOR (^), NOT (~), desplazamiento a la izquierda (<<) y desplazamiento a la derecha (>>).
 * * Estos operadores son útiles para manipular datos a nivel de bits, como en programación de sistemas o criptografía.
 * */

let num1 = 5; // Binario: 00000101
let num2 = 3; // Binario: 00000011

console.log("Valores decimales:");
console.log("num1:", num1);
console.log("num2:", num2);

// AND bit a bit (&)
let resultadoAND = num1 & num2;
console.log("\nAND bit a bit (num1 & num2):", resultadoAND);

// OR bit a bit (|)
let resultadoOR = num1 | num2;
console.log("OR bit a bit (num1 | num2):", resultadoOR);

// XOR bit a bit (^)
let resultadoXOR = num1 ^ num2;
console.log("XOR bit a bit (num1 ^ num2):", resultadoXOR);

// NOT bit a bit (~)
let resultadoNOT = ~num1;
console.log("NOT bit a bit (~num1):", resultadoNOT);

// Desplazamiento a la izquierda (<<)
let resultadoLeftShift = num1 << 1;
console.log("Desplazamiento a la izquierda (num1 << 1):", resultadoLeftShift);

// Desplazamiento a la derecha con signo (>>)
let numNegativo = -10;
let resultadoRightShift = num1 >> 1;
let resultadoNegativoRightShift = numNegativo >> 1;
console.log(
  "Desplazamiento a la derecha con signo (num1 >> 1):",
  resultadoRightShift,
);
console.log(
  "Desplazamiento a la derecha con signo (numNegativo >> 1):",
  resultadoNegativoRightShift,
);

// Desplazamiento a la derecha sin signo (>>>)
let resultadoUnsignedRightShift = num1 >>> 1;
let resultadoNegativoUnsignedRightShift = numNegativo >>> 1;
console.log(
  "Desplazamiento a la derecha sin signo (num1 >>> 1):",
  resultadoUnsignedRightShift,
);
console.log(
  "Desplazamiento a la derecha sin signo (numNegativo >>> 1):",
  resultadoNegativoUnsignedRightShift,
);

/*
 * Operadores Logicos.
 *
 * Los operadores lógicos se utilizan para combinar o invertir valores booleanos (true o false).
 * * Los operadores lógicos más comunes son AND (&&), OR (||) y NOT (!).
 * * Estos operadores son fundamentales en la toma de decisiones y el control de flujo en la programación.
 * * Los operadores lógicos devuelven un valor booleano como resultado.
 * */

// Operadores Lógicos en JavaScript

let verdadero = true;
let falso = false;
let num = 10;
let cero = 0;
let cadena = "Hola";
let cadenaVacia = "";
let nulo = null;

// 1. AND Lógico (&&)
// Devuelve true si ambos operandos son verdaderos.
console.log("\n--- AND Lógico (&&) ---");
console.log("verdadero && falso:", verdadero && falso);
console.log("verdadero && verdadero:", verdadero && verdadero);
console.log("num > 5 && cadena === 'Hola':", num > 5 && cadena === "Hola");
console.log("num > 15 && cadena === 'Hola':", num > 15 && cadena === "Hola"); // Cortocircuito: no evalúa la segunda parte
console.log("cero && cadena:", cero && cadena); // 0 es 'falsy', devuelve 0
console.log("cadena && cero:", cadena && cero); // 'Hola' es 'truthy', devuelve 0 (el segundo operando)

// 2. OR Lógico (||)
// Devuelve true si al menos uno de los operandos es verdadero.
console.log("\n--- OR Lógico (||) ---");
console.log("verdadero || falso:", verdadero || falso);
console.log("falso || falso:", falso || falso);
console.log("num < 5 || cadena === 'Hola':", num < 5 || cadena === "Hola");
console.log("num < 5 || cadena === 'Adios':", num < 5 || cadena === "Adios");
console.log("cero || cadena:", cero || cadena); // 0 es 'falsy', devuelve 'Hola' (el primer 'truthy')
console.log("cadenaVacia || nulo:", cadenaVacia || nulo); // Ambos 'falsy', devuelve 'nulo' (el segundo operando)

// 3. NOT Lógico (!)
// Invierte el valor booleano del operando.
console.log("\n--- NOT Lógico (!) ---");
console.log("!verdadero:", !verdadero);
console.log("!falso:", !falso);
console.log("!num:", !num); // num (10) es 'truthy', !num es false
console.log("!cero:", !cero); // cero (0) es 'falsy', !cero es true
console.log("!cadenaVacia:", !cadenaVacia); // cadenaVacia es 'falsy', !cadenaVacia es true

// 4. Nullish Coalescing Operator (??) - ES2020
// Devuelve el operando de la derecha si el operando de la izquierda es null o undefined.
// De lo contrario, devuelve el operando de la izquierda.
console.log("\n--- Nullish Coalescing Operator (??) ---");
let valorNulo = null;
let valorIndefinido; // undefined
let valorCero = 0;
let valorVacio = "";

console.log(
  "valorNulo ?? 'Valor por defecto':",
  valorNulo ?? "Valor por defecto",
);
console.log(
  "valorIndefinido ?? 'Otro por defecto':",
  valorIndefinido ?? "Otro por defecto",
);
console.log(
  "valorCero ?? 'Valor si es null/undefined':",
  valorCero ?? "Valor si es null/undefined",
); // 0 no es null/undefined
console.log(
  "valorVacio ?? 'Valor si es null/undefined':",
  valorVacio ?? "Valor si es null/undefined",
); // "" no es null/undefined
console.log(
  "false ?? 'Valor si es null/undefined':",
  false ?? "Valor si es null/undefined",
); // false no es null/undefined

// 5. Optional Chaining (?.) - ES2020
// Permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados
// sin tener que validar explícitamente que cada referencia en la cadena es válida.
console.log("\n--- Optional Chaining (?.) ---");

const usuario = {
  nombre: "Ana",
  direccion: {
    calle: "Calle Falsa 123",
    ciudad: "Springfield",
  },
  // contacto: { email: "ana@example.com" } // Propiedad 'contacto' puede estar ausente
};

console.log("usuario.nombre:", usuario.nombre);
console.log("usuario.direccion.ciudad:", usuario.direccion.ciudad);

// Si 'contacto' o 'telefono' no existen, evita un error
console.log("usuario.contacto?.email:", usuario.contacto?.email);
console.log(
  "usuario.direccion?.codigoPostal:",
  usuario.direccion?.codigoPostal,
);

// Uso con métodos (si el método existe)
const objConMetodo = {
  miMetodo: () => "Método existe!",
};
const objSinMetodo = {};

console.log("objConMetodo.miMetodo?.():", objConMetodo.miMetodo?.());
console.log("objSinMetodo.otroMetodo?.():", objSinMetodo.otroMetodo?.()); // No lanza error
