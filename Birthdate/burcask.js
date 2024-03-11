let n = 1;

function change_photo(){
	let el = document.getElementById("photo");
	
	let btnp = document.getElementById("btnyanı");
	button.innerHTML = "";
	
	switch(n){
		case 1:
			document.getElementById("b").style.color = "white";
			el.src = "photos/1.jpg";
			btnp.innerHTML = "";
			button.innerHTML = "Ömrümm";
			break;
		case 2:
			el.src = "photos/2.jpg";
			button.innerHTML = "Meleğimm";
			break;
		case 3:
			el.src = "photos/3.jpg";
			button.innerHTML = "Bitanemm";
			break;
		case 4:
			document.getElementById("u").style.color = "white";
			el.src = "photos/4.jpg";
			button.innerHTML = "Canımm";
			break;
		case 5:
			el.src = "photos/5.jpg";
			button.innerHTML = "Güzelimm";
			break;
		case 6:
			el.src = "photos/6.jpg";
			button.innerHTML = "Kelebeğimm";
			break;
		case 7:
			document.getElementById("r").style.color = "white";
			el.src = "photos/7.jpg";
			button.innerHTML = "Şansımm";
			break;
		case 8:
			document.getElementById("c").style.color = "white";
			el.src = "photos/8.jpg";
			button.innerHTML = "Balımm";
			break;
		case 9:
			document.getElementById("a").style.color = "white";
			el.src = "photos/9.jpg";
			button.innerHTML = "Papatyamm";
			break;
		case 10:
			document.getElementById("k").style.color = "white";
			el.src = "photos/10.jpg";
			button.innerHTML = "Aşkımm";
			break;
		case 11:
			el.src = "photos/11.jpg";
			button.innerHTML = "Hayatımm";
			break;
		case 12:
			el.src = "photos/12.jpg";
			button.innerHTML = "Bebeğimm";
			break;
		case 13:
			el.src = "photos/13.jpg";
			button.innerHTML = "Tatlımm";
			break;
		case 14:
			el.src = "photos/14.jpg";
			button.innerHTML = "Prensesimm";
			break;
		default:
			document.getElementById("b").style.color = "rgb(0, 128, 85)";
			document.getElementById("u").style.color = "rgb(0, 128, 85)";
			document.getElementById("r").style.color = "rgb(0, 128, 85)";
			document.getElementById("c").style.color = "rgb(0, 128, 85)";
			document.getElementById("a").style.color = "rgb(0, 128, 85)";
			document.getElementById("k").style.color = "rgb(0, 128, 85)";
			button.innerHTML = "Te quiero mucho <3";
			btnp.innerHTML = "İyi ki doğdunn iyi ki benle oldunn <br> Senii çokk seviyorumm <br>Nice beraber kutlayacağımız yaşlaraa <3";
			n=0;
			break;
	}
	n++;
}