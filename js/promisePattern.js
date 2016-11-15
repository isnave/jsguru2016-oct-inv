function doStuffAsync(a, b, callback) {
    setTimeout(()=> callback(a + b), 1000);
}
function doStuffAsync2(a, b, callback) {
    setTimeout(()=> callback(a + b), 1000);
}
function doStuffAsync3(a, b, callback) {
    setTimeout(()=> callback(a + b), 1000);
}

function doStuffA(a, b, callback) {
    setTimeout(()=> {
        return (a + b)
    }, 1000);
}
function doStuffA2(a, b, callback) {
    setTimeout(()=> {
        return (a + b)
    }, 1000);
}
function doStuffA3(a, b, callback) {
    setTimeout(()=> {
        return (a + b)
    }, 1000);
}

// codigo feooooo
doStuffAsync(1, 2, result=> {
    console.log(result);
    doStuffAsync2(1, 3, result=> {
        console.log(result);
        doStuffAsync3(1, 4, result=> {
            console.log(result);
        });
    });
});

Promise.all([doStuffA(2, 1), doStuffA2(3, 4)]).then((r1, r2)=> {
    alert("Promise " + r1 + r2);
});


// FIRE AND FORGET
console.log("hello");