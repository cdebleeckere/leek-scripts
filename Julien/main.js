/* -- main.jjs

Base script for Jozay OS - Leek IA
*/

// Includes
include('Helpers/weapons.js');
include('Helpers/movement.js');
include('Helpers/chips.js');

// Constants
var WEAPON = WEAPON_DOUBLE_GUN;
var HEAL_CHIP = CHIP_CURE;
var SHIELD_CHIP = CHIP_SHIELD;

// Leeks
var myself = getLeek();

// Manage weapons
var tp_cost = getWeaponCost(WEAPON);
var weaponMinRange = getWeaponMinRange(WEAPON);

pickWeapon(WEAPON);

// Manage movement
var target = getNearestEnemy();
var myCell = getCell();
var targetCell = getCell(target);
var distanteToTarget = getDistance(myCell, targetCell);

moveToShoot(target, weaponMinRange);

// Manage chips
useShieldSolo(SHIELD_CHIP, distanteToTarget, myself);
useHealSolo(HEAL_CHIP, myself);

// Shoot with everything left
alphaStrike(target, tp_cost);
