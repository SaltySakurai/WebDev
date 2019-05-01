var img = document.getElementById("twig");

function showImg(event){
	var x = parseInt(event.clientX);
	var y = parseInt(event.clientY);
	img.style.display="block";
	img.style.position = 'absolute';
  img.style.top = y + 'px';
	img.style.left = x + 'px';
}
