class A {
    constructor() {
        this._name = "hola";
    }
    get name() {
        return `${this._name}!`;
    }

    set name(value) {
        this._name = value;
    }
}

var a = new A();
var getName = a.name;

//Herencia
class B extends A {

}


function c() {}
C.prototype = Object.create(A.prototype);

//definir
var obj = {};
Object.defineProperty(obj, "x", {
        get: () => "hey";
    }
);
