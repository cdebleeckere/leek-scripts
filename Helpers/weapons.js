/* -- weapons.js

Helpers function for weapon management
*/

/*
Equip a weapon only if you don't have it already (save 1 TP).

Args :
    * weapon: weapon to equip.
*/
function WPN_pickWeapon(weapon) {

    if( getWeapon() != weapon ) {
        setWeapon(weapon);
    }
}

/*
Shoot with all TP left.

Args :
    * target: enemy leek you want to transform into a punch card.
*/
function WPN_alphaStrike(target, cost) {
	for (var tp = getTP(); tp > cost; tp--) {
		useWeapon(target);
	}
}