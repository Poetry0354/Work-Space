"""
EJERCICIO:
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
"""

#Operadores dentro de Python

""" 
    En Python tenemos Operadoes Aritméticos, comparación, lógicos, de asignación, de identidad (son comparativos)
    de pertenencia (ya los veremos mejor) y nivel de Bits (son como especiales).
"""

# Los veremos c:

# Operadores Aritmeticos.
 

"""
 *   `+` (Suma)
    *   `-` (Resta)
    *   `*` (Multiplicación)
    *   `/` (División)
    *   `%` (Módulo - el resto de la división)
    *   `**` (Exponenciación)
    *   `//` (División entera - el cociente de la división, sin decimales)
"""
suma1 = 77
suma2 = 23

print(suma1 + suma2)

resta1 = 50
resta2 = 25

print(resta1 - resta2)

multi1 = 45 
multi2 = 30 

print(multi1 * multi2)

divi1 = 20

divi2 = 2

print(divi1 / divi2)

resto1 = 20 

resto2 = 5

print(resto1 % resto2)

# En el caso de Exponenciación la sintaxis es variable = base ** exponente (Es decir que el primer valor se multiplicara las veces del otro)

print(3 ** 40)

# A Diferencia de /, el operador de Division entera //, es para hacer una division y devolver unicamente la parte entera del cociente.

print(10 // 3)



