// uso uno semi-ocultacion
// es un tipo primitivo inmutable

var symbol1 = Symbol("hola");

var obj = {};
obj.hola = "adios";
obj[symbol1] = 11;

var value = obj[symbol1];

class StringHelper {
    toLower(text) {
        if ("lowerCaseEx" in this) {
            text = this.lowerCaseEx(text);
        }

        return text.toLowerCase();
    }
}

StringHelper.prototype.lowerCaseEx = text=> {
    return "-" + text;
}

var objeto = {
    get[Symbol.toStringTag]() {
        return "Holita";
    }
}

console.log(objeto.toString());