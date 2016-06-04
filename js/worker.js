onmessage = pingPong;
function pingPong(event){
	
	if(event.data == "ping"){
		
		postMessage("pong");
	}else{
		
		console.log("hello,I'm ok!")
	}
}