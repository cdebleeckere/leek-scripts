/* -- chips.js

Helpers function for chips usage.
*/

function useShieldSolo(shield_chip, distanceToTarget, leek){
	if(distanceToTarget < 8) {
		useChip(shield_chip, leek);
	}
}

function useHealSolo(heal_chip, leek){
	var percentOfLife = getLife() / getTotalLife();
	if (percentOfLife <= 50){
		useChip(heal_chip, leek);
	}
}
