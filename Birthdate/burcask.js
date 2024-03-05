let n = 1;

function change_photo(){
	let el = document.getElementById("photo");
	let el2 = document.getElementById("u");
	switch(n){
		case 1:
			document.getElementById("b").style.color = "cyan";
			el.src = "photos/1.jpg";
			break;
		case 2:
			el.src = "photos/2.jpg";
			break;
		case 3:
			el.src = "photos/3.jpg";
			break;
		case 4:
			document.getElementById("u").style.color = "cyan";
			el.src = "photos/4.jpg";
			break;
		case 5:
			el.src = "photos/5.jpg";
			break;
		case 6:
			el.src = "photos/6.jpg";
			break;
		case 7:
			document.getElementById("r").style.color = "cyan";
			el.src = "photos/7.jpg";
			break;
		case 8:
			document.getElementById("c").style.color = "cyan";
			el.src = "photos/8.jpg";
			break;
		case 9://Buradasın
			document.getElementById("a").style.color = "cyan";
			el.src = "photos/9.jpg";
			break;
		case 10:
			document.getElementById("k").style.color = "cyan";
			el.src = "photos/10.jpg";
			break;
		case 11:
			document.getElementById("c").style.color = "cyan";
			el.src = "photos/11.jpg";
			break;
		default:
			el.src = "love.jpg";
			break;
	}
	n++;
}