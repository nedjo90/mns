let matiere = [
	{ "nom": "Algo", "notes": [16, 7, 20], "moyenne": null},
	{ "nom": "Anglais", "notes": [18, 20], "moyenne": null},
];
let moyenneGene = 0;
for (let i = 0; i < taille(matiere); i++) {
	//afficher("matière = ", matiere[i]["nom"]);
	//afficher("notes :", matiere[i]["notes"]);
	let moyenne = 0;
	for (let j = 0; j < taille(matiere[i]["notes"]); j++) {
		moyenne += matiere[i]["notes"][j];
	}
	moyenne = (~~((moyenne / taille(matiere[i]["notes"]) * 100))) / 100;
	matiere[i]["moyenne"] = moyenne;
	//afficher("Moyenne ", matiere[i]["nom"], " ", moyenne);
	moyenneGene += moyenne;
}
moyenneGene = ~~(moyenneGene / taille(matiere) * 100) / 100;
let bulletin = {"matiere": matiere, "moyenne generale": moyenneGene};
afficher(bulletin);
//afficher(matiere);
//afficher("Moyenne générale = ", moyenneGene);