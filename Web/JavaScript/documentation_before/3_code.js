// realizar operaciones de entrada y salida de manera más sencilla
const readline = require('readline');

// Creamos una interfaz de lectura para interactuar con la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Objeto para almacenar los contactos
const agenda = {}; // Cada contacto debe tener un nombre y un número de teléfono. // Global

// Función para mostrar el menú de operaciones
function mostrarMenu() {
  console.log('\n** Agenda de Contactos **');
  console.log('1. Buscar contacto');
  console.log('2. Insertar contacto');
  console.log('3. Actualizar contacto');
  console.log('4. Eliminar contacto');
  console.log('5. Mostrar contacto');
  console.log('6. Salir');
}

//1. Función para buscar un contacton
function buscarContacto() {
  rl.question(
    'Ingrese el nombre o número de teléfono del contacto a buscar: ',
    (entrada) => {
      // Verificar si la entrada coincide con un nombre
      const contactoPorNombre = agenda[entrada];

      // Verificar si la entrada coincide con un número de teléfono
      const contactoPorTelefono = Object.entries(agenda).find(
        ([nombre, telefono]) => telefono === entrada
      );

      if (contactoPorNombre) {
        console.log(`Teléfono de ${entrada}: ${contactoPorNombre}`);
      } else if (contactoPorTelefono) {
        console.log(
          `Nombre de la persona con el teléfono ${entrada}: ${contactoPorTelefono[0]}`
        );
      } else {
        console.log(`Contacto ${entrada} no encontrado.`);
      }

      mostrarMenu();
      seleccionarOperacion();
      console.log('\n Viendo si entran los datos:', agenda);
    }
  );
}
//2. Insertar un conctato
function insertarContacto() {
  rl.question('Ingrese el nombre del contacto: ', (nombre) => {
    rl.question('Ingrese el número de teléfono: ', (telefono) => {
      if (!isNaN(telefono) && telefono.length <= 11) {
        agenda[nombre] = telefono;
        console.log(`Contacto ${nombre} insertado con éxito.`);
      } else {
        console.log(
          'Número de teléfono no válido. Debe ser numérico y tener hasta 11 dígitos.'
        );
      }
      mostrarMenu();
      seleccionarOperacion();
      console.log('\n Viendo si entran los datos:', agenda);
    });
  });
}
 //3. actualziar contacto./ isNaN:Is Not a Number(No es un número)
function actualizarContacto() {
  rl.question('Ingrese el nombre del contacto a actualizar: ', (nombre) => {
    if (agenda[nombre]) {
      rl.question('Ingrese el nuevo número de teléfono: ', (telefono) => {
        if (!isNaN(telefono) && telefono.length <= 11) {
          agenda[nombre] = telefono;
          console.log(`Contacto ${nombre} actualizado con éxito.`);
        } else {
          console.log(
            'Número de teléfono no válido. Debe ser numérico y tener hasta 11 dígitos.'
          );
        }
        mostrarMenu();
        seleccionarOperacion();
      });
    } else {
      mostrarMenu();
      seleccionarOperacion();
      console.log('\n Viendo si entran los datos:', agenda);
    }
  });
}
//4. Eliminar conctto
function eliminarContacto() {
  rl.question('Ingrese el nombre del contacto a eliminar: ', (nombre) => {
    if (agenda[nombre]) {
      delete agenda[nombre];
      console.log(`Contacto ${nombre} eliminado con éxito.`);
    } else {
      console.log(`Contacto ${nombre} no encontrado.`);
    }
    mostrarMenu();
    seleccionarOperacion();
    console.log('\n Viendo si entran los datos:', agenda);
  });
}
//5.Mostrar a los contactos
function mostrarTodosLosContactos() {
  console.log('\n** Todos los contactos **');
  for (const [nombre, telefono] of Object.entries(agenda)) {
    console.log(`${nombre}: ${telefono}`);
  }
  mostrarMenu();
  seleccionarOperacion();
  console.log('Viendo si entran los datos:', agenda);
}
//6. Función para seleccionar la operación
function seleccionarOperacion() {
  rl.question('Seleccione una operación (1-6): ', (opcion) => {
    switch (opcion) {
      case '1':
        buscarContacto();
        break;
      case '2':
        insertarContacto();
        break;
      case '3':
        actualizarContacto();
        break;
        case '4':
        eliminarContacto();
        break;
        case '5':
        mostrarTodosLosContactos();
        break;
        case '6':
        console.log('Saliendo del programa.');
        rl.close();
        break;
        default:
        console.log('Opción no válida. Inténtelo de nuevo.');
        mostrarMenu();
        seleccionarOperacion();
        break;
    }
  });
}

// Inicio del programa
mostrarMenu();
seleccionarOperacion();