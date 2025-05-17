/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

// ============================================================================
// EJEMPLOS DE OPERACIONES CON CADENAS DE CARACTERES EN JAVASCRIPT
// ============================================================================

console.log("=== OPERACIONES BÁSICAS CON STRINGS EN JAVASCRIPT ===");

// Declaración de cadenas
const texto = "Hola, mundo!";
const saludo = "Hola";
const planeta = "mundo";

// 1. Acceso a caracteres específicos
console.log("\n1. Acceso a caracteres específicos:");
console.log(`texto[1]: ${texto[1]}`); // o
console.log(`texto.charAt(1): ${texto.charAt(1)}`); // o
console.log(`texto.charCodeAt(1): ${texto.charCodeAt(1)}`); // Valor Unicode: 111 (o)
console.log(`String.fromCharCode(72): ${String.fromCharCode(72)}`); // 'H'

// 2. Subcadenas
console.log("\n2. Subcadenas:");
console.log(`texto.slice(0, 4): "${texto.slice(0, 4)}"`); // "Hola"
console.log(`texto.slice(-6): "${texto.slice(-6)}"`); // "mundo!"
console.log(`texto.substring(0, 4): "${texto.substring(0, 4)}"`); // "Hola"
console.log(`texto.substr(0, 4): "${texto.substr(0, 4)}"`); // "Hola" (deprecated)

// 3. Longitud
console.log("\n3. Longitud:");
console.log(`texto.length: ${texto.length}`); // 12

// 4. Concatenación
console.log("\n4. Concatenación:");
console.log(`saludo + ", " + planeta + "!": "${saludo + ", " + planeta + "!"}"`);
console.log(`\`${saludo}, ${planeta}!\`: "${`${saludo}, ${planeta}!`}"`); // Template literals
console.log(`saludo.concat(", ", planeta, "!"): "${saludo.concat(", ", planeta, "!")}"`);

// 5. Repetición
console.log("\n5. Repetición:");
console.log(`saludo.repeat(3): "${saludo.repeat(3)}"`); // "HolaHolaHola"

// 6. Recorrido
console.log("\n6. Recorrido:");
console.log("Recorriendo 'ABC':");
for (const char of "ABC") {
    console.log(char);
}

// 7. Conversión a mayúsculas y minúsculas
console.log("\n7. Conversión a mayúsculas y minúsculas:");
console.log(`texto.toUpperCase(): "${texto.toUpperCase()}"`); // "HOLA, MUNDO!"
console.log(`texto.toLowerCase(): "${texto.toLowerCase()}"`); // "hola, mundo!"

// 8. Reemplazo
console.log("\n8. Reemplazo:");
console.log(`texto.replace("mundo", "JavaScript"): "${texto.replace("mundo", "JavaScript")}"`);
console.log(`texto.replace(/o/g, "0"): "${texto.replace(/o/g, "0")}"`); // Reemplaza todas las 'o'
console.log(`texto.replaceAll("o", "0"): "${texto.replaceAll("o", "0")}"`); // ES2021+

// 9. División
console.log("\n9. División:");
console.log('texto.split(","): ', texto.split(","));
console.log('"a-b-c-d".split("-"): ', "a-b-c-d".split("-"));

// 10. Unión (join)
console.log("\n10. Unión (join):");
const array = ["Hola", "mundo"];
console.log(`["Hola", "mundo"].join(", "): "${array.join(", ")}"`);

// 11. Interpolación
console.log("\n11. Interpolación:");
const nombre = "Juan";
console.log(`\`¡Hola, \${nombre}!\`: "${`¡Hola, ${nombre}!`}"`);

// 12. Verificación
console.log("\n12. Verificación:");
console.log(`texto.includes("mundo"): ${texto.includes("mundo")}`); // true
console.log(`texto.startsWith("Hola"): ${texto.startsWith("Hola")}`); // true
console.log(`texto.endsWith("!"): ${texto.endsWith("!")}`); // true

// 13. Eliminar espacios
console.log("\n13. Eliminar espacios:");
const conEspacios = "  hola  ";
console.log(`"  hola  ".trim(): "${conEspacios.trim()}"`); // "hola"
console.log(`"  hola  ".trimStart(): "${conEspacios.trimStart()}"`); // "hola  "
console.log(`"  hola  ".trimEnd(): "${conEspacios.trimEnd()}"`); // "  hola"

// 14. Buscar posición de subcadena/caracter
console.log("\n14. Buscar posición:");
console.log(`texto.indexOf("o"): ${texto.indexOf("o")}`); // 1
console.log(`texto.lastIndexOf("o"): ${texto.lastIndexOf("o")}`); // 9
console.log(`texto.search(/mundo/): ${texto.search(/mundo/)}`); // 6

// 15. Comparar cadenas
console.log("\n15. Comparar cadenas:");
console.log(`"abc" === "abc": ${"abc" === "abc"}`); // true
console.log(`"abc".localeCompare("abd"): ${"abc".localeCompare("abd")}`); // -1 (menor que)

