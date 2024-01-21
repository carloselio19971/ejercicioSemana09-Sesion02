###¿Que son los Prototype?
En javascript cada varaible de tipo de datos tiene un padre el cual contiene metodos:
String
Number
Boolean

String
El propotipo de tipo String tiene las siguiente propiedades

.lenght (calcular el tamañao de una cadena)
new String(para crear un nuevo objeto tipo cadena)
ToLowerCase Transforma un cadena a minusucla
ToUpperCase Transforma una cadena a mayuscula
.trim Borra los espacio en blanco

Number
El protipo number tiene las siguientes propiedades


toFixed() (formatea decimales )
Math.round (redondea un numero)
Number.parseInt (transforma una cadena a número)
isInteger valida (valida si el tipo de dato es numero)

Arrays
El protipo Array tiene las siguientes propiedades


.lenght (me muestra el tamañao del arreglo)

Otros
Typof me indica el tipo de datos
Los ejemplo se encuentra dentro del archivo app.js

Arreglos

Son un tipo de datos que nos permite almacenar multiples valores en una sola variable, se recomienda que los arreglo sean del mismo tipo de dato, pero tambien existen arreglos mixtos

Indices
Cada arreglo con tiene elementos y cada elemento tiene un indice que empieza desde 0

Push
Nos permite agregar un elemento al final de nuestro arreglo

Pop
Nos permite eliminar el ultimo elemento de nuestro arreglo

Objetos Literal
Los objetos son estructuras de datos nos permiten agregar datos y guardarlos en una sola variable

Los objetos tiene una declaracion y tiene una estructura llave valor similar en css

En el archivo js se pone un ejemplo de un objetos de cursos

Mostrar Info
Para mostra la informacion un objeto solo tiene que llama a la variable y colocar un punto(.) y acceder a su propiedad

Agregar
Para agregar un propiedad se debe colocar en nombre del objeto seguido un . y la nueva propiedad con su valor

Quitar
Para quita un propiedad se usa la palabra reservada delete

Destrucutring
Nos permite separar en variables un objeto se usa { }

This
La palabra reservada this nos permite acceder a la variables que encuentra en el mismo objeto

Unir Objetos
Para unir objetos se el prototipe Object.assign y se le pasa los objetos a unir

Funciones
Son bloques de codigo que se puede encapsular y poder se reutilizado en nuestros programas (reutitilizables)

Funciones Declarativas
Se crean usan la palabra reservad function ejemplo function sumarnumeros(a,b) , el principal problema de este tipo es funciones es que pueden ser llamadas antes de ser creadas por el concepto de hoisting en javascript

Funciones de Expresion
Esta funciones son asignadas a una variable y a diferencia de las declarativas , no pueden ser llamadas antes de ser creadas por lo es recomendable utilizarlas que asi evitamos caer errores

Invocacion
Para llamar a la funciones solo se necesita escribir el nombre de la variable y si esta dentro de un objeto ingresar al objeto y colocar la el punto .

Comunicacion Entre Funciones
Las funciones pueden comunicarse entre si, se puede colocar funciones dentro de las funcions y poder llamarse y utlizarse

Arrow Function
Es una forma mas concisa y breve de escribir funciones se utiliza => asi evitamos colocar function y podemos colocar =>