function setCountDown() {
	var birthday = new Date(2019, 2, 22, 0, 0, 0).getTime();
var currentTime = new Date().getTime();
var milliseconds = Math.round(birthday - currentTime);
var convertToSecond = Math.round(milliseconds / 1000);
var convertToMinute = Math.round(convertToSecond / 60);
var convertToHour = Math.round(convertToMinute / 60); 
var convertToDay = Math.round(convertToHour / 24);
var convertToWeek = Math.round(convertToDay / 7);


if (convertToSecond==0) {
	clearInterval(timer);
}
else{
	document.getElementById("event").innerHTML="Weeks: "+convertToWeek+" "
+"Days: "+convertToDay+" "+"Hours: "+convertToHour+" "+"Minutes: "+convertToMinute+" "+"Seconds: "+convertToSecond;
}
}


var timer=setInterval(setCountDown,1000);

	