// 16. Convertir a array de caracteres
console.log("\n16. Convertir a array de caracteres:");
console.log(`[...texto]: `, [...texto]);
console.log(`Array.from(texto): `, Array.from(texto));

// 17. Padding (relleno)
console.log("\n17. Padding (relleno):");
console.log(`"5".padStart(3, "0"): "${"5".padStart(3, "0")}"`); // "005"
console.log(`"5".padEnd(3, "*"): "${"5".padEnd(3, "*")}"`); // "5**"

// 18. Match con regex
console.log("\n18. Match con regex:");
console.log(`texto.match(/o/g): `, texto.match(/o/g)); // [ 'o', 'o' ]

// 19. Extraer coincidencias
console.log("\n19. Extraer coincidencias:");
const regex = /[A-Z]/g;
const resultado = [...texto.matchAll(regex)];
console.log(`[...texto.matchAll(/[A-Z]/g)]: `, resultado);

// 20. Normalización Unicode
console.log("\n20. Normalización Unicode:");
const normalizado = "ñ".normalize("NFD");
console.log(`"ñ".normalize("NFD"): `, normalizado);
console.log(`"ñ".normalize("NFD").length: ${normalizado.length}`);

// ============================================================================
// DIFICULTAD EXTRA: ANÁLISIS DE PALABRAS
// ============================================================================

console.log("\n=== DIFICULTAD EXTRA: ANÁLISIS DE PALABRAS ===");

/**
 * Verifica si una palabra es un palíndromo (se lee igual de izquierda a derecha y viceversa)
 * @param {string} palabra - La palabra a verificar
 * @returns {boolean} - true si es palíndromo, false si no
 */
function esPalindromo(palabra) {
    // Normalizar: convertir a minúsculas y eliminar caracteres no alfanuméricos
    const normalizada = palabra.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Comparar la palabra con su versión invertida
    const invertida = normalizada.split("").reverse().join("");
    return normalizada === invertida;
}

/**
 * Verifica si dos palabras son anagramas (contienen exactamente las mismas letras)
 * @param {string} palabra1 - Primera palabra
 * @param {string} palabra2 - Segunda palabra
 * @returns {boolean} - true si son anagramas, false si no
 */
function sonAnagramas(palabra1, palabra2) {
    // Normalizar: convertir a minúsculas y eliminar caracteres no alfanuméricos
    const normalizada1 = palabra1.toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizada2 = palabra2.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Si tienen diferente longitud, no son anagramas
    if (normalizada1.length !== normalizada2.length) return false;
    
    // Ordenar los caracteres y comparar
    const ordenada1 = [...normalizada1].sort().join("");
    const ordenada2 = [...normalizada2].sort().join("");
    
    return ordenada1 === ordenada2;
}

/**
 * Verifica si una palabra es un isograma (ninguna letra se repite)
 * @param {string} palabra - La palabra a verificar
 * @returns {boolean} - true si es isograma, false si no
 */
function esIsograma(palabra) {
    // Normalizar: convertir a minúsculas y eliminar caracteres no alfanuméricos
    const normalizada = palabra.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Crear un Set para detectar caracteres duplicados
    const caracteres = new Set(normalizada);
    
    // Si el tamaño del Set es igual a la longitud de la palabra, no hay duplicados
    return caracteres.size === normalizada.length;
}

// Ejemplos de uso
const ejemplos = [
    { palabra1: "reconocer", palabra2: "sonreír" },
    { palabra1: "amor", palabra2: "roma" },
    { palabra1: "murciélago", palabra2: "computadora" }
];

ejemplos.forEach(({ palabra1, palabra2 }, index) => {
    console.log(`\nEjemplo ${index + 1}:`);
    console.log(`Palabras: "${palabra1}" y "${palabra2}"`);
    
    console.log(`¿"${palabra1}" es palíndromo? ${esPalindromo(palabra1)}`);
    console.log(`¿"${palabra2}" es palíndromo? ${esPalindromo(palabra2)}`);
    
    console.log(`¿"${palabra1}" y "${palabra2}" son anagramas? ${sonAnagramas(palabra1, palabra2)}`);
    
    console.log(`¿"${palabra1}" es isograma? ${esIsograma(palabra1)}`);
    console.log(`¿"${palabra2}" es isograma? ${esIsograma(palabra2)}`);
});

// Ejemplos adicionales específicos
console.log("\nEjemplos adicionales:");
console.log(`¿"Anita lava la tina" es palíndromo? ${esPalindromo("Anita lava la tina")}`);
console.log(`¿"Programador" y "Dora-progam" son anagramas? ${sonAnagramas("Programador", "Dora-progam")}`);
console.log(`¿"Murciélago" es isograma? ${esIsograma("Murciélago")}`);
