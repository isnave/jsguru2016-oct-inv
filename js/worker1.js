this.addEventListener( "message", e=> {
        //el objeto que recibimos { text: "hola"}
        var data = JSON.parse( e.data );
        var response = {success: true, text: e.data}
        this.postMessage( response );
    }
);