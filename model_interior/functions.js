function transitionsON() {
	document.getElementById("searchInput").classList.remove('preload');
	document.getElementById("searchButton").classList.remove('preload');
}

function randomLesserThan(cieling) {
	return Math.floor(Math.random() * (cieling));
}

function swapNumberOfPictures(upTo) {
	for(var i = 0;  i < upTo;  i++)
		document.getElementById("item" + i).setAttribute('src', pictures[randomLesserThan(pictures.length)]);
}