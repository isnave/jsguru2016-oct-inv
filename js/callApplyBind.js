function doStuff(x, y) {
    if (this.hasOwnProperty("text")) {
        console.log(this.text);
    } else {
        console.log(this);
    }
}

doStuff();

doStuff.call({
    text: "hola mundo call"
}, 1, true);

doStuff.apply({
    text: "hola mundito apply"
}, [1, true]);

var doStuffBind = doStuff.bind({text: "hola mundito bind"});
doStuffBind(1,true);
