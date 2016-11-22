// usado en editores de texto
//Tread
var worker1 = new Worker( "js/worker1.js" );
//para invocarlo
worker1.postMessage( JSON.stringify( {text: "hola manola"} ) );

worker1.addEventListener( "message", e=> {
    var response = JSON.parse( e.data.text );
    // createDocumentFragment ayuda a pintar muchos elemntos de golpe
    document.body.appendChild( document.createDocumentFragment( response.success ) );
    //se añaden de 1 en 1 y renderiza cada vez
    document.body.appendChild( document.createTextNode( response.success + "  -  " + response.text ) );
    console.log( e.data );
    worker1.terminate();
} );

//para detener el treadh
//setTimeout(()=> worker1.terminate(),1000);

//Otra forma de hacerlo
var worker2Code = `this.addEventListener("message", e=>{
    this.postMessage(e.data);
});`;

var code = new Blob( [worker2Code] );
var codeURL = URL.createObjectURL( code );
var worker2 = new Worker( codeURL );
worker2.postMessage( "hola holita" );

worker2.addEventListener( "message", e=> {
    console.log( e.data );
} );

//para imprtar ficheros
//importScripts("worker1.js");
//console.log(res());