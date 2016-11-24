console.log( 'Cargando la página' );
var page = new WebPage();
var url = "http://www.anieto2k.com/";
page.open( url, function (status) {
    // Creamos el screenshot
    page.render( "anieto2k.png" );

    // Página cargada
    phantom.exit();
} );