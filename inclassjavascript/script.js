function totalSentences(){
	var total = document.getElementsByTagName('p').length;
	alert(total)
}

function div1Sentences(){
	var firstdiv = document.getElementById("div1");
 	var first = firstdiv.getElementsByTagName("p");
	alert(first.length)
}

function div2Sentences(){
	var seconddiv = document.getElementById("div2");
 	var second = seconddiv.getElementsByTagName("p");
	alert(second.length)
}


function div3Sentences(){
	var thirddiv = document.getElementById("div3");
 	var third = thirddiv.getElementsByTagName("p");
	alert(third.length)
}