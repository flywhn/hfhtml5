var ourCoords = {
	latitude : 47.624851,
	longitude: -122.52099
}

var sudaCoords = {
	 Latitude : 31.3055493, 
	 Longitude: 120.6471739
}

window.onload = getMyLocation;

function getMyLocation(){
	
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	}else{
		alert("no geolocation support")
	}
}

function displayLocation(position){
	
	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude : "+latitude+", Longitude: " +longitude;
	
	var km = computeDistance(position.coords,ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are "+km+" km from the WickedlySmart HQ";
	
	
	showMap(position.coords);
}

function displayError(error){
	
	var errorTypes = {
		0:"Unknown error",
		1:"Permissin denied by User",
		2:"Postiton is not available",
		3:"Request timed out"
	};
	
	var errorMessage = errorTypes[error.code];
	
	if (error.code == 0 || error.code == 2){
		errorMessage = errorMessage+"   "+ error.message;
	}
	
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords){
	
	var startLatRads   = degreesToRadians(startCoords.latitude);
	var startLongRads  = degreesToRadians(startCoords.longitude);
	var destLatRads    = degreesToRadians(destCoords.latitude);
	var destLongRads   = degreesToRadians(destCoords.longitude);
	
	
	var Radius = 6371;
	
	
	var distance = Math.acos(Math.sin(startLatRads)*Math.sin(destLatRads)+
							 Math.cos(startLatRads)*Math.cos(destLatRads)*
							 Math.cos(startLongRads-destLongRads))*Radius;
							 
	
	return distance;
}


function degreesToRadians(degrees){
	
	var radians = (degrees*Math.PI)/180;
	
	return radians;
}


var  map;

function showMap(coords){
	
	var googleLatAndLong = new google.maps.LatLng(coords.latitude,coords.longitude);
	
	var mapOptions = {
		zoom:10,
		center:googleleLatAndLong,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	}
	
	var mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv,mapOptions);
}