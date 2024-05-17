let intervalId = null; // Globální proměnná pro uchování ID intervalu

const kostky = document.getElementById("hraj");

function generujNahodneCislo() {
	return Math.floor(Math.random() * 6) + 1;
}

function hraKostky() {
	// Pokud je interval aktivní, zastavíme ho
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null; // Resetujeme ID intervalu

		// Kontrola výhry nebo prohry
		let nahodnaKostka = parseInt(document.querySelector(".kostka1").getAttribute("src").match(/\d/)[0]);
		let nahodnaKostka2 = parseInt(document.querySelector(".kostka2").getAttribute("src").match(/\d/)[0]);

		// Odstranění případných tříd pro výhru nebo prohru
		document.querySelector("h1").classList.remove("vyhra", "prohra");

		if (nahodnaKostka == nahodnaKostka2) {
			document.querySelector("h1").innerHTML = "Vyhrál jsi <i class='fa-solid fa-trophy'></i>";
			document.querySelector("h1").classList.add("vyhra"); // Přidání třídy pro výhru
		} else {
			document.querySelector("h1").innerHTML = "Teď to nevyšlo <i class='fa-regular fa-face-frown'></i>";
			document.querySelector("h1").classList.add("prohra"); // Přidání třídy pro prohru
		}

		return;
	}

	// Spustíme rotaci kostek každých 200 milisekund
	intervalId = setInterval(() => {
		let nahodnaKostka = generujNahodneCislo();
		let nahodnaKostka2 = generujNahodneCislo();
		let kostkaPoloha = "img/dice" + nahodnaKostka + ".png";
		let kostkaPoloha2 = "img/dice" + nahodnaKostka2 + ".png";

		document.querySelector(".kostka1").setAttribute("src", kostkaPoloha);
		document.querySelector(".kostka2").setAttribute("src", kostkaPoloha2);
	}, 200);
}

