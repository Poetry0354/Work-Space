/* 
EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 * */

//Estructura de Datos.

/* Arrays (Arreglos)
Esto nos permite almacenar distintos elementos en una sola variable, (Miro los anteriores codigos)
y acceder a ello mediante el indice de estos mismos, ya que JS los almacena desde el 0. 
Al acceder podemos mirar el valor de estos o en su defecto jugar con ellos, agregando, eliminando
o hasta modificando. (Preferiblemente trabajarlo con let).
*/

let componentes = ["Procesador" , "Memoria RAM" , "Disco Duro" , "Tarjeta Grafica"];
console.log(componentes) //Aca se muestra el array donde tiene estos elementos.

/* 
Como modificar una Array.
Si se necesita cambiar más de un elemento o borrar grupos de items o sustituir valores, el objeto Array de Javascript proporciona algunos métodos que facilitan la tarea

fill ( valor [, desde [, hasta] ]), poner un valor fijo en varios elementos
copyWithin(donde, desde, hasta), copias internas de elementos.
splice(), insertar y/o extraer elementos  
* En este caso lo haremos con push, ya que vamos a subir un nuevo elemento a la Array */
const subir = componentes.push("Fuente de poder"); 
console.log(componentes) // * Aca se muestra el array modificado. 

// En este caso, lo ira agregando al final del array. Pero podemos hacer en un posición especifica tambien.
// * En los arrays para insertar elementos tenemos, "Push", "UnShit", "Concat".
// * Ya usamos Push, ahora tenemos es UnShit que esto lo agrega al principio de la array.

const insertar = componentes.unshift("Gabinete");
console.log(componentes) // * Aca se muestra el array modificado.

//* Concat, esto es para unir más de un array a la vez. Y tambien se pueden clonar Arrays...

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let fechas = dias.concat(meses);
console.log(fechas) // * Aca se muestra el array modificado.

//* Tenemos pop, shift, splice, delete, filter. Son metodos para borrar elementos de la Array. 

//shift, elimina el primero.
const borrar = [1, 2, 3, 4, 5];
borrar.shift();
console.log(borrar) // * Aca se muestra el array modificado.

//Pop, elimina el ultimo elemento.
const borrar2 = [1, 2, 3, 4, 5];
borrar2.pop();
console.log(borrar2) // * Aca se muestra el array modificado

//splice, cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const borrar3 = [1, 2, 3, 4, 5];
borrar3.splice(2, 1);
console.log(borrar3) // * Aca se muestra el array modificado

const splice = ['Hola', 'Que', 'tal', 'estás'];
splice.splice(1, 0, 'bien');
console.log(splice);

//delete, Podemos eliminar la posición del array que queramos, pero nos lo dejará en un valor undefined.
const borrar4 = [1, 2, 3, 4, 5];
delete (borrar4[4]);
console.log(borrar4) // * Aca se muestra el array modificado

//filter, Podemos filtrar el array y devolver únicamente los resultados que queramos.
const animales = ['perro', 'gato', 'oso', 'pájaro', 'hormiga'];
const resultado = animales.filter(animal => animal != 'oso');
console.log(resultado);

//Acceder a una posición
console.log (animales[3])

//Actualización
animales[2] = "caballo"
console.log(animales)

//Ordenación (metodo sort o reverse)
const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
equipos.sort();
console.log(equipos);

equipos.reverse();
console.log(equipos);

// * Objetos en JavaScript.
/*Estas son estructuras que nos permiten almacenar información con palabras clave con el valor 
a asignar. Cada valor esta asosciado a una palabra clave unica. */

const misDatos = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
}
console.log(misDatos) //Acceso al valor del objeto.

// *Nodos
class Nodo {
    constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
    }
    }
    var nodo1 = new Nodo(1);
    var nodo2 = new Nodo(2);
    nodo1.siguiente = nodo2;
    console.log(nodo1.siguiente.valor);


