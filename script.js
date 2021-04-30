const newYear="4 Dec 2021";
const DaysEl=document.querySelector('#days');
const HoursE=document.querySelector('#hours');
const MinutesE=document.querySelector('#minutes');
const SecondsE=document.querySelector('#seconds');
function countdown(){
	const countDate=new Date(newYear);
	const currentDate=new Date();
	const totalSeconds=Math.floor((countDate-currentDate)/1000);
	const Seconds=Math.floor((countDate-currentDate)/1000)%60;
	const totalDays=totalSeconds/(86400);
	const Days=Math.trunc(totalDays)
	const totalHours=Math.floor(totalSeconds/3600)%24;
	const totalMinute=Math.floor(totalSeconds/60)%60;
	console.log(countDate-currentDate);
	console.log(Seconds,totalHours,totalMinute,Days);
	 DaysEl.innerHTML=Days;
	 HoursE.innerHTML=totalHours;
	  MinutesE.innerHTML=totalMinute;
	  SecondsE.innerHTML=Seconds;
}
countdown();	
setInterval(countdown,1000);