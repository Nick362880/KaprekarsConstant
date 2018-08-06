function getUserInput() {
	var userNumb = Number(prompt("Please enter a number:"));
	if (isNaN(userNumb)) {
		alert("Could not process input.");
		return getUserInput();
	}
	return userNumb;
}

for (cNumb = 1, checkRep = [], x = getUserInput(), document.write("<div id = \"menu\"><h1>Kaprekar's Constant</h1></div><div id = \"content\">");; cNumb++) {
	asX = Number(x.toString().split("").sort(function(a, b) {return a - b}).join(""));
	deX = Number(x.toString().split("").sort(function(a, b) {return b - a}).join(""));
	document.write("<t>" + deX + " - " + asX + " = " + (deX - asX) + " ("+ cNumb + ")" + "</t><br />");
	x = deX - asX;
	if (checkRep.includes(x)) {
		document.write("<br /><t>Repeat from #" + (checkRep.indexOf(x) + 1) + " (" + x + ")</t>");
		document.write("<br /><t>Loop: " + checkRep.slice(checkRep.indexOf(x)).toString().split(",").join(", ") + "</t>");
		break;
	}
	checkRep = checkRep.concat(x);
}
alert("i'll try to format this better later lol");
document.write("</div>");

//https://en.wikipedia.org/wiki/Great_icosicosidodecahedron
//https://en.wikipedia.org/wiki/Great_inverted_snub_icosidodecahedron
//https://en.wikipedia.org/wiki/Great_disnub_dirhombidodecahedron
//https://en.wikipedia.org/wiki/Tetrahedron
//List of all polyhedrons