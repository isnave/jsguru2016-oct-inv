// instalr este paquede de babel
// si no no funciona o no Funciona
// npm install babel-plugin-transform-decorators-legacy --save-dev
function myDecorator(name) {
    return function (target) {
        target.customDecorator = {name};
    }
}

function log(ctor) {
    ctor.loggable = true;
}

function inmutable(param) {
    return function (target, name, descriptor) {
        descriptor.configurable = false;
        Object.defineProperties( target, name, descriptor );
    }
}

@myDecorator( "myDecorador" )
@log()
class A {
    constructor() {
    }

    @inmutable
    get name() {
        return "Israel"
    }

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