import {PubSub, symbols} from "./PubSub";

class ObservableObject {
    static create(obj) {
        var ps = new PubSub();
        obj[symbols.pubsup] = ps;

        Object.keys( obj ).forEach( property=> {
            obj["_" + property] = obj[property];
            obj.watchChanges = handler =>
                Object.defineProperty( obj, property, {
                    get: ()=> this["_" + property],
                    set: (value)=> {
                        ps.publish( "", {
                            property: property,
                            oldValue: this["_" + property],
                            newValue: value
                        } );
                        this["_" + property] = value;
                    }
                } )
        } );
        obj.watchChanges = handler => ps.subscribe( "", (channel, message)=>handler( message ) );
        return obj;
    }
}

var obj = {
    name: "hola"
};


obj.name = "cambio de dato";
ObservableObject.create( obj );
obj.watchChanges( data => {
    console.log( data );
} )

obj[symbols.pubsup].subscribe( "", message=> {
    console.log( message );
} );