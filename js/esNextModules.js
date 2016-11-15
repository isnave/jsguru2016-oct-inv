var a = 11;

// Ecma6 esto es un modulo y se exporta
export function doStuff(str) {
    alert("Modulo1 " + str);
}

// lo importamos de esto modo en otro fichero
// y le ponemos un alias separado por comas podemos
// poner mas classes variables, funciones, etc
// import {doStuff as stuff} from "./esNextModules"
