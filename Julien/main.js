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
var HEAL_THRESHOLD = 75;

// Leeks
var myself = getLeek();
var target = getNearestEnemy();

// Manage weapons
var tp_cost = getWeaponCost(WEAPON);
var weaponMinRange = getWeaponMinRange(WEAPON);

WPN_pickWeapon(WEAPON);

// Manage movement
var myCell = getCell();
var targetCell = getCell(target);
var distanteToTarget = getDistance(myCell, targetCell);

MVT_moveToShoot(target, weaponMinRange);

// Manage chips
CHP_useShieldSolo(SHIELD_CHIP, distanteToTarget, myself);
CHP_useHealSolo(HEAL_CHIP, HEAL_THRESHOLD, myself);

// Shoot with everything left
WPN_alphaStrike(target, tp_cost);
