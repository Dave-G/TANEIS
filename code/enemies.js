/*------------------------------------------------ Enemies ----------------------------------------------*/
var enemies = {
	freezeTimer: 0,
	enemyArray: new Array(),
	reset: function(){
		this.freezeTimer = 0;
		this.enemyArray = new Array();
	},
	// Run everything
	run: function(){
		// Loop through the array and perform actions on each
		for (var i = 0, enemy; enemy = this.enemyArray[i]; i++) {
		  // Remove enemy if it goes off screen
		  if (offScreen(enemy) || !enemy.hp){
		  	this.enemyArray.splice(i, 1);
			i--;
		  }
		  else{
		  	// Check for collisions between enemies and weapons
		  	for (var j = 0, weapon; weapon = weapons.weaponArray[j]; j++) {
			 	 if (collision(enemy, weapon)){
					 enemy.hurt(weapon, i, j);
			  	 }
				 if (enemy != this.enemyArray[i] || offScreen(enemy)){
					 break;
				 }
		 	}
			// Only move/draw if they were not killed
			if (enemy == this.enemyArray[i]){
				// scroll enemies down the screen
				enemy.y+=1;
				if (this.freezeTimer == 0){
		  			enemy.ai();
				}
				else{
					this.freezeTimer--;
				}
		  		enemy.draw();
			}
	   	  }
		}
	},
};

// Slider - moves horizontal to one side then slightly downwards as it turns, repeat
var slider = function(x, y, width, height, speedX, speedY, hp, dmg, movingLeft, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.movingLeft = movingLeft;
	this.exp = exp;
	this.score = score;
	return this;
};
slider.prototype.ai = function(){
	if (this.movingLeft){
		this.x -= this.speedX;
	}
	else{
		this.x += this.speedX;
	}
	if (this.x < 100){
		this.y += this.speedY;
		if (this.x < 25){
			this.movingLeft = false;
		}
	}
	else if (this.x > 668){
		this.y += this.speedY;
		if (this.x > 742){
			this.movingLeft = true;
		}
	}
};
slider.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
slider.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 7, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
slider.prototype.draw = function(){
	ctx.drawImage(sliderImg, this.x-16, this.y-16);
};

// Charger - charges at the player but cannot change X direction rapidly
var charger = function(x, y, width, height, speedX, speedY, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
charger.prototype.ai = function(){
	if (this.x+this.width < player.x){
		if (this.x + this.speedX > player.x + player.width){
			this.x = player.x-2;
		}
		else{
			this.x += this.speedX;
		}
	}
	else if (this.x > player.x + player.width){
		if (this.x - this.speedX < player.x){
			this.x = player.x-2;
		}
		else{
			this.x -= this.speedX;
		}
	}
	this.y += this.speedY
};
charger.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
charger.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 8, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-8, this.y-8, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
charger.prototype.draw = function(){
	ctx.drawImage(chargerImg, this.x-8, this.y-8);
};

// Shooter - lines up with the player and fires downwards
var shooter = function(x, y, width, height, speed, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.hp = hp;
	this.dmg = dmg;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
shooter.prototype.ai = function(){
	if (this.x < player.x - 12){
		this.x += this.speed;
	}
	else if (this.x > player.x + this.width-40){
		if (this.x < player.x + this.width-42){
			this.x -= 4;
		}
		else{
			this.x -= this.speed;
		}
	}
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
shooter.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
shooter.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 6, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
shooter.prototype.draw = function(){
	ctx.drawImage(shooterImg, this.x-16, this.y-16);
};

// Tank - slowly chases the player, lots of hp
var tank = function(x, y, width, height, speedX, speedY, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
tank.prototype.ai = function(){
	if (this.x < player.x - 22){
		this.x += this.speedX;
	}
	else if (this.x > player.x - 16){
		this.x -= this.speedX;
	}
	if (this.y < player.y - 22){
		this.y += this.speedY;
	}
	else if (this.y > player.y - 16){
		this.y -= this.speedY;
	}
};
tank.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
tank.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 4, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
tank.prototype.draw = function(){
	ctx.drawImage(tankImg, this.x-32, this.y-32);
};

// Spreader - shoots a spread of bullets but does not move
var spreader = function(x, y, width, height, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
spreader.prototype.ai = function(){
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 8, this.y + this.height, 8, 8, -3, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
spreader.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
spreader.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 5, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
spreader.prototype.draw = function(){
	ctx.drawImage(spreaderImg, this.x-16, this.y-16);
};

// Sprayer - charges downwards shooting in an X pattern
var sprayer = function(x, y, width, height, speed, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.hp = hp;
	this.dmg = dmg;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
sprayer.prototype.ai = function(){
	this.y += this.speed;
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 12, this.y + 4, 8, 8, -6, -4, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + 4, 8, 8, 6, -4, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 12, this.y + 4, 8, 8, -6, 6, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + 4, 8, 8, 6, 6, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
sprayer.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
sprayer.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 6, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
sprayer.prototype.draw = function(){
	ctx.drawImage(sprayerImg, this.x-16, this.y-16);
};

// Slider Shooter - slider that also shoots downwards
var sliderShooter = function(x, y, width, height, speedX, speedY, hp, dmg, movingLeft, bulletTimer, bulletTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.movingLeft = movingLeft;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
sliderShooter.prototype.ai = function(){
	if (this.movingLeft){
		this.x -= this.speedX;
	}
	else{
		this.x += this.speedX;
	}
	if (this.x < 100){
		this.y += this.speedY;
		if (this.x < 25){
			this.movingLeft = false;
		}
	}
	else if (this.x > 668){
		this.y += this.speedY;
		if (this.x > 742){
			this.movingLeft = true;
		}
	}
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
sliderShooter.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
sliderShooter.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 6, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
sliderShooter.prototype.draw = function(){
	ctx.drawImage(sliderShooterImg, this.x-16, this.y-16);
};

// Cluster Mine - enemy version of the player's cluster weapon
var clusterMine = function(x, y, width, height, speedX, speedY, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
clusterMine.prototype.ai = function(){
	this.x+=this.speedX;
	this.y+=this.speedY+1;
};
clusterMine.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
clusterMine.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		// Explode on death
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 4, 4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -4, -4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -4, 4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 4, -4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 0, 5, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 5, 0, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -5, 0, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 0, -5, Math.round(this.dmg/2)));
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 8, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
clusterMine.prototype.draw = function(){
	ctx.drawImage(clusterMineImg, this.x-16, this.y-16);
};

// Zipper - bounces up and down the screen quickly
var zipper = function(x, y, width, height, speedX, speedY, movingDown, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.movingDown = movingDown;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
zipper.prototype.ai = function(){
	if (this.x < 0 || this.x > 750){
		this.speedX = -this.speedX;
	}
	if ((this.y < 0 && !this.movingDown) || (this.y > player.y && this.movingDown)){
		this.speedY = -this.speedY;
		this.movingDown = !this.movingDown;
	}
	this.x+=this.speedX;
	this.y+=this.speedY;
};
zipper.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
zipper.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 5, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
zipper.prototype.draw = function(){
	ctx.drawImage(zipperImg, this.x-32, this.y-32);
};

// Zapper - bounces up and down the screen slowly until killed, then spawns a zipper
var zapper = function(x, y, width, height, speedX, speedY, movingDown, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.movingDown = movingDown;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
zapper.prototype.ai = function(){
	if (this.x < 0 || this.x > 750){
		this.speedX = -this.speedX;
	}
	if ((this.y < 0 && !this.movingDown) || (this.y > player.y && this.movingDown)){
		this.speedY = -this.speedY;
		this.movingDown = !this.movingDown;
	}
	this.x+=this.speedX;
	this.y+=this.speedY;
};
zapper.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
zapper.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 7, this.x, this.y);
		enemies.enemyArray.push(new zipper(this.x, this.y, 64, 64, 3, 8, this.movingDown, 1000, 40, 25, 200));
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
zapper.prototype.draw = function(){
	ctx.drawImage(zapperImg, this.x-32, this.y-32);
};

// Cluster Bomb - better enemy version of the player's cluster weapon
var clusterBomb = function(x, y, width, height, speedX, speedY, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
clusterBomb.prototype.ai = function(){
	this.x+=this.speedX;
	this.y+=this.speedY+1;
};
clusterBomb.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
clusterBomb.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		// Explode on death
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 4, 4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 3, 4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 4, 3, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -4, -4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -3, -4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -4, -3, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -4, 4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -3, 4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -4, 3, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 4, -4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 3, -4, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 4, -3, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 0, 5, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 5, 0, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, -5, 0, Math.round(this.dmg/2)));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y+14, 8, 8, 0, -5, Math.round(this.dmg/2)));
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 8, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
clusterBomb.prototype.draw = function(){
	ctx.drawImage(clusterBombImg, this.x-16, this.y-16);
};

// Gunner - shoots a spread of bullets but does not move
var gunner = function(x, y, width, height, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
gunner.prototype.ai = function(){
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 8, this.y + this.height, 8, 8, -3, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 8, this.y + this.height, 8, 8, -3, 3, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 8, this.y + this.height, 8, 8, -5, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 8, this.y + this.height, 8, 8, -5, 3, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + this.width, this.y + this.height, 8, 8, 3, 3, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + this.width, this.y + this.height, 8, 8, 5, 3, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
gunner.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
gunner.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 5, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
gunner.prototype.draw = function(){
	ctx.drawImage(gunnerImg, this.x-16, this.y-16);
};

// Speed Shooter - lines up with the player and fires downwards and horizontally
var speedShooter = function(x, y, width, height, speed, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.hp = hp;
	this.dmg = dmg;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
speedShooter.prototype.ai = function(){
	if (this.x < player.x - 12){
		this.x += this.speed;
	}
	else if (this.x > player.x + this.width-40){
		if (this.x < player.x + this.width-42){
			this.x -= 4;
		}
		else{
			this.x -= this.speed;
		}
	}
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y+12, 8, 8, -5, 2, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y+12, 8, 8, 5, 2, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y+12, 8, 8, -5, 0, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y+12, 8, 8, 5, 0, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
speedShooter.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
speedShooter.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 5, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
speedShooter.prototype.draw = function(){
	ctx.drawImage(speedShooterImg, this.x-16, this.y-16);
};

// Super Tank - slowly chases the player, tons of hp
var superTank = function(x, y, width, height, speedX, speedY, hp, dmg, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	return this;
};
superTank.prototype.ai = function(){
	if (this.x < player.x - 22){
		this.x += this.speedX;
	}
	else if (this.x > player.x - 16){
		this.x -= this.speedX;
	}
	if (this.y < player.y - 22){
		this.y += this.speedY;
	}
	else if (this.y > player.y - 16){
		this.y -= this.speedY;
	}
};
superTank.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
superTank.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 3, this.x, this.y);
		particles.particleArray.push(new deathParticle(this.x-16, this.y-16, 64, 64, 2, 1, randomInt(1,4), 15));
		randomExplosionSound();
		this.y = 10000;
	}
	weapon.hit(j);
};
superTank.prototype.draw = function(){
	ctx.drawImage(superTankImg, this.x-32, this.y-32);
};