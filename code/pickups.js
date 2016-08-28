/*------------------------------------------------ Pickups ----------------------------------------------*/
var pickups = {
	pickupArray: new Array(),
	reset: function(){
		this.pickupArray = new Array();
	},
	// Randomly drop a pickup based on chance
	randomDrop: function(min, max, x, y){
		var drops = 1;
		var dropChance = randomInt(min, max)+upgrades.itemDropRate+Math.floor(player.handicap/3);
		if (player.luckyDrops > 0){
			dropChance+=2;
			player.luckyDrops--;
		}
		if (dropChance >= max){
			// Drop 2 items if over the max at a 50% chance
			if (dropChance > max){
				if (randomInt(1,2) == 2){
					drops++;
				}
			}
			// Drop 3 items if 5 over the max at a 25% chance (max roll + max drop rate)
			if (dropChance >= max+5){
				if (randomInt(1,4) == 4){
					drops++;
				}
			}
			while (drops != 0){
				// Determine if it will be a weapon or a powerup
				if (randomInt(1,3) == 3){
					// Determine the type of powerup dropped
					var powerupNum = randomInt(1,6);
					if (powerupNum == 1){
						this.pickupArray.push(new powerupPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "speed"));
					}
					else if (powerupNum == 2){
						this.pickupArray.push(new powerupPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "shield"));
					}
					else if (powerupNum == 3){
						this.pickupArray.push(new powerupPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "doubleShot"));
					}
					else if (powerupNum == 4){
						this.pickupArray.push(new powerupPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "freeze"));
					}
					else if (powerupNum == 5){
						this.pickupArray.push(new powerupPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "collector"));
					}
					else if (powerupNum == 6){
						this.pickupArray.push(new powerupPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "luck"));
					}
				}
				else{
					// Determine the type of weapon dropped
					var weaponNum = randomInt(1,6);
					if (weaponNum == 1){
						this.pickupArray.push(new weaponPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "bullet"));
					}
					else if (weaponNum == 2){
						this.pickupArray.push(new weaponPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "homingBullet"));
					}
					else if (weaponNum == 3){
						this.pickupArray.push(new weaponPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "boomerang"));
					}
					else if (weaponNum == 4){
						this.pickupArray.push(new weaponPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "spinner"));
					}
					else if (weaponNum == 5){
						this.pickupArray.push(new weaponPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "bouncer"));
					}
					else if (weaponNum == 6){
						this.pickupArray.push(new weaponPickup(randomInt(x-5, x+5), randomInt(y-5, y+5), 32, 32, "cluster"));
					}
				}
			drops--;
			}
		}
	},
	// Run everything
	run: function(){
		// Loop through the array and perform actions on each
		for (var i = 0, pickup; pickup = this.pickupArray[i]; i++) {
		  // Remove enemy weapon if it goes off screen
		  if (offScreen(pickup)){
		  	this.pickupArray.splice(i, 1);
			i--;
		  }
		  else{
		  	pickup.move();
		  	pickup.draw();
	  	  }
		}
	},
};

// Weapon pickup
var weaponPickup = function(x, y, width, height, weapon){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.weapon = weapon;
};
weaponPickup.prototype.move = function(){
	this.y+=4;
};
weaponPickup.prototype.collect = function(){
	player.score+=100;
	ui.spawnScoreMarker(100);
	if (this.weapon == "bullet"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "yellow", "Bullet Upgrade!", 30));
		if (!weapons.bulletUpRightActive){
			weapons.bulletUpRightActive = true;
			weapons.bulletUpRightTimer = weapons.bulletTimer;
		}
		else if (!weapons.bulletUpLeftActive){
			weapons.bulletUpLeftActive = true;
			weapons.bulletUpLeftTimer = weapons.bulletTimer;
		}
		else if (!weapons.bulletUpRight2Active){
			weapons.bulletUpRight2Active = true;
			weapons.bulletUpRight2Timer = weapons.bulletTimer;
		}
		else if (!weapons.bulletUpLeft2Active){
			weapons.bulletUpLeft2Active = true;
			weapons.bulletUpLeft2Timer = weapons.bulletTimer;
		}
		else if (weapons.bulletTimerMax > 0){
			weapons.bulletTimerMax--;
			weapons.bulletUpRightTimerMax--;
			weapons.bulletUpLeftTimerMax--;
			weapons.bulletUpRight2TimerMax--;
			weapons.bulletUpLeft2TimerMax--;
		}
	}
	else if (this.weapon == "homingBullet"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "teal", "Homing Upgrade!", 30));
		if (!weapons.homingBulletActive){
			weapons.homingBulletActive = true;
		}
		else if (!weapons.homingBullet2Active){
			weapons.homingBullet2Active = true;
			weapons.homingBullet2Timer = weapons.homingBulletTimer;
		}
		else if (weapons.homingBulletTimerMax > 0){
			weapons.homingBulletTimerMax--;
			weapons.homingBullet2TimerMax--;
		}
		
	}
	else if (this.weapon == "boomerang"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "purple", "Boomerang Upgrade!", 30));
		if (!weapons.boomerangActive){
			weapons.boomerangActive = true;
		}
		else if (!weapons.boomerang2Active){
			weapons.boomerang2Active = true;
			weapons.boomerang2Timer = weapons.boomerangTimer;
		}
		else if (weapons.boomerangTimerMax > 0){
			weapons.boomerangTimerMax--;
			weapons.boomerang2TimerMax--;
		}	
	}
	else if (this.weapon == "spinner"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "orange", "Spinner Upgrade!", 30));
		if (!weapons.spinnerActive){
			weapons.spinnerActive = true;
		}
		else if (!weapons.spinner2Active){
			weapons.spinner2Active = true;
			weapons.spinner2Timer = weapons.spinnerTimer;
		}
		else if (weapons.spinnerTimerMax > 0){
			weapons.spinnerTimerMax--;
			weapons.spinner2TimerMax--;
		}
	}
	else if (this.weapon == "bouncer"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "green", "Bouncer Upgrade!", 30));
		if (!weapons.bouncerActive){
			weapons.bouncerActive = true;
		}
		else if (!weapons.spinner2Active){
			weapons.bouncer2Active = true;
			weapons.bouncer2Timer = weapons.bouncerTimer;
		}
		else if (weapons.bouncerTimerMax > 0){
			weapons.bouncerTimerMax--;
			weapons.bouncer2TimerMax--;
		}
	}
	else if (this.weapon == "cluster"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "blue", "Cluster Upgrade!", 30));
		if (!weapons.clusterActive){
			weapons.clusterActive = true;
		}
		else if (weapons.clusterTimerMax > 0){
			weapons.clusterTimerMax--;
		}
	}
	// Pickup sounds
	if (randomInt(1,2) == 2){
		pickup1Sound.currentTime=0;
		pickup1Sound.play();
	}
	else{
		pickup2Sound.currentTime=0;
		pickup2Sound.play();
	}
	// Will be spliced out from being off screen
	this.y = 10000;
};
weaponPickup.prototype.draw = function(){
	if (this.weapon == "bullet"){
		ctx.drawImage(yellowCube, this.x-16, this.y-16);
	}
	else if (this.weapon == "homingBullet"){
		ctx.drawImage(tealCube, this.x-16, this.y-16);
	}
	else if (this.weapon == "boomerang"){
		ctx.drawImage(purpleCube, this.x-16, this.y-16);
	}
	else if (this.weapon == "spinner"){
		ctx.drawImage(orangeCube, this.x-16, this.y-16);
	}
	else if (this.weapon == "bouncer"){
		ctx.drawImage(greenCube, this.x-16, this.y-16);
	}
	else if (this.weapon == "cluster"){
		ctx.drawImage(blueCube, this.x-16, this.y-16);
	}
};

// Powerup pickup
var powerupPickup = function(x, y, width, height, powerup){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.powerup = powerup;
};
powerupPickup.prototype.move = function(){
	this.y+=4;
};
powerupPickup.prototype.collect = function(){
	player.score+=100;
	ui.spawnScoreMarker(100);
	if (this.powerup == "speed"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "yellow", "Speed Boost!", 30));
		player.speedBoostTimer = player.speedBoostTimerMax;
	}
	else if (this.powerup == "shield"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "teal", "Shield Boost!", 30));
		if (shield.active){
			shield.timer = shield.timerMax;
		}
		else if (shield.cooldown > 0){
			shield.cooldown = 0;
			shield.timer = 0;
		}
	}
	else if (this.powerup == "doubleShot"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "red", "Double Shot!", 30));
		weapons.doubleShotTimer = weapons.doubleShotTimerMax;
	}
	else if (this.powerup == "freeze"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "blue", "Freeze!", 30));
		enemies.freezeTimer = 300;
	}
	else if (this.powerup == "collector"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "orange", "Collector!", 30));
		player.collectorTimer = 600;
	}
	else if (this.powerup == "luck"){
		ui.markerArray.push(new pickupMarker(player.x-64, player.y, "green", "Luck!", 30));
		player.luckyDrops = 7;
	}
	// Pickup sounds
	if (randomInt(1,2) == 2){
		pickup1Sound.currentTime=0;
		pickup1Sound.play();
	}
	else{
		pickup2Sound.currentTime=0;
		pickup2Sound.play();
	}
	// Will be spliced out from being off screen
	this.y = 10000;
};
powerupPickup.prototype.draw = function(){
	if (this.powerup == "speed"){
		ctx.drawImage(yellowArrow, this.x-16, this.y-16);
	}
	else if (this.powerup == "shield"){
		ctx.drawImage(tealArrow, this.x-16, this.y-16);
	}
	else if (this.powerup == "doubleShot"){
		ctx.drawImage(redArrow, this.x-16, this.y-16);
	}
	else if (this.powerup == "freeze"){
		ctx.drawImage(blueArrow, this.x-16, this.y-16);
	}
	else if (this.powerup == "collector"){
		ctx.drawImage(orangeArrow, this.x-16, this.y-16);
	}
	else if (this.powerup == "luck"){
		ctx.drawImage(greenArrow, this.x-16, this.y-16);
	}
};