//Se almacena en disco
localStorage.setItem( "user:1:checked", true );

// se almacena en memmoria
sessionStorage.setItem( "user:2:checked", true );

console.log( sessionStorage.getItem( "user:2:checked" ) )
console.log( localStorage.getItem( "user:1:checked" ) )