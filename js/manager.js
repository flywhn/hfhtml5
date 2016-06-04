/**
  web 工作线程
  worker.postMessage可以发送数组，字典等。
  但是不能发送函数，也不能用函数构造Worker对象。因为函数中可能包含一个DOM的引用，
  导致工作线程修改DOM。
  
  主线程只会传递变量的副本给工作线程，
   主页面也只能访问工作线程发送的对象副本；
   
  工作线程可以访问localStorage 也可以发起XMLHttpRequest请求；
*/
function init(){
	
	
	var worker = new Worker("js/worker.js");
	var arr = {"message":[10,20,30]}
	worker.postMessage("ping");
	
	worker.onmessage = function(event){
		var message = "Worker says "+event.data;
		
		document.getElementById("output").innerHTML = message;
		
	}
}
window.onload = init;