console.log("Ejercicios 03-11-2016");


console.log("Ejercicios 03");





console.log("Ejercicios 04");
var arr = [1, 3, 44];
Array.prototype.average = () => {
    return this;
};
var average = arr.average();

Array.prototype.clasify = function() {
    return this.reduce((result, item) => {
        if (item % 2 == 0) {
            result.par.push(item);
        } else {
            result.impar.push(item);
        }
        return result;
    }, {
        par: [],
        impar: []
    })
};

var clasificacion = arr.clasify();

Object.defineProperty(Array.prototype, "isEmpty", {
    get: () => this.length == 0,
    confifugable: false
});

console.log("Ejercicios 05");

function logWords() {
    console.log(Array.from(arguments).join(", "));
}

function logName(name, secondName) {
    logWords.apply(this, arguments);
}
logName("nombre", "apellido");

console.log("Ejercicios 06");

function A() {}

A.prototype = {
    doStuff: function() {}
};

function B() {}

B.prototype = Object.create(A.prototype);
B.prototype.doStuff = undefined;

var b = new B();
//Peta es undefined
try {
    b.doStuff();
} catch (e) {
    console.log(e);
} finally {}

console.log("Ejercicios 07");
try {
    var persons = [{
        name: "israel",
        edad: 11
    }, {
        name: "lola",
        edad: 15
    }, {
        name: "riki",
        edad: 50
    }]

    var resMenosCorrecto = persons.filter(person => person.name.includes("i"));
    console.log(resMenosCorrecto);

    var indexableArray = Object.create(Array.prototype);
    indexableArray.index = {
        "contieneI:i": new Set()
    };

    indexableArray.push = function(item) {
        Array.prototype.push.call(this, item);
        if (item.name.toLowerCase().includes("i")) {
            this.index["contieneI:i"].add(item);
        }
    };

    var concreteIndex = Object.create(indexableArray);
    concreteIndex.push({
        name: "riki22",
        edad: 530
    });
    var personasConI = concreteIndex.index["contieneI:i"];
    console.log(personasConI);
} catch (e) {} finally {}

console.log("Ejercicios 08");

var index = {
    "partido:campo:id": 0,
    "partido:campos": new Set(),
    "partido:campos:1:jugadores:events": new Set(),
    "partido:campos:1:espontaneos:events": new Set()
};
var MatchManager = {
    add: function() {
        var id = index["partido:campo:id"]++;
        var match = {
            id
        };
        index["partido:campos"].add(match);
        index["partido:campos:" + id + ":jugadores:events"] = new Set();
        index["partido:campos:" + id + ":espontaneos:events"] = new Set();
        return match;
    },
    getEventByActor: function(matchId, actorType) {
        switch (actorType.toLowerCase()) {
            case "jugador":
                actorType = "jugadores";
                break;
            case "espontaneo":
                actorType = "espontaneos";
                break;
            default:
        }
        var key = "partido:campos:" + matchId + ":" + actorType + ":events";
        return index[key];
    }
}

var matchManager = Object.create(MatchManager);
var match = matchManager.add();
match.name = "Madrid barcelona";
var match2 = matchManager.add();
match2.name = "Madrid barcelona 2ª parte";

var matchresult = matchManager.getEventByActor(1, "jugador");
console.log(matchresult);
