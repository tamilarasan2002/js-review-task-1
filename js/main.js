var vote=true;
var age=19;
var qulifiction=12;

if(age>18 && qulifiction>10){
	if(vote==true){
		document.write("elgible for vote")
	}
	else{
		document.write("eligible for vote failed in test")
	}
}
else{
	document.write("not eligible for vote")
}