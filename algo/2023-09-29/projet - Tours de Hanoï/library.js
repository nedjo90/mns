let grille = { "A": [], "B": [], "C": [] };
let nombreDePieces = 7;
let compteur = 0;

function afficherGrille(grille, detail = "") {
	let result = {};
	for (let key in grille) { result[key] = []; }
	for (let colonne in grille) {
		for (let i in grille[colonne]) { result[colonne][i] = grille[colonne][i]; }
	}
	for (colonne in result) {
		for (let i in result[colonne]) { result[colonne][i] = "<div class='piece' style='width:" + ((result[colonne][i] * 100 / nombreDePieces)) + "%;opacity:" + (50 + (result[colonne][i] * 50 / nombreDePieces)) + "%'><span class='badge mb-1 rounded-circle'>" + result[colonne][i] + "</span></div>"; }
	}
	afficher((compteur > 0) ? "<strong>Coup #" + (compteur) + " :</strong> " + detail + "<br/>" : "", result);
	compteur++;
}

function ajouter(colonne, valeur) {
	for (let i = taille(grille[colonne]); i > 0; i--) { grille[colonne][i] = grille[colonne][i - 1]; }
	grille[colonne][0] = valeur;
}
function retirer(colonne) {
	let result = grille[colonne][0]; let tableauTemp = [];
	for (let i = 0; i < taille(grille[colonne]) - 1; i++) { tableauTemp[i] = grille[colonne][i + 1]; }
	grille[colonne] = tableauTemp;
	return result;
}

function colonneExiste(colonne) {
	let result = false;
	for (let key in grille) {
		if (key === colonne) { result = true; }
	}
	return result;
}

function deplacer(depart, arrivee) {
	if (colonneExiste(depart) && colonneExiste(arrivee)) {
		if (taille(grille[depart]) > 0) {
			//Vérifier si départ plus petit que arrivée
			if (taille(grille[arrivee]) == 0 || grille[depart][0] < grille[arrivee][0]) {
				ajouter(arrivee, retirer(depart));
				afficherGrille(grille, "de <span class='badge bg-danger mb-2'>" + depart + "</span> vers <span class='badge bg-success'>" + arrivee + "</span>");
			} else {
				afficher("<span class='text-danger'>&#12" + errorCore[aleatoire(errorCore.length - 1)] + "; Oops ! Le départ \"" + depart + "\" est plus grand que l'arrivée \"" + arrivee + "\"...</span>");
			}
		} else {
			afficher("<span class='text-danger'>&#12" + errorCore[aleatoire(errorCore.length - 1)] + "; Oops ! Le départ \"" + depart + "\" est vide...</span>");
		}
	} else {
		afficher("<span class='text-danger'>&#12" + errorCore[aleatoire(errorCore.length - 1)] + "; Oops ! " + (!colonneExiste(depart) ? "Le départ \"" + depart + "\"" : "L'arrivée \"" + arrivee + "\"") + " n'existe pas...</span>");
	}
}

function initialisation() {
	let i = 1; let depart = "";
	if (nombreDePieces >= 0) {
		for (let key in grille) {
			if (i++ == 2) { depart = key; break; }
		}
		for (let i = 0; i < nombreDePieces; i++) { grille[depart][i] = i + 1; }
		if (i == 3) {
			afficherGrille(grille);
		} else {
			afficher("<span class='text-danger'>&#12" + errorCore[aleatoire(errorCore.length - 1)] + "; Oops ! La grille n'a pas la bonne dimension...</span>");
		}
	} else {
		afficher("<span class='text-danger'>&#12" + errorCore[aleatoire(errorCore.length - 1)] + "; Oops ! Le nombre de pièces n'est pas positif...</span>");
	}
}

initialisation();