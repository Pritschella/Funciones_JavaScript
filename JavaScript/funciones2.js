//Funciones
//Programa para hacer limonada

function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + " Limones");
    let jugoExtraido = cantidad  * 10; //Considerando obtener 10 ml de jugo por cada limón.
    console.log("Se obtuvo " + jugoExtraido + " ml de jugo de limón.");
    return jugoExtraido; //return
}

//Funcion para mezclar el jugo de limón con agua y azúcar.
function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log("Mezclando " + cantidadDeJugo + " ml de jugo de limón con " + cantidadDeAgua + " ml de agua y " +  cantidadDeAzucar + " gramos de azucar");
}

//Función para servir la limonada
function servirLimonada(){
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Funcion principal qu prepare mi limonada
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //Cantidades ficticias de jugo de limón, de agua,  y de azucar
    servirLimonada();
}

//Llamar a la función principal para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(5); //Llamando al programa