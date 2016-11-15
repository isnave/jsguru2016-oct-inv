function doStuff(...args) {
    // recibir argumentos como array
}

// unir argumentos como array
var array = [1, 2, 3, 4];
var array2 = array.concat([5, 6])
var array3 = [...array, ...array2];
console.log(array3);