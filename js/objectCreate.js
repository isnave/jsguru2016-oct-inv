var Base = {};

//objeto vacio no tiene tostring NADA
//solo lo que yo defina 
var obj2= Object.create(null);

var obj = Object.create(Base, {
    name: {
        value: "hola esto es el descriptor",
        writeble: false
    },
    doStuff: {
        value: function() {

        },
        enumerable: false
    }
});

// igual al anterior a la hora de hacerlo
// ya que el Object.create termina llamando
// a este
Object.defineProperties(obj, name, {
    value: "adios",
    enumerable: false
});

var getAllPropertiesDescriptor = Object.getOwnPropertyDescriptors(obj);

// aqui no saldran los  que esten enumerable a false
for (var variable in obj) {
    if (object.hasOwnProperty(variable)) {

    }
}

function controllerParaAngular($scope) {
    Object.defineProperty($scope, "calculates", {
        get: function() {
            return "nombre " + " apellido";
        }
    })
}
