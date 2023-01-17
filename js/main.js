var vote=prompt("voter id true or false");
var age=parseInt(prompt("Enter your age"))
var qulifiction=(prompt("Enter your Qulification"))

if(age>18 && qulifiction>10){
	if(vote=="true"){
		document.write("elgible for vote")
	}
	else{
		document.write("eligible for vote failed in test")
	}
}
else{
	document.write("not eligible for vote")
}