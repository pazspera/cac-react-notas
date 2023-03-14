/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Batman & Robin";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1999;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;
// nuevaResta = NaN === 5; no era NaN sino 10
// nuevaResta = false
console.log(nuevaResta);

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = null * 4 === 40;
// nuevaMultiplicacion = 4 === 40;
// nuevaMultiplicacion = false
console.log(nuevaMultiplicacion);

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;
// nuevoModulo = 1 === null;
// nuevoModulo = false;
console.log(nuevoModulo);

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
console.log(devolverString("hola"));

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
console.log(suma(2, 3));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
console.log(resta(10, 3));

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}
console.log(multiplica(2, 3));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
console.log(divide(30, 3));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  /* if(x === y) {
    return true
  } else {
    return false
  } */

  return x === y ? true : false;
}
console.log(sonIguales(3, "tres"));
console.log(sonIguales("allo", "allo"));

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  /* if(str1.length === str2.length) {
    return true;
  } else {
    return false
  } */
  return str1.length === str2.length ? true : false;
}
console.log(tienenMismaLongitud("auto", "hola"));
console.log(tienenMismaLongitud("manzana", "hay"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  /* if (num < 90) {
    return true
  } else return false */
  return num < 90 ? true : false;
}
console.log(menosQueNoventa(45));
console.log(menosQueNoventa(450));
console.log(menosQueNoventa(40));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50 ? true : false;
}
console.log(mayorQueCincuenta(15));
console.log(mayorQueCincuenta(55));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log(obtenerResto(25, 5));
console.log(obtenerResto(25, 3));
console.log(obtenerResto(30, 7));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0 ? true : false;
}
console.log(esPar(25));
console.log(esPar(22));
console.log(esPar(0));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 !== 0 ? true : false;
}
console.log(esImpar(25));
console.log(esImpar(20));
console.log(esImpar(0));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}
console.log(elevarAlCuadrado(3));
console.log(elevarAlCuadrado(4));
console.log(elevarAlCuadrado(5));

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
}
console.log(elevarAlCubo(2));
console.log(elevarAlCubo(3));
console.log(elevarAlCubo(4));

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}
console.log(elevar(2, 3));
console.log(elevar(3, 5));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}
console.log(redondearNumero(6.5));
console.log(redondearNumero(6.49));
console.log(redondearNumero(6.99));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}
console.log(redondearHaciaArriba(6.1));
console.log(redondearHaciaArriba(6.5));
console.log(redondearHaciaArriba(7.1));

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());

function esPositivo(num) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  return num === 0 ? false : num > 0 ? "Es positivo" : "Es negativo";
}
console.log(esPositivo(0));
console.log(esPositivo(-1));
console.log(esPositivo(3));
console.log(esPositivo(0.5));
console.log(esPositivo(-0.5));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return `${str}!`;
}
console.log(agregarSimboloExclamacion("hola"));
console.log(agregarSimboloExclamacion("Paz"));
console.log(agregarSimboloExclamacion("Dos palabras"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return `Soy ${nombre} ${apellido}`;
}
console.log(combinarNombres("Pablo", "Gomez"));
console.log(combinarNombres("Bruce", "Wayne"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}!`;
}
console.log(obtenerSaludo("Paz"));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}
console.log(obtenerAreaRectangulo(3, 2));

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}
console.log(retornarPerimetro(3));

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;
}
console.log(areaDelTriangulo(3, 9));
console.log(areaDelTriangulo(6, 11));

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2;
}
console.log(deEuroAdolar(3));
console.log(deEuroAdolar(10));
console.log(deEuroAdolar(50));

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  return letra.length > 1 || typeof letra !== "string" ? "Dato incorrecto" : letra.match(/[aeiouáéíóúöüàèìòù]/gi) ? "Es vocal" : "Dato incorrecto (consonante)";
}
console.log(esVocal("aa"));
console.log(esVocal("a"));
console.log(esVocal("n"));
console.log(esVocal(1));
console.log(esVocal("A"));
console.log(esVocal("Á"));
console.log(esVocal("ö"));
