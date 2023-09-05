//Funciones
/*
 Una función de código que realiza una tarea específica, cuando se le llama.
*Cada funció´n de JavaScript en un objeto Función
*/


function saludar() {
    console.log("Hola soy una función");
}
saludar();

/*  Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

//Declarar funciones:
/* 
*La palabra reservada function que nos indica que estamos definiendo una función. 
*El  nombre de la función, dependiendo de la acción a realizar.
*Un par de paréntesis () después del nombre.Puede contener parámetros. En este caso, no tenemos ninguno. 
*Seguido de un juego de llaves (un par) para cerrar nuestro bloque de código.
*Dependiendo de las instrucciones dentro del cuerpo de la función y del propósito de la misma, se determina si la función retorna un valor.
*/

//Llamamos una función y le vamos a almacenar un resultado.
function suma(a, b){
    return a + b;
}
var resultado = suma(5, 3); //Almacenar funcion en una variable
console.log(resultado); //Funcion
/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//Funcion que muestra un mensaje en la consola
function saludar(nombre){
    console.log("Hola, " + nombre + "!");
}
//Llamamos a la función saludar a alguien
saludar("Berenice"); //Imprime el saludo
/*
La función saludar toma un argumento (nombre) y muestra un mensaje en ala consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama.
*/

//Hoisting
/* 

Es fundamenntal en el entendiemiento de la forma en que se ejecuta nuestro código de JS, esto aplica tanto para vairables como para funciones. Como tal, la traduccion de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.

* Yo puedo invocar una función antes de siquiera declararla 
*/

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable =  10;

//Scope = Alcance, hace referencia al alcance de una variable en nuestro código de JS.
/* 
Global : quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código.
*var : no es tan recomendado, por comportamiento de la variable y la poca adaptabilidad.
*let : es preeribe e incuso más segura de utilizar porque además de funcionar de manera global, también puede ser utilizada de manera local.
*const : se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado. 
*/

//Variable local
function funcionConVariableLocal(){
    var mensaje = "Esta es una variable local";
    console.log(mensaje);
}
//funcionConVariableLocal();

//var mensaje = "holis";
//console.log(mensaje);

/* 
* En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. 
*/

//Variable Global
var mensajeGlobal =  "Esta es una variable global";

function funcionConVariableGlobal(){
    console.log(mensajeGlobal);
}
funcionConVariableGlobal(); //la estamos llamando

/*
*En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. 
*/

/////////////////////////////////////////
// Funciones anónimas
////////////////////////////////////////

/*
*Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parámetros en otras funciones.
La duferencia principal de estas funciones es que se declaran sin un nombre.
*/

//function () {
    //console.log("Hola vida");
//}

const saludo = function() {
    console.log("Hola vida");
}
saludo();

//////////////////////////////////////////
// Funciones flecha //
/////////////////////////////////////////

/* 
Una forma más concisa de definir funciones anónimas. Se le llama flecha debido a su sintáxis que utiliza (=>)
Básicamente se trata de reemplazar la palabra function y añadir nuestra función flecha (=>) antes de abrir nuestras llaves.
*/

const resta = (a, b) => a -b;
/* 
*Esta función flecha es una forma más corta de:
const resta  function (a,b){
    return a - b;
}
*/
console.log(resta(5,3)); 






