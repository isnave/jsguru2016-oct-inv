var obj = {
    names: ["israel", "pepe", "manolo"],
    [Symbol.iterator]: function*() {
        yield* this.names;
    }
};

for (let name of obj) {
    console.log( name );
}

var myIterable = {};
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield "fin";
};

for (let value of myIterable) {
    console.log( value );
}

//aplanar el codigo
var _ = {
    flatten: (...args)=> {
        return {
            [Symbol.iterator]: function*() {
                for (let i = 0; i < args.length; i++) {
                    yield* args[i];
                }
            }
        }
    },
    where: (iterable, conditionFunc)=> {
        return {
            [Symbol.iterator]: function*() {
                for (let item of iterable) {
                    if (conditionFunc( item )) {
                        yield item;
                    }
                }
            }
        }
    }
}

for (var res of _.flatten( ["1", "2"], ["3", "4"], ["5", "6", "7"] )) {
    console.log( res );
}
var names = ["israel", "pepe", "manolo"];
// hasta que no se itera no se ejecuta la iteracion
var hasM = _.where( names, name=>name.includes( "i" ) );
for (var r of hasM) {
    console.log( r );
}

// lo anterior seria igual a lo siguiente
// que es lo que ejecuta
// internamente se llama al next
function* idMaker() {
    var index = 0;
    while (true) {
        yield index++;
    }
}

var gen = idMaker();

console.log( gen.next().value ); // 0
console.log( gen.next().value ); // 1
console.log( gen.next().value ); // 2
console.log( "Final" ); // Final