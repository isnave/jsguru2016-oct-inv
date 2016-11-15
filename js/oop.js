// orientacion a objetos

function A() {
    this.x = 11;
};

A.prototype = {
    doStuff: function() {
        alert("hola desde oop");
    }
};

var instanceOfA = new A();

instanceOfA.doStuff();

function B() {};

//Herencia B hereda de A
B.prototype = Object.create(A.prototype); //solo hereda el prototype no llama al constructor

var instanceOfB = new B();

instanceOfB.doStuff();

try {
    alert(instanceOfB.x);
} catch (e) {
    alert(e)
}

function C() {};

alert("Estamos en C");

//Herencia C hereda de A
C.prototype = Object.create(instanceOfA); // seria igual a poner C.prototype = new A();

var instanceOfC = new C();

instanceOfC.doStuff();

try {
    alert(instanceOfC.x);
} catch (e) {
    alert(e)
}

var objC = instanceOfC.hasOwnProperty("doStuff") ? "doStuff" : "doStuff no es propio de C";
alert(objC);

if ("doStuff" in instanceOfC) {
    alert("doStuff esta en C o de los que hereda");
}

for (var prop in instanceOfA) {
    try {
        console.log(prop);
    } catch (e) {}
}

Object.keys([1, 2, 3, 4]).forEach(rr => console.log(rr));
