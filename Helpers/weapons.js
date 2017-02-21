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
Compute minimum damage dealt with a given weapon for a given leek.

Args:
    * leek: leek wielding the weapon
	* weapon: weapon used
*/
function WPN_getMinDamage(leek, weapon_effects) {

	var minDamage = null;
	var strength = getStrength(leek);

	for (var effect in weapon_effects) {

		if (effect[0] == EFFECT_DAMAGE) {
			minDamage += effect[1] + (1 + strength / 100);
		}
	}

	return minDamage;
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