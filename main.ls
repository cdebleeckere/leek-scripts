/* -- main.ls

Base script for Jozay OS - Leek IA
*/

// Includes
include('Helpers/weapons.ls');

// Choose weapon
pickWeapon(WEAPON_DOUBLE_GUN);

// Placement
var enemy = getNearestEnemy();
moveToward(enemy);

// Shoot with everything left
alphaStrike(enemy);

