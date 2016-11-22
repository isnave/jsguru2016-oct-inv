export class PubSub {
    constructor() {
        this.listeners = {};
    }

    unsubscribe(channel, listener) {
        var listeners = this.listeners[channel];
        listeners.splice( listeners.indexOf( listener ), 1 );
    }

    subscribe(channel, listener) {
        if (!this.listeners.hasOwnProperty( channel ))
            this.listeners[channel] = [listener];
        else
            this.listeners[channel].push( listener );
    }

    publish(channel, message) {
        this.listeners[channel].forEach( listener => {
            listener( channel, message );
        } );
    }
}

export var symbols = {
    pubsup: Symbol( "pubsub" )
};

if (false) {


    var pubSub = new PubSub();

    var listener = (channel, message) => {
        console.log( "canal" + channel + " - " + message.text );
    };

pubSub.subscribe( "app.register", listener );
pubSub.publish( "app.register", {
    text: "hola desde pubsub"
} );


pubSub.unsubscribe( "app.register", listener );

pubSub.subscribe( "app.users.register", listener );
pubSub.publish( "app.users.register", {
    text: "hola desde pubsub"
} );
}