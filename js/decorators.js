// instalr este paquede de babel
// si no no funciona o no Funciona
// npm install babel-plugin-transform-decorators-legacy --save-dev
function myDecorator(name) {
    return function (target) {
        target.customDecorator = {name};
    }
}
@myDecorator( "myDecorador" )
class A {
    init() {
        alert( "Iniciado" );
    }
}

A.isModule = true;

//Para por ejemplo si es un modulo lo inicializo con init
var modules = [A];
modules.forEach( clazz=> {
    if (clazz.isModule) {
        var instance = new clazz();
        instance.init();
    }
} );
