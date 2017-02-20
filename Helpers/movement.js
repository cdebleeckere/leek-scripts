/* -- movements.js

Helpers function for movements.
*/

function moveToShoot(target, weaponMinRange) {

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
}