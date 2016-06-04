/**
  web �����߳�
  worker.postMessage���Է������飬�ֵ�ȡ�
  ���ǲ��ܷ��ͺ�����Ҳ�����ú�������Worker������Ϊ�����п��ܰ���һ��DOM�����ã�
  ���¹����߳��޸�DOM��
  
  ���߳�ֻ�ᴫ�ݱ����ĸ����������̣߳�
   ��ҳ��Ҳֻ�ܷ��ʹ����̷߳��͵Ķ��󸱱���
   
  �����߳̿��Է���localStorage Ҳ���Է���XMLHttpRequest����
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