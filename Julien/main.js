/* -- main.jjs

Base script for Jozay OS - Leek IA
*/

// Includes
include('Helpers/weapons.js');
include('Helpers/movement.js');

// Choose weapon
var weapon = WEAPON_DOUBLE_GUN;
var tp_cost = getWeaponCost(weapon);
var weaponMinRange = getWeaponMinRange(weapon);

pickWeapon(weapon);

// Manage movement
var enemy = getNearestEnemy();
moveToShoot(enemy, weaponMinRange);

// Shoot with everything left
alphaStrike(enemy, tp_cost);
