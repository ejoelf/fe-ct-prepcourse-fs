/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arreglo = Object.entries(objeto);
  return arreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let cadena = string.split("");
  let enOrden = cadena.sort((a, b) => {
    return a - b;
  });
  let objeto = {};

  for (let i = 0; i < enOrden.length; i++) {
    let caracter = enOrden[i];
    if (objeto[caracter]) {
      objeto[caracter]++;
    } else {
      objeto[caracter] = 1;
    }
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let cadena = string.split("");
  let min = [];
  let may = [];

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == cadena[i].toUpperCase()) {
      may.push(cadena[i]);
    } else {
      min.push(cadena[i]);
    }
  }
  let nuevoString = may.concat(min);
  return nuevoString.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let invertirFrase = frase.split("").reverse().join("");
  let fraseInvertida = invertirFrase.split(" ");
  let fraseFinal = fraseInvertida.reverse().join(" ");
  return fraseFinal;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let aString = numero.toString();
  let separar = aString.split("");
  let invertir = separar.reverse().join("");

  if (aString === invertir) {
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let cadena = string.split("");
  let arreglo = [];

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      arreglo.push(cadena[i]);
    }
  }
  let nuevoString = arreglo.join("");
  return nuevoString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let nuevoArreglo = arrayOfStrings.sort((a, b) => {
    return a.length - b.length;
  });
  return nuevoArreglo;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let nuevoArreglo = [];

  for (let elemento of array1) {
    for (let element of array2) {
      if (elemento === element) {
        nuevoArreglo.push(elemento);
      }
    }
  }
  return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
