/* -- chips.js

Helpers function for chips usage.
*/

/*
Use a given "shiled-like" chip if we are close the target & if not in cooldown

Args:
    * shield_chip: chip to use for dammage prevention
	* distanceToTarget: well, distante to target...
	* leek: leek upon which chip will be used
*/
function CHP_useShieldSolo(shield_chip, distanceToTarget, leek){
	if(distanceToTarget < 8 and getCooldown(shield_chip) == 0) {
		useChip(shield_chip, leek);
	}
}

/*
Use a given heal chip if life is under a given percentage & if not in cooldown

Args:
    * heal_chip: chip to use for healing
	* heal_threshold: threshold for healing (as percentage of total life)
	* leek: leek upon which chip will be used
*/
function CHP_useHealSolo(heal_chip, heal_threshold, leek) {
	var percentOfLife = (getLife() / getTotalLife()) * 100;
	if (percentOfLife <= heal_threshold and getCooldown(heal_chip) == 0){
		useChip(heal_chip, leek);
	}
}
