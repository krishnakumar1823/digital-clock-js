function callsec(){
	var clk = new Date();
	
	let hour=document.getElementById("hr");
	let list0 = clk.getHours();
	if (list0 > 12){
		var hourr=list0-12
		if (hourr<10){
			hour.innerHTML="0"+hourr;
		}
		else{
			hour.innerHTML=hourr;
		}
	}
	else if(list0 < 12){
		if (10<list0){
			hour.innerHTML="0"+list0;
		}
		else{
			hour.innerHTML=list0;
		}
	}
	else if(list0 == 12){
		hour.innerHTML=12;
	}
	
	let ampm=document.getElementById("ampm");
	let list7 = clk.getHours();
	if (list7 >= 12){
		var hourr=list7-12
		ampm.innerHTML="PM";
	}
	else{
		ampm.innerHTML="AM";
	}
 
	let minute=document.getElementById("min");
	let list1 = clk.getMinutes();
	if (list1 < 10){
			minute.innerHTML="0"+list1;
		}
		else{
			minute.innerHTML=list1;
		}
 
	let second=document.getElementById("sec");
	let list2 = clk.getSeconds();
	if (list2 < 10){
			second.innerHTML="0"+list2;
		}
		else{
			second.innerHTML=list2;
		}
	
	
	
	let date=document.getElementById("date");
	let list6 = clk.getDate();
	if (list6 < 10){
			date.innerHTML="0"+list6;
		}
		else{
			date.innerHTML=list6;
		}
	
	
	
	let month=document.getElementById("month");
	let list4 = clk.getMonth();
	switch(list4){
		case 1:
			month.innerHTML="Feb";
			break;
		case 2:
			month.innerHTML="Mar";
			break;
		case 3:
			month.innerHTML="Apr";
			break;
		case 4:
			month.innerHTML="May";
			break;
		case 5:
			month.innerHTML="Jun";
			break;
		case 6:
			month.innerHTML="Jul";
			break;
		case 7:
			month.innerHTML="Aug";
			break;
		case 8:
			month.innerHTML="Sep";
			break;
		case 9:
			month.innerHTML="Oct";
			break;
		case 10:
			month.innerHTML="Nov";
			break;
		case 11:
			month.innerHTML="Dec";
			break;
		case 0:
			month.innerHTML="Jan";
			break;
	}
	
	let year=document.getElementById("year");
	let list5 = clk.getFullYear();
	year.innerHTML=list5;
	
	
	let day=document.getElementById("day");
	let list3 = clk.getDay();
	switch(list3){
		case 1:
			day.innerHTML="Mon";
			break;
		case 2:
			day.innerHTML="Tue";
			break;
		case 3:
			day.innerHTML="Wed";
			break;
		case 4:
			day.innerHTML="Thr";
			break;
		case 5:
			day.innerHTML="Fri";
			break;
		case 6:
			day.innerHTML="Sat";
			break;
		case 0:
			day.innerHTML="sun";
			break;
	}
}
setInterval(callsec,1000)