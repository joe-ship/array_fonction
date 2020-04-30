let nicks = [] , nick;
while (nick = prompt('veuillez entrez un prenom je vous en prie')) {
/*si la valeur donnee a nick est valide, c;est a dire !==0 alors la boucle s'execute
 */
    nicks.push(nick);// ceci consiste a ajouter le nouveau prenom au tableau
}
if(nicks.length > 0) {
    //on verifie le nombre item
    alert(nicks.join(' '));// affichage des prenoms a la suite
}else {
    alert('pas de prenom en memoire');
}
alert(nicks);