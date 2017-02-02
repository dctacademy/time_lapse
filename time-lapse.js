var startHandle = document.getElementById('start');
var stopHandle = document.getElementById('stop');
var endHandle = document.getElementById('end');
var timerHandle = document.getElementById('timer');
var timeLapseHandle = document.getElementById('timeLapse');
var setTimeHandle = document.getElementById('setTime');
var setTimeFormHandle = document.getElementById('setTimeForm');
var myModalButtonHandle = document.getElementById('modalButton');
/*
localStorage.setItem("seconds", 0);
localStorage.setItem("hrs", 0);
localStorage.setItem("mins", 0);
localStorage.setItem("intervalHandle",0);
localStorage.setItem("showHrs", "");
localStorage.setItem("showMins","");
localStorage.setItem("showSeconds","");
localStorage.setItem("startTime","00:00");
localStorage.setItem("endTime","");
localStorage.setItem("displayTime","00:00");
localStorage.setItem("startedTimer", true);
*/

var seconds = 0; // calcuation variable
var hrs = 0; // calcuation variable
var mins = 0; // calcuation variable
var intervalHandle; // setInterval Variable
var showHrs = ""; // output variable
var showMins = ""; // output variable
var showSeconds = "";  // output variable
var startTime = "00:00"; // time lapse variable
var endTime = ""; // time lapse variable
var displayTime = "00:00";
var startedTimer = true; // variable used to not resetting the setinterval the second time
//localStorage.setItem("appName", "DCT Tymer");

function tick(){
	seconds += 1;

	if(seconds >= 60){ // should be changed to 60
		seconds = 0;
		mins += 1;
	}

	if(mins == 60){ // should be changed to 60
		mins = 0;
		hrs += 1;
	}
	showTime();
}

function timeLapse(){
	var myElement = document.createElement('li');
	var elementText = document.createTextNode(startTime + " - " + endTime);
	myElement.appendChild(elementText);
	timeLapseHandle.append(myElement);
}

function showTime(){
	if (hrs < 10){
		showHrs = "0" + hrs;
	} else {
		showHrs = hrs;
	}

	if (mins < 10){
		showMins = "0" + mins;	
	}else{
		showMins = mins;
	}

	if (seconds < 10){
		showSeconds = "0" + seconds;
	}else{
		showSeconds = seconds;
	}

	if ((mins < 60) && (hrs > 0)){  // should be changed to 60
		displayTime = showHrs + ":" + showMins + ":" + showSeconds;
	} else{
		displayTime = showMins + ":" + showSeconds;
	} // for better output of the information
	timerHandle.innerHTML = displayTime;
}

startHandle.onclick = function(){
	if(startedTimer){
		intervalHandle = setInterval(tick,1000);
		startedTimer = false;
	} else{
		endHandle.style.display = "none"; 
	}

	startHandle.style.display = "none";
	stopHandle.style.display = "block";
	if (displayTime !== "00:00"){
		startTime = displayTime;
	}
	timer.className = "";
}

stopHandle.onclick = function(){
	startHandle.style.display = "block";
	stopHandle.style.display = "none";
	endTime = displayTime;
	timeLapse();
	timer.className = "timerDisplay";
	if(!startedTimer){
		endHandle.style.display = "block";
	}
}

endHandle.onclick = function(){
	var confirmEnd = confirm("Are you sure?")
	if(confirmEnd){
		clearInterval(intervalHandle);
		startHandle.style.display = "none";
		myModalButtonHandle.style.display = "none";
	}
}

setTimeFormHandle.onsubmit = function(e){
	e.preventDefault();
	var newTime = setTimeHandle.value;
	var newTimeArray = newTime.split(":");
	hrs = Number(newTimeArray[0]);
	mins = Number(newTimeArray[1]);
	seconds = Number(newTimeArray[2]);
	timerHandle.innerHTML = newTime;

	$('#myModal').modal('hide');
};

window.onload = function(){
	stopHandle.style.display = "none";
	endHandle.style.display = "none";

	// Store
}


