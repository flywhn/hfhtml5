/**
function init(){
	
	var url = "http://gumball.wickedlysmart.com/";
	

	var request = new XMLHttpRequest();
	
	request.open("GET",url);
	
	request.onload = function(){
		
		if(request.status == 200){
			//ÔÚupdateSalesÖÐ£¬var sales = JSON.parse(responseText);
			updateSales(request.responseText);
		}else{
			alert("failed")
		}
	}
	
	request.send(null);
	
}*/

window.onload =function(){
	setInterval(handleRefresh,3000);
}

var lastReportTime = 0;

function updateSales(sales){
	
	var salesDiv = document.getElementById("sales");
	
	if(salesDiv == null) alert("null")	
	for(var i = 0;i<sales.length;i++){
	;	
		var sale =sales[i];
		var div = document.createElement("div");
		div.setAttribute("class","saleItem");
		div.innerHTML = sale.name + " has sold "+sale.sales+" gumballs";
		salesDiv.appendChild(div);
	}
	
	if (sales.length>0){
		lastReportTime = sales[sales.length-1].time
	}
}


function handleRefresh(){
	
	var url = "http://gumball.wickedlysmart.com" +
				"?callback=updateSales"     +
				"&lastreporttime="+lastReportTime +
				"&random="+(new Date()).getTime();
				
	var  newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src",url);
	newScriptElement.setAttribute("id","jsonp");
	
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	
	if (oldScriptElement == null){
		head.appendChild(newScriptElement);
	}else{
		head.replaceChild(newScriptElement,oldScriptElement);
	}
}