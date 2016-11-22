// orientacion a objetos mirar en el fichero
// import "./oop"
// import "./polimorfismo"
// import "./callApplyBind"
// import "./arrayfunctions"
// import "./classes"
// import "./ejercicios03-11-2016"
// import "./esNextModules"
// import "./esNextModules2"
// import "./promisePatternImplementation"
// import "./promiseSample"
// import "./PubSub"
import "./storage"
import "./workers"


if (false) {
  for (let i = 0; i < 2; i++) {
      console.log(i);
  }

  if (true) {
      let x = 1;
  }

  //console.log(x); petaria por que el ambito esta dentrodel if
  var arrowfunction = (text, text2) => {
      console.log(text);
      console.log(text2);
      console.log(`Esto son interpolaciones:\r\n -${text} ${text2}`);
  }

  arrowfunction("arrow function", "texto 2");

  // llamadas recursivas
  var recursiva = 3;

  function recursivaf() {
      if (recursiva > 0) {
          recursiva = recursiva - 1;
          console.log("Recursiva : " + recursiva);
          recursivaf();
      }
  }
  recursivaf();

  function doStuff() {}

  doStuff.x = 10;
  console.log("Las funciones son objetos : doStuff.x = " + doStuff.x);
}
