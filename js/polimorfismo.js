function A(name) {
    this.super = name;
}

A.prototype = {
    doStuff: function() {
        console.log("Do Work");
    },

    lanzaDoStuff: function() {
        this.doStuff();
    }
}

function B(firstName, secondName) {
    //A.call(this, firstName);
    A.apply(this, arguments); //arguments vienen todos los argumentos en un array
    var aa = Array.from(arguments); //copia el array
    console.log(aa);
    this.secondName = secondName;
}

B.prototype = Object.create(A.prototype);

B.prototype.doStuff = function() {
    // A.prototype.lanzaDoStuff.call(this); este this es de  B por lo que en a llamaria a B.doStuff
    A.prototype.doStuff.call(this);
    console.log("Do more Work");

    //llama a la propiedad de A como si fuese suya
    console.log(this.super);
};

var resultadoB = new B("1nombre", "2apellido");
resultadoB.doStuff();

resultadoB["doStuff"]();
