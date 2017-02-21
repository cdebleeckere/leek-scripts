/* -- movements.js

Helpers function for movements.
*/

/*
Move step by step to keep target at range (at least minimum weapon range)

Args:
    * target: enemy leek
	* weaponMinRange : minimum range for current weapon usage
*/
function MVT_moveToShoot(target, weaponMinRange) {

	var remaining_mp = getMP();

	while(remaining_mp > 0 and not canUseWeapon(target)) {

		if(getDistance(getCell(), getCell(target)) >= weaponMinRange) {
			moveToward(target, 1);
		}
		else {
			moveAwayFrom(target, 1);
		}
		remaining_mp--;
	}

	return canUseWeapon(target);
}