var persons = ["1", "2", "3", "4", "5", "6", "7", "8"]

//da true si hay coincidencia
var lstPerson = persons.some(name => name > 2);
console.log(lstPerson);
var personsNameMy = ["lolo", "pepe", "fernando", "lolo2"];
var lstPersonConL = personsNameMy.some(name => name.indexOf("l") > -1); //include ecma6 como indexof >-1
console.log(lstPersonConL);

//proyecta cada item de un array en otra cosa
var personsAsObject = personsNameMy.map(name => ({
    name: name
}));
console.log(personsAsObject);

var totales = personsNameMy.map(name => name.toLowerCase()).reduce((result, item) => {
    if (item.indexOf("l") > -1) {
        result.totalPersonasConL++;
    }
    if (item.indexOf("f") > -1) {
        result.totalPersonasConF++;
    }
    return result;
}, {
    totalPersonasConL: 0,
    totalPersonasConF: 0
})
console.log(totales);

console.log(personsNameMy.splice(0, 1));

// si todos cumplen da true;
var every = personsNameMy.every(name => name.indexOf("f") > -1);

var lis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
Array.from(lis).forEach(function (li) {
    console.log(li);
});

var spans = [{textContent: "hola"}, {textContent: "hola1"}, {textContent: "hola2"}, {textContent: "hola3"}];
let names2 = Array.from(spans, s => s.textContent);
Array.from(names2).forEach(function (re) {
    console.log(re);
});

Array.from(['a', 'b'].keys());
//   [ 0, 1 ]
//Array.from([ 'a', 'b' ].values());
//   [ 'a', 'b' ]
Array.from(['a', 'b'].entries());
//    [ [ 0, 'a' ],
//    [ 1, 'b' ] ]