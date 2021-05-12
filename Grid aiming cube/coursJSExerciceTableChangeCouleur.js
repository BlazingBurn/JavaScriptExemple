window.addEventListener("DOMContentLoaded",function() {
	
	let tabPage = document.createElement("table");
	document.body.appendChild(tabPage);
	let oldCell;
	let speed = 900;
	let timer;

	for (let i = 0; i < 10; i++) {	
	
		let ligne = document.createElement("tr");
		tabPage.appendChild(ligne);

		for (let j = 0; j < 10; j++) {
			
			let cellule = document.createElement("td");
			ligne.appendChild(cellule);
			cellule.style.backgroundColor = "white";
			cellule.addEventListener("click",appuiHuman,false);		
		}
			
	}

	let butStop = document.createElement("button");
	let texte1 = document.createTextNode("Stop");
	butStop.appendChild(texte1);
	butStop.addEventListener("click",stop,false);
	document.body.appendChild(butStop);

	let butRestart = document.createElement("button");
	let texte2 = document.createTextNode("Restart");
	butRestart.appendChild(texte2);
	butRestart.addEventListener("click",restart,false);
	document.body.appendChild(butRestart);

	let butRestart2 = document.createElement("button");
	let texte4 = document.createTextNode("Restart+");
	butRestart2.appendChild(texte4);
	butRestart2.addEventListener("click",restart2,false);
	document.body.appendChild(butRestart2);

	let butStart = document.createElement("button");
	let texte3 = document.createTextNode("Start");
	butStart.appendChild(texte3);
	butStart.addEventListener("click",start,false);
	document.body.appendChild(butStart);


	function RobotChangeCoul() {

		let cellules = document.querySelectorAll("td");
		let numCase = Math.floor(Math.random()*cellules.length);

		let CellRemains = Object.keys(cellules).filter(cell => cellules[cell].style.backgroundColor === "white").length;
		
		if (oldCell) {
			oldCell.style.backgroundColor = "blue";
			oldCell.removeEventListener("click",stop,false);
		}


		if (CellRemains > 0) {	
			while(cellules[numCase].style.backgroundColor === "lime" || cellules[numCase].style.backgroundColor === "blue") {
				numCase = Math.floor(Math.random()*cellules.length);
			}
			oldCell = cellules[numCase];
			oldCell.style.backgroundColor = "red";
			oldCell.addEventListener("click",stop,false);
		}

		else {
			clearInterval(timer);
		}


	}

	function stop(e) {
		clearInterval(timer);
	}

	function start(e) {
		timer = setInterval(RobotChangeCoul, speed);
	}

	function restart(e){
	    clearInterval(timer);
	    oldCell = "";
	    let cellules = document.querySelectorAll("td");
	    for(let i=0;i<cellules.length;i++){
	        cellules[i].style.backgroundColor = "white";
	    }
	    speed = 900;
	    timer = setInterval(RobotChangeCoul,speed);
	    console.log(speed);
    }

    function restart2(e){
	    clearInterval(timer);
	    oldCell = "";
	    let cellules = document.querySelectorAll("td");
	    for(let i=0;i<cellules.length;i++){
	        cellules[i].style.backgroundColor = "white";
	    }
	    speed *= Math.LN2;
	    timer = setInterval(RobotChangeCoul,speed);
	    console.log(speed);
    }

	function appuiHuman(e) {
		let cellules = document.querySelectorAll("td");
		if (Object.keys(cellules).find(cell => cellules[cell].style.backgroundColor === "red")) {
			if (e.target.style.backgroundColor !== "blue" ) {
				e.target.style.backgroundColor = "lime";	
			}
		}
	}

},false);