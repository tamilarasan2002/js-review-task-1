var vote=prompt("voter id true or false");
var age=parseInt(prompt("Enter your age"));

if(age>18){
	if(vote=="true"){
		document.write("elgible for vote")
	}
	else{
		document.write("user to get a voter id")
	}
}
else{
	document.write("not eligible for vote")
}