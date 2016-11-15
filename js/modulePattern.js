// IIFE
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
(function() {
    // la variable esta dentro del ambito de la function
    var a = 11;

    function doStuff() {}
    class A {}
})();


// Basic modulePattern
// module1 || {} indica que si module1 es undefines se crea un objeto nuevo
// para el caso de que se use en distintos ficheros y podamos pasar la configuradion de un
// fichero a otro fichero1.js tiene un module1 en el dichero2.js tiene otro module1
// pues del 1 al 2 se usa
var module1 = (function(exports) {
    //visible desde fuera
    exports.a = 11;
    // solo interno
    function duStuff() {

    }

    return exports;
})(module1 || {});

// submodulos
var padreModule1 = (function (exports) {

    exports.subModule = exports.sudModule || {};

    return exports;
})(module1 || {});
