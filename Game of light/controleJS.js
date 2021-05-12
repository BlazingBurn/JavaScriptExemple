/*
<!--
NOURRY DIMITRI
-->
*/

window.addEventListener("DOMContentLoaded",function() {

	let tabPage = document.createElement("table");
	document.body.appendChild(tabPage);

	let nbCoup = 0;
	
	let h = document.createElement("h1");
	let texteContenu = document.createTextNode("Les lumieres ne sont plus");
	h.appendChild(texteContenu);
	document.body.appendChild(h);

	let pPage = document.createElement("p");
	let texteNbCoup = document.createTextNode("Nombre de coup : " + nbCoup );
	pPage.appendChild(texteNbCoup);
	document.body.appendChild(pPage);


	let butRestart = document.createElement("button");
	let texte = document.createTextNode("Restart");
	butRestart.appendChild(texte);
	butRestart.addEventListener("click",restart,false);
	document.body.appendChild(butRestart);


	for (let i = 0; i < 4; i++) {	

		let ligne = document.createElement("tr");
		tabPage.appendChild(ligne);

		for (let j = 0; j < 4; j++) {
			
			let cellule = document.createElement("td");
			ligne.appendChild(cellule);

		}
		
	}

	initGame();


	function initGame() {
	
		let cellules = document.querySelectorAll("td");
		
		for (let i = 0; i < cellules.length; i++) {
			
			let nbRandomCouleur = Math.floor(Math.random()*2);
			console.log(nbRandomCouleur);
			let couleur;

			(nbRandomCouleur == 0) ? couleur = "yellow" : couleur = "grey";

			cellules[i].style.backgroundColor = couleur;

			cellules[i].setAttribute("id", i);

			cellules[i].addEventListener("click",changementCouleur,false);	
		}

	}


	function restart(e){

		nbCoup = 0;
		let pPage = document.querySelector("p");
		pPage.innerHTML = "Nombre de coup : " + nbCoup;
	    initGame();
    
    }



	function changementCouleur(e) {
		
		let cellules = document.querySelectorAll("td");

		let CellColorYellow = Object.keys(cellules).filter(cell => cellules[cell].style.backgroundColor === "yellow").length;

		nbCoup = nbCoup+1;
		let pPage = document.querySelector("p");
		pPage.innerHTML = "Nombre de coup : " + nbCoup;

		if (CellColorYellow == 0) {
			
			alert("win");
			cellules.forEach(element => element.removeEventListener("click",changementCouleur,false));
		
		}

		else {

			let nbTarget = e.target.getAttribute("id");

			let tabCellulesAChange = new Array();
			let IndexNumber = 0;

			for (let i = nbTarget % 4; i < 16; i += 4) {
			
				if (!tabCellulesAChange.includes(cellules[i].getAttribute("id"))) {
					tabCellulesAChange[IndexNumber] = cellules[i].getAttribute("id");
					IndexNumber++;
				}
			
			}

			let nbTarget2 = nbTarget - nbTarget%4;

			for (let j = nbTarget2; j < nbTarget2 + 4; j++) {
				
				if (!tabCellulesAChange.includes(cellules[j].getAttribute("id"))) {
					tabCellulesAChange[IndexNumber] = cellules[j].getAttribute("id");
					IndexNumber++;
				}

			}

			for (let k = 0; k < tabCellulesAChange.length; k++) {

				let aModif = tabCellulesAChange[k];
				console.log(aModif);

				(cellules[aModif].style.backgroundColor == "yellow") ? cellules[aModif].style.backgroundColor = "grey" : cellules[aModif].style.backgroundColor = "yellow";

			}

		}

	}

},false);