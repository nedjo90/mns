/* ------------------------------------------------------------------------------------ REGLES DU JEU ------------------------------------------------------------------------------------ *\

Les tours de Hanoï sont un jeu de réflexion consistant à déplacer des disques de diamètres différents d'une tour de «départ» à une tour d'«arrivée» en passant par une tour «intermédiaire», 
et ceci en un minimum de coups, tout en respectant les règles suivantes :
- on ne peut déplacer plus d'un disque à la fois ;
- on ne peut placer un disque que sur un autre disque plus grand que lui ou sur un emplacement vide.

\* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------ INFORMATIONS ------------------------------------------------------------------------------------- *\

Dans le cadre de ce challenge, vous avez accès à une procédure supplémentaire, qui permet de déplacer une pièce d'une tour à une autre.
Syntaxe : deplacer("A","B");
Dans l'exemple ci-dessus, la procédure retire la première pièce de la tour "A" (départ) pour la positionner en haut de la tour "B" (arrivée).
Chaque appel à cette procédure affichera automatiquement à l'écran le résultat après le déplacement. 
Le nombre de pièce est initialement fixé à 5, mais il peut-être modifié en changeant la valeur de la variable "nombreDePieces" dans le fichier "library.js".
Remarque : 
Le nombre de coups nécessaires dépend du nombre de pièces (2^n - 1 coups pour n pièces). Si le nombre de pièces est trop élevé, l'algorithme sera trop long à exécuter pour le navigateur.

\* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function hanoi(n, D, I, F) {
	//arrêt quand on deplace le dernier à deplacer (la plus petite pièce)
	if (n === 1) {
		deplacer(D, F);
		return;
	}
	//deplace de la tour de depart vers la fin
	hanoi(n - 1, D, F, I);
	deplacer(D, F);
	//deplacement de l'intermédiaire vers la fin
	hanoi(n - 1, I, D, F);
}

hanoi(nombreDePieces, "B", "A", "C")
