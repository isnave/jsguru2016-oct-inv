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