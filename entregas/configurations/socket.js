var client = require('emitter-io').connect();

// once we're connected, subscribe to the 'chat' channel
client.subscribe({
	key: "9SN1Xg1DjvmeiSdpnS0WdKkrxlz0koBH",
	channel: "entregas"
});
    
// on every message, print it out
client.on('message', function(msg){
	console.log( msg.asString() );
});

// publish a message to the chat channel
client.publish({
	key: "9SN1Xg1DjvmeiSdpnS0WdKkrxlz0koBH",
	channel: "chat/my_name",
	message: "hello, emitter!"
});