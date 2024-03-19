function validate() {
	
	var errMsg = "";								
	var result = true;								


	return result;    
}

// get current JST in milliseconds
function calcJST() {
	let d = new Date();
	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	const offset = +9;
	return utc + (3600000 * offset);
}

function calcFactor() {
	let d = new Date("2024-03-16");
	let jst = calcJST();

	let deltaTime = jst - d;
	let deltaDays = Math.round(deltaTime / (1000 * 3600 * 24));

	let days = 0;
	let hours = new Date(jst).getHours();
	if (hours >= 12) {
		days = deltaDays;
	} else  {
		days = deltaDays - 1;
	}
	let factor = days;
	return factor;
}

function calcbounties(factor) {
	const lowbounty = ["Black Diablos", "Kirin", "Red Khezu", "Gypceros", "Blangonga", "Shogun", "Pink Rathian", "Dyura", "Blue Kut-Ku", "Basarios", "Congalala", "Hypnoc", "Azure Rathalos", "Lavasioth", "Chameleos"];
	const midbounty = [ "Kamu", "Gravios", "Kushala", "Tigrex", "Black Diablos", "Akantor", "Nono", "Espinas", "Teostra", "Bright Hypnoc", "Red Khezu", "Dora", "Rajang", "Pink Rathian", "Blue Kut-Ku", "F. Espi"];
	const highbounty = [ "Rajang", "Hypnoc", "Khezu", "Congalala", "Kut-Ku", "Lavasioth", "Gravios", "Shogun", "Diablos", "Espinas", "Akantor", "Tigrex", "Basarios"];
	const topbounty = [  "Dyura", "Teostra", "Dora", "Rusted Kush", "Kamu", "Kirin", "Guren", "Kushala"];
	let low = lowbounty[(factor%15)];
	let mid = midbounty[(factor%16)];
	let high = highbounty[(factor%13)];
	let top = topbounty[(factor%8)];
	const bounties = [low, mid, high, top];
	return bounties;
	//return "test";
}

function init() {

	const factor = calcFactor();
	const bounties = calcbounties(factor);
	document.getElementById("demo").innerHTML = bounties[0]	
	document.getElementById("demo2").innerHTML = bounties[1]	
	document.getElementById("demo3").innerHTML = bounties[2]	
	document.getElementById("demo4").innerHTML = bounties[3]	
	document.getElementById("date").innerHTML = new Date(calcJST()).toLocaleString() + " JST (Server time)";
}

window.onload = init;