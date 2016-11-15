var obj = {

}

// defines la propiedad para el objeto
//la propiedad no es enumerable en un for por ejemplo
Object.defineProperties(obj, name, {
    value: "adios",
    enumerable: false
});

console.log(obj.name);
