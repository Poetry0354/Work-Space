//? Aca vendran las estructuras de control en dart (que son iguales a JS :D).
void estructurasDeControl () {
  print("Aca mostraremos las estructuras de control");

  //Condicionales.
  //? if, if - else, switch

  //! Variables con las que vamos a trabajar.

  int years = 20;
  int grados = 30;
  String marca_pc = "Asus";

  //! if.
  void caso_uno () {
    if (years <= 30) {
    print("No puede ser");
  }
  }

  print("--------------");
  print("--- Con if ---");
  print("---------------");
  caso_uno();

  //! if - else.
  void caso_dos () {
    if (grados == 30) {
      print("Que calor");
    } else {
      print("Que frio");
    }
  }
  print("--------------");
  print("--- if - else ---");
  print("--------------");
  caso_dos();

  //! Swicht.
  void caso_tres () {
      switch (marca_pc) {
        case 'Asus':
          print("Mi pc toda gonita");
          break;
        case 'Hp':
          print("Que feo");
          break;
        default:
          print("Un compu");
      }
  }
  print("------------");
  print("--- Swicht ----");
  print("-------------");
  caso_tres();
}