"""
¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
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
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
"""

# https://www.python.org/

"""
En Python, podemos usar dos formas para hacer comentarios, si usamos #, es para una sola linea y si usamos "" (pero 3 veces), podemos hacer un docstring,
que es exactamente este comentario SJSJS, que es más de una linea
"""

# En python no tenemos que diferenciar literalmente que tipo de varaible es, python lo detecta segun que valor le vayamos a almacenar.

string = "Hola Soy un String"

string2 = 2

"""
En Python, no hay constantes como tal, los desarrolladores usan una convencion para indicar que esa variable "es una constante".

Más el lenguaje no te va impedir modificar la variable. Es más entender que ciertas variables no se deben modificar, por eso esa convencion.
"""

NUMERO_PI = 3.14

NUMERO_PI = 3.90 # Aca se modifico


# Vamos a ver los datos primitivos

# Tipo de dato: Entero (int)
mi_entero = 42

# Tipo de dato: Flotante (float)
mi_flotante = 3.14159

# Tipo de dato: Cadena de texto (str)
mi_cadena = "Hola, mundo de Python!"

# Tipo de dato: Booleano (bool)
mi_booleano_verdadero = True
mi_booleano_falso = False

# Tipo de dato: NoneType (representa la ausencia de valor)
mi_nulo = None

# Impresión de variables y sus tipos 
print(f"Variable: {mi_entero}, Tipo: {type(mi_entero)}")
print(f"Variable: {mi_flotante}, Tipo: {type(mi_flotante)}")
print(f"Variable: {mi_cadena}, Tipo: {type(mi_cadena)}")
print(f"Variable: {mi_booleano_verdadero}, Tipo: {type(mi_booleano_verdadero)}")
print(f"Variable: {mi_booleano_falso}, Tipo: {type(mi_booleano_falso)}")
print(f"Variable: {mi_nulo}, Tipo: {type(mi_nulo)}")


print("Hola Pythonnnnn")
