/* -- weapons.ls

Helpers function for weapon management
*/

/*
Equip a weapon only if you don't have it already (save 1PT).

Args :
  weapon : weapon to equip.
*/
function pickWeapon(weapon) {

    if( getWeapon() != weapon ) {
        setWeapon(weapon);
    }
}

/*
Shoot with all TP left.

Args :
  target : enemy leek you want to transform into a punch card.
*/
function alphaStrike(target) {
	for (var tp = getTP(); tp > 0; tp--) {
		useWeapon(target);
	}
}