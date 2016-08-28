/*------------------------------------------------ Level Layout ----------------------------------------------*/
// Sub-class for levels and spawn times (contained seperately due to size)
var levelLayout = {
	/*-------------------------------- Zone 1 ------------------------------------*/
	level1: function(){
		if (levels.levelProgress == -1800){
			// Show basic tutorial text for the first level
			ui.markerArray.push(new textMarker(160, 0, "white", "Press the Left and Right arrow Keys to move!", 170));
			ui.markerArray.push(new textMarker(130, -600, "white", "Press the Space Bar to activate your bullet shield!", 370));
			ui.markerArray.push(new textMarker(70, -1200, "white", "Hold Z to stop shooting and X to slow down! (Editable in Options)", 570));
			ui.markerArray.push(new textMarker(110, -1800, "white", "Press P to pause - or click the button in the corner!", 770));
			ui.markerArray.push(new textMarker(110, -2400, "white", "Collect Powerups and Weapon Cubes to become stronger!", 970));
			ui.markerArray.push(new textMarker(140, -3000, "white", "Level Up to receive Upgrade Points for the Shop!", 1170));
			ui.markerArray.push(new textMarker(140, -3600, "white", "Try to achieve the Ace Score Rank for each level!", 1370));
			ui.markerArray.push(new textMarker(70, -4200, "white", "Remember, you can only be hit on the small blue dot on your ship!", 1570));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level2: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level3: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
	},
	level4: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level5: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level6: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	/*-------------------------------- Zone 2 ------------------------------------*/
	level7: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));	
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level8: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level9: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level10: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level11: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));	
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level12: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	/*-------------------------------- Zone 3 ------------------------------------*/
	level13: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level14: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
	},
	level15: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level16: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level17: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level18: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level19: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level20: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level21: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level22: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
	},
	level23: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
	},
	level24: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level25: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
	},
	level26: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level27: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level28: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level29: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level30: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level31: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
	},
	level32: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
	},
	level33: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
	},
	level34: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
			enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level35: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
	},
	level36: function(){
		if (levels.levelProgress == -1800){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1710){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
		}
		else if (levels.levelProgress == -1650){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -1580){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
		}
		else if (levels.levelProgress == -1450){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
		}
		else if (levels.levelProgress == -1350){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -1200){
			enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
		}
		else if (levels.levelProgress == -1050){
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
		}
		else if (levels.levelProgress == -950){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -800){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -650){
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
			enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));
		}
		else if (levels.levelProgress == -450){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -380){
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 15, 50));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -320){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
		}
		else if (levels.levelProgress == -250){
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
			enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
		}
		else if (levels.levelProgress == -200){
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
			enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));
		}
		else if (levels.levelProgress == -170){
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
		else if (levels.levelProgress == -140){
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));
			enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));
		}
	},
};

/*
Enemies

Levels 1+
enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, 100, 10, true, 3, 10));
enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, 50, 10, 1, 5));
enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, 200, 10, 40, 60, 5, 20));

Levels 3+
enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, 400, 15, 30, 130));

Levels 7+
enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, 150, 15, 15, 30, 10, 40));

Levels 9+
enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, 300, 15, 30, 30, 15, 60));

Levels 13+
enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, 250, 15, true, 40, 60, 12, 50));

Levels 15+
enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, 100, 30, 7, 25));

Levels 19+
enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, 1000, 40, 25, 200));

Levels 21+
enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, 400, 40, 5, 20));

Levels 25+
enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, 250, 60, 15, 100));

Levels 27+
enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, 1000, 60, 20, 20, 40, 400));

Levels 31+
enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, 1500, 70, 20, 20, 70, 700));

Levels 33+
enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, 3000, 80, 100, 1000));

*/