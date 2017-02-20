/* -- main.ls

Base script for Jozay OS - Leek IA
*/

// Includes
include('Helpers/weapons.ls');

// Choose weapon
var weapon = WEAPON_DOUBLE_GUN;

pickWeapon(weapon);
var weaponRange = getWeaponMinRange(weapon);

// Placement
var enemy = getNearestEnemy();

// Keep enemy at range
var distanceToTarget = getDistance(getCell(), getCell(enemy));
var remainingMP = getMP();

if ((distanceToTarget - remainingMP) > weaponRange){
	moveToward(enemy);
}
else {
	moveAwayFrom(enemy);
}

// Shoot with everything left
alphaStrike(enemy);
