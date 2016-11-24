//Desectructurar
// encuentra la propiedad con el mismo nombre y lo asigna
debugger;
var obj = {a: 1, b: "hello", c: true};
var {a, b, c}= obj; // esto es igual {a:a} y var a = obj.a
var [d,e] = [1, 2];
var [f,,,,g]=[1, 2, 3, 4, 5, 6];
var [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log( res );

function doStuff({text = "10", timeout = -1}) {
    console.log( text );
}

doStuff( {text: "hello", timeout: 3000} );

var people = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith"
        },
        age: 35
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones"
        },
        age: 25
    }
];

for (var {name: n, family: {father: f}} of people) {
    console.log( "Name: " + n + ", Father: " + f );
}
