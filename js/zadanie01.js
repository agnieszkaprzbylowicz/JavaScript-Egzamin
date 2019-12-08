function licz(){

	var n = document.getElementById("in").value;
	var s =getSqrt(n); 
	document.write(s);
}

function getSqrt(n) {
 	 return Math.sqrt(n);
}