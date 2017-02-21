/* -- talk.js

Helpers function for talking.
*/

function TLK_tauntEnemy(target) {

	var enemyName = getName(target);
	var taunts = [
		"Bagdad Gaming !",
		"Ca sent le sapin.",
		"Et d'la main gauche !",
		"As-tu déja ramassé tes dents avec les doigts cassés " + enemyName + "?",
		"Je pue peut-être, mais j'ai un gros flingue.",
		"Je met les pieds où je veux " + enemyName + ", et c'est souvent dans la geule."
	];

	say(taunts[ randInt(0, count(taunts))]);
}