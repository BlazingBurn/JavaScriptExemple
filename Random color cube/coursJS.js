window.addEventListener("load",function(){

	let couleurs = ["orange", "yellow", "green", "blue", "red"];
	let statCoul = {
		orange : 0,
		yellow : 0,
		green : 0,
		blue : 0,
		red : 0
		}

	function coulAlea() {
		return couleurs[Math.floor(Math.random() * couleurs.length)];
	}

	for (let i = 0; i < 100; i++) {

		let nbCoul = coulAlea();
		statCoul[nbCoul]++;
	}

	for (p in statCoul) {
		console.log(p + " : " + statCoul[p]);
	}

	//-------------------------------------
	
	let tabPage = document.createElement("table");
	document.body.appendChild(tabPage);

	for (let i = 0; i < 100; i++) {	
	
		let ligne = document.createElement("tr");
		tabPage.appendChild(ligne);

		for (let j = 0; j < 100; j++) {
			
			let cellule = document.createElement("td");
			ligne.appendChild(cellule);
			
			cellule.style.backgroundColor = coulAlea();
			
		}
			
	}

	function clignote() {

		let cellules = document.getElementsByTagName("td");

		for (let i = 0; i < cellules.length; i++) {
			cellules[i].style.backgroundColor = coulAlea();
		}

	}

	let timer = setInterval(clignote, 900);

},false);