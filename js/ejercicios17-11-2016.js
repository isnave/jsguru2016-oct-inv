function objectEntries(obj) {
    let index = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (obj == null || !(typeof obj[Symbol.iterator] === 'function')) {
                throw "too cagada";
            }
            if (index === obj.length) {
                return {
                    done: true
                };
            }
            let k = obj[index++];
            return {
                value: k
            };
        }
    };
}

let obj = {
    pp: 1,
    rr: 2,
    ss: 3
};
for (let k of objectEntries(obj)) {
    console.log(k);
}

for (let k of objectEntries(obj)) {
    console.log(k + " - 2");
}


//aplanar el codigo
var myGenerator = {
    filter: (iterable, condition) => {
        return {
            [Symbol.iterator]: function*() {
                for (let item of iterable) {
                    if (condition(item)) {
                        yield item;
                    }
                }
            }
        }
    }
}


var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var res = myGenerator.filter(list, r => r < 5);
console.log("hola");
for (var r of res) {
    console.log(r);
}

function* filtro(iterable, condition) {
    for (var variable of iterable) {
        if (condition(variable)) {
            yield variable;
        }
    }
}

function* map(iterable, predicate) {
    for (var variable of iterable) {
        yield predicate(variable);
    }
}
