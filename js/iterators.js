// ITERATOR PROTOCOL

var obj = {
    names: ["israel", "pepe", "manolo"],
    get[Symbol.iterator]() {
        return function () {
            var index = -1;
            return {
                next: ()=> {
                    index++;
                    var result = this.names[index];
                    return index >= this.names.length ? {done: true} : {value: result, done: false};
                }
            }
        }
    }
};

for (let name of obj) {
    console.log( name );
}

// lo anterior seria igual a lo siguiente
// que es lo que ejecuta
// internamente se llama al next
function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {done: true};
        }
    }
}

var it = makeIterator( ['yo', 'ya'] );
console.log( it.next().value ); // 'yo'
console.log( it.next().value ); // 'ya'
console.log( it.next().done );  // true