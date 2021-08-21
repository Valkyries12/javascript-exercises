const removeFromArray = function(arr, ...palabras) {
    //verificar si esta la palaabra en el array
    return arr.filter(indice => indice != palabras.filter(palabra => palabra == indice))
    //si está la palabra verificar en cual indice
    //quitar el indice del array
    //retornar el nuevo array
};

removeFromArray(["perro", "gato", "pajaro"], "perro", "gato");

module.exports = removeFromArray;
