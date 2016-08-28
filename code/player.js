/*------------------------------------------------ Player ----------------------------------------------*/
// Player only has a 2x2 pixel hitbox, not the entire graphic
var player = {
	x: 390,
	y: 505,
	width: 2,
	height: 2,
	speed: 8,
	hp: 110,
	hpMax: 110,
	exp: 0,
	score: 0,
	tempScore: 0,
	level: 1,
	upgradePoints: 0,
	invulnTimer: 0,
	invulnTimerMax: 30,
	speedBoostTimer: 0,
	speedBoostTimerMax: 120,
	regenTimer: 60,
	regenTimerMax: 60,
	collectorTimer: 0,
	luckyDrops: 0,
	// Make the game slightly easier when the player repeatedly dies without completing a level
	// 1 death = +3 frame invulnerability after being hit, 3 deaths = +1 drop rate
	// Handicap resets when a level is completed or hyper mode is started
	handicap: 0,
	reset: function(){
		this.x = 390;
		this.y = 505;
		this.hp = this.hpMax;
		this.score = 0;
		this.tempScore = 0;
		this.invulnTimer = 0;
		this.speedBoostTimer = 0;
		this.regenTimer = this.regenTimerMax;
		this.collectorTimer = 0;
		this.luckyDrops = 0;
	},
	// Prevent moving off-screen
	bound: function(){
		if (this.x < 0){
			this.x = 0;
		}
		if (this.x > 798){
			this.x = 798;
		}
	},
	// Key interactions
	keys: function(){
		// Left Arrow - move left, hold X to move slow regardless of speed boosts
		if (37 in keysDown){
			if (88 in keysDown){
				this.x-=this.speed/2;
			}
			else{
				this.x-=this.speed;
				if (this.speedBoostTimer > 0){
					this.x-=this.speed;
					this.speedBoostTimer--;
				}
			}
		}
		// Right Arrow - move right, hold X to move slow regardless of speed boosts
		else if (39 in keysDown){
			if (88 in keysDown){
				this.x+=this.speed/2;
			}
			else{
				this.x+=this.speed;
				if (this.speedBoostTimer > 0){
					this.x+=this.speed;
					this.speedBoostTimer--;
				}
			}
		}
	},
	// Collide with objects
	collide: function(){
		// Enemies
		if (this.invulnTimer == 0){
			for (var i = 0, enemy; enemy = enemies.enemyArray[i]; i++) {
				if (collision(this, enemy)){
					enemy.hit(i);
					if (menus.soundOn){
						hurtSound.currentTime=0;
						hurtSound.play();
					}
					this.invulnTimer = this.invulnTimerMax+(this.handicap*3);
				}
			}
		}
		// Enemy weapons
		if (this.invulnTimer == 0){
			for (var j = 0, enemyWeapon; enemyWeapon = enemyWeapons.enemyWeaponArray[j]; j++) {
				if (collision(this, enemyWeapon)){
					enemyWeapon.hit(j, true);
					if (menus.soundOn){
						hurtSound.currentTime=0;
						hurtSound.play();
					}
					this.invulnTimer = this.invulnTimerMax+(this.handicap*3);
				}
			}
		}
		// Pickups
		for (var k = 0, pickup; pickup = pickups.pickupArray[k]; k++) {
			// Suck in pickups if the power up is active
			if (this.collectorTimer > 0){
				if (pickup.x > player.x){
					pickup.x-=5;
				}
				else if (pickup.x+pickup.width < player.x){
					pickup.x+=5;
				}
				this.collectorTimer--;
			}
			if (collision(this, pickup)){
				pickup.collect();
			}
		}	
	},
	// Check for level ups
	levelUp: function(){
		if (this.exp > this.level*this.level*100 && this.level < 40){
			this.level++;
			this.upgradePoints++;
			// Give two points for level 40
			if (this.level == 40){
				this.upgradePoints++;
			}
			this.hpMax += 10;
			this.hp = this.hpMax;
			ui.levelUpTimer = ui.levelUpTimerMax;
			ui.spawnLevelUpMarker();
			if (menus.soundOn){
				learnSound.currentTime=0;
				learnSound.play();
			}
		}
	},
	// Check HP for death and limits
	hpCheck: function(){
		if (this.hp <= 0){
			this.hp = 0;
			this.handicap++;
			if (menus.soundOn){
				failureSound.currentTime=0;
				failureSound.play();
			}
			transitions.createFade(1, 60, "gray", "gameover");
		}
		// Health regeneration
		else{
			if (upgrades.healthRegeneration > 0){
				if (this.regenTimer <= 0){
					this.hp += upgrades.healthRegeneration;
					ui.spawnHpExpMarker(-upgrades.healthRegeneration, false);
					this.regenTimer = this.regenTimerMax;
				}
				else{
					this.regenTimer--;
				}
			}
		}
		if (this.hp > this.hpMax){
			this.hp = this.hpMax;
		}
	},
	// Draw the player
	draw: function(){
		// Fade when hit
		if (this.invulnTimer > 0){
			ctx.globalAlpha = .5;
		}
		if (37 in keysDown){
			ctx.drawImage(playerShipLeft, this.x-23, this.y-20);
		}
		else if (39 in keysDown){
			ctx.drawImage(playerShipRight, this.x-23, this.y-20);
		}
		else{
			ctx.drawImage(playerShip, this.x-23, this.y-20);
		}
		if (this.invulnTimer > 0){
			ctx.globalAlpha = 1;
			this.invulnTimer--;
		}
	},
	// Run everything
	run: function(){
		this.keys();
		this.bound();
		this.collide();
		this.hpCheck();
		this.levelUp();
		this.draw();
	},
};