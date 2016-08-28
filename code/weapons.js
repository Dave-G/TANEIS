/*------------------------------------------------ Weapons ----------------------------------------------*/
var weapons = {
	doubleShotTimer: 0,
	doubleShotTimerMax: 300,
	bulletActive: true,
	bulletTimer: 0,
	bulletTimerMax: 30,
	bulletUpRightActive: false,
	bulletUpRightTimer: 0,
	bulletUpRightTimerMax: 30,
	bulletUpRight2Active: false,
	bulletUpRight2Timer: 0,
	bulletUpRight2TimerMax: 30,
	bulletUpLeftActive: false,
	bulletUpLeftTimer: 0,
	bulletUpLeftTimerMax: 30,
	bulletUpLeft2Active: false,
	bulletUpLeft2Timer: 0,
	bulletUpLeft2TimerMax: 30,
	homingBulletActive: false,
	homingBulletTimer: 0,
	homingBulletTimerMax: 60,
	homingBullet2Active: false,
	homingBullet2Timer: 0,
	homingBullet2TimerMax: 60,
	boomerangActive: false,
	boomerangTimer: 0,
	boomerangTimerMax: 45,
	boomerang2Active: false,
	boomerang2Timer: 0,
	boomerang2TimerMax: 45,
	spinnerActive: false,
	spinnerTimer: 0,
	spinnerTimerMax: 45,
	spinner2Active: false,
	spinner2Timer: 0,
	spinner2TimerMax: 45,
	bouncerActive: false,
	bouncerTimer: 0,
	bouncerTimerMax: 45,
	bouncer2Active: false,
	bouncer2Timer: 0,
	bouncer2TimerMax: 45,
	clusterActive: false,
	clusterTimer: 0,
	clusterTimerMax: 150,
	weaponArray: new Array(),
	reset: function(){
		this.doubleShotTimer = 0;
		this.bulletTimer = 0;
		this.bulletTimerMax = 30;
		this.bulletUpRightActive = false;
		this.bulletUpRightTimer = 0;
		this.bulletUpRightTimerMax = 30;
		this.bulletUpRight2Active = false;
		this.bulletUpRight2Timer = 0;
		this.bulletUpRight2TimerMax = 30;
		this.bulletUpLeftActive = false;
		this.bulletUpLeftTimer = 0;
		this.bulletUpLeftTimerMax = 30;
		this.bulletUpLeft2Active = false;
		this.bulletUpLeft2Timer = 0;
		this.bulletUpLeft2TimerMax = 30;
		this.homingBulletActive = false;
		this.homingBulletTimer = 0;
		this.homingBulletTimerMax = 60;
		this.homingBullet2Active = false;
		this.homingBullet2Timer = 0;
		this.homingBullet2TimerMax = 60;
		this.boomerangActive = false;
		this.boomerangTimer = 0;
		this.boomerangTimerMax = 45;
		this.boomerang2Active = false;
		this.boomerang2Timer= 0;
		this.boomerang2TimerMax = 45;
		this.spinnerActive = false;
		this.spinnerTimer = 0;
		this.spinnerTimerMax = 45;
		this.spinner2Active = false;
		this.spinner2Timer = 0;
		this.spinner2TimerMax = 45;
		this.bouncerActive = false;
		this.bouncerTimer = 0;
		this.bouncerTimerMax = 60;
		this.bouncer2Active = false;
		this.bouncer2Timer = 0;
		this.bouncer2TimerMax = 60;
		this.clusterActive = false;
		this.clusterTimer = 0;
		this.clusterTimerMax = 150;
		this.weaponArray = new Array();
	},
	// Fire weapons
	fire: function(){
		// Fire bullets
		if (this.bulletActive){
			if (this.bulletTimer == 0){
				this.weaponArray.push(new bullet(player.x, player.y-4, 8, 8, 0, 10, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
				this.bulletTimer = this.bulletTimerMax;
			}
			else{
				this.bulletTimer--;
			}
		}
		if (this.bulletUpRightActive){
			if (this.bulletUpRightTimer == 0){
				this.weaponArray.push(new bullet(player.x, player.y-4, 8, 8, 4, 9, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
				this.bulletUpRightTimer = this.bulletUpRightTimerMax;
			}
			else{
				this.bulletUpRightTimer--;
			}
		}
		if (this.bulletUpRight2Active){
			if (this.bulletUpRight2Timer == 0){
				this.weaponArray.push(new bullet(player.x, player.y-4, 8, 8, 6, 7, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
				this.bulletUpRight2Timer = this.bulletUpRight2TimerMax;
			}
			else{
				this.bulletUpRight2Timer--;
			}
		}
		if (this.bulletUpLeftActive){
			if (this.bulletUpLeftTimer == 0){
				this.weaponArray.push(new bullet(player.x, player.y-4, 8, 8, -4, 9, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
				this.bulletUpLeftTimer = this.bulletUpLeftTimerMax;
			}
			else{
				this.bulletUpLeftTimer--;
			}
		}
		if (this.bulletUpLeft2Active){
			if (this.bulletUpLeft2Timer == 0){
				this.weaponArray.push(new bullet(player.x, player.y-4, 8, 8, -6, 7, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
				this.bulletUpLeft2Timer = this.bulletUpLeft2TimerMax;
			}
			else{
				this.bulletUpLeft2Timer--;
			}
		}
		if (this.homingBulletActive){
			if (this.homingBulletTimer == 0){
				// Pick a random enemy to target, or just shoot forward
				if (enemies.enemyArray.length == 0){
					this.weaponArray.push(new homingBullet(player.x+player.width, player.y-4, 16, 16, 4, 8, player.x+player.width, Math.round(250*(1+(upgrades.weaponDamageMultiplier/10)))));
				}
				else{
					var i = randomInt(0, enemies.enemyArray.length-1);
					this.weaponArray.push(new homingBullet(player.x+player.width, player.y-4, 16, 16, 4, 8, enemies.enemyArray[i].x, i, Math.round(250*(1+(upgrades.weaponDamageMultiplier/10)))));
				}
				this.homingBulletTimer = this.homingBulletTimerMax;
			}
			else{
				this.homingBulletTimer--;
			}
		}
		if (this.homingBullet2Active){
			if (this.homingBullet2Timer == 0){
				// Pick a random enemy to target, or just shoot forward
				if (enemies.enemyArray.length == 0){
					this.weaponArray.push(new homingBullet(player.x-16, player.y-4, 16, 16, 4, 8, player.x-16, Math.round(250*(1+(upgrades.weaponDamageMultiplier/10)))));
				}
				else{
					var i = randomInt(0, enemies.enemyArray.length-1);
					this.weaponArray.push(new homingBullet(player.x-16, player.y-4, 16, 16, 4, 8, enemies.enemyArray[i].x, i, Math.round(250*(1+(upgrades.weaponDamageMultiplier/10)))));
				}
				this.homingBullet2Timer = this.homingBullet2TimerMax;
			}
			else{
				this.homingBullet2Timer--;
			}
		}
		if (this.boomerangActive){
			if (this.boomerangTimer == 0){
				this.weaponArray.push(new boomerang(player.x-16, player.y+8, 16, 16, player.speed/2, 8, Math.round(15*(1+(upgrades.weaponDamageMultiplier/10))), true));
				this.boomerangTimer = this.boomerangTimerMax;
			}
			else{
				this.boomerangTimer--;
			}
		}
		if (this.boomerang2Active){
			if (this.boomerang2Timer == 0){
				this.weaponArray.push(new boomerang(player.x+player.width, player.y+8, 16, 16, player.speed/2, 8, Math.round(15*(1+(upgrades.weaponDamageMultiplier/10))), true));
				this.boomerang2Timer = this.boomerang2TimerMax;
			}
			else{
				this.boomerang2Timer--;
			}
		}
		if (this.spinnerActive){
			if (this.spinnerTimer == 0){
				this.weaponArray.push(new spinner(player.x-16, player.y+8, 16, 16, -16, 4, Math.round(25*(1+(upgrades.weaponDamageMultiplier/10))), 0));
				this.spinnerTimer = this.spinnerTimerMax;
			}
			else{
				this.spinnerTimer--;
			}
		}
		if (this.spinner2Active){
			if (this.spinner2Timer == 0){
				this.weaponArray.push(new spinner(player.x+player.width, player.y+8, 16, 16, 16, 4, Math.round(25*(1+(upgrades.weaponDamageMultiplier/10))), 2));
				this.spinner2Timer = this.spinner2TimerMax;
			}
			else{
				this.spinner2Timer--;
			}
		}
		if (this.bouncerActive){
			if (this.bouncerTimer == 0){
				this.weaponArray.push(new bouncer(player.x-16, player.y+8, 16, 16, 8, Math.round(10*(1+(upgrades.weaponDamageMultiplier/10))), 0, 60));
				this.bouncerTimer = this.bouncerTimerMax;
			}
			else{
				this.bouncerTimer--;
			}
		}
		if (this.bouncer2Active){
			if (this.bouncer2Timer == 0){
				this.weaponArray.push(new bouncer(player.x+player.width, player.y+8, 16, 16, -8, Math.round(10*(1+(upgrades.weaponDamageMultiplier/10))), 2, 60));
				this.bouncer2Timer = this.bouncer2TimerMax;
			}
			else{
				this.bouncer2Timer--;
			}
		}
		if (this.clusterActive){
			if (this.clusterTimer == 0){
				this.weaponArray.push(new cluster(player.x-16, player.y-32, 32, 32, 2, Math.round(300*(1+(upgrades.weaponDamageMultiplier/10)))));
				this.clusterTimer = this.clusterTimerMax;
			}
			else{
				this.clusterTimer--;
			}
		}
	},
	// Run everything
	run: function(){
		// Fire weapons when possible - fire twice if powered up
		if (this.doubleShotTimer > 0){
			if ((menus.autoShootOn && !(90 in keysDown)) || (!menus.autoShootOn && (90 in keysDown))){
				this.fire();
			}
			this.doubleShotTimer--;
		}
		if ((menus.autoShootOn && !(90 in keysDown)) || (!menus.autoShootOn && (90 in keysDown))){
			this.fire();
		}
		// Loop through the array and perform actions on each
		for (var i = 0, weapon; weapon = this.weaponArray[i]; i++) {
			// Remove weapon if it goes off screen
			if (offScreen(weapon)){
		  		this.weaponArray.splice(i, 1);
				i--;
			}
			else{
		  		weapon.move();
		  		weapon.draw();
			}
		}
	},
};

// Normal Bullet - shoots in a straight line
var bullet = function(x, y, width, height, speedX, speedY, dmg){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.dmg = dmg;
	return this;
};
bullet.prototype.move = function(){
	this.x += this.speedX;
	this.y -= this.speedY;
};
bullet.prototype.hit = function(j){
	particles.particleArray.push(new bulletParticle(this.x+2, this.y, 4, 4, randomInt(-this.speedX-5,-this.speedX+5), randomInt(this.speedY-3,this.speedY+3), randomInt(1,6), 15));
	particles.particleArray.push(new bulletParticle(this.x+6, this.y, 4, 4, randomInt(-this.speedX-5,-this.speedX+5), randomInt(this.speedY-3,this.speedY+3), randomInt(1,6), 15));
	particles.particleArray.push(new bulletParticle(this.x+4, this.y, 4, 4, randomInt(-this.speedX-5,-this.speedX+5), randomInt(this.speedY-3,this.speedY+3), randomInt(1,6), 15));
	particles.particleArray.push(new bulletParticle(this.x+2, this.y, 4, 4, randomInt(-this.speedX-5,-this.speedX+5), randomInt(this.speedY-3,this.speedY+3), randomInt(1,6), 15));
	particles.particleArray.push(new bulletParticle(this.x+6, this.y, 4, 4, randomInt(-this.speedX-5,-this.speedX+5), randomInt(this.speedY-3,this.speedY+3), randomInt(1,6), 15));
	particles.particleArray.push(new bulletParticle(this.x+4, this.y, 4, 4, randomInt(-this.speedX-5,-this.speedX+5), randomInt(this.speedY-3,this.speedY+3), randomInt(1,6), 15));
	this.y = 10000;
};
bullet.prototype.draw = function(){
	ctx.drawImage(bulletImg, this.x-4, this.y-4);
};

// Homing Bullet - picks a random enemy and tries to hit it
var homingBullet = function(x, y, width, height, speedX, speedY, targetX, targetI, dmg){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.targetX = targetX;
	this.dmg = dmg;
	return this;
};
homingBullet.prototype.move = function(){
	if (this.x < this.targetX - this.speedX + 4){
		this.x += this.speedX;
	}
	else if (this.x > this.targetX + this.speedX){
		this.x -= this.speedX;
	}
	this.y -= this.speedY;
};
homingBullet.prototype.hit = function(j){
	particles.particleArray.push(new homingBulletParticle(this.x-8, this.y, 32, 32, 3, randomInt(1,2), 15));
	this.y = 10000;
};
homingBullet.prototype.draw = function(){
	ctx.drawImage(homingBulletImg, this.x-8, this.y-8);
};

// Boomerang - fires up and follows the player horizontally, returns after reaching the top
var boomerang = function(x, y, width, height, speedX, speedY, dmg, movingUp){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.dmg = dmg;
	this.movingUp = movingUp;
	return this;
};
boomerang.prototype.move = function(){
	if (this.x < player.x - this.speedX){
		this.x += this.speedX;
	}
	else if (this.x > player.x + this.speedX + 16){
		this.x -= this.speedX;
	}
	if (this.y <= 40){
		this.speedY--;
	}
	this.y -= this.speedY;
};
boomerang.prototype.hit = function(j){
	if (this.speedY >= 0){
		particles.particleArray.push(new boomerangParticle(this.x, this.y, 6, 6, randomInt(-4,4), randomInt(5,9), 15));
		particles.particleArray.push(new boomerangParticle(this.x+this.width-5, this.y, 6, 6, randomInt(-4,-4), randomInt(5,9), 15));
	}
	else{
		particles.particleArray.push(new boomerangParticle(this.x, this.y, 6, 6, randomInt(-4,4), randomInt(-5,-9), 15));
		particles.particleArray.push(new boomerangParticle(this.x+this.width-5, this.y, 6, 6, randomInt(-4,4), randomInt(-5,-9), 15));
	}
};
boomerang.prototype.draw = function(){
	if (this.speedY >= 0){
		ctx.drawImage(boomerangSheet, 0, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else{
		ctx.drawImage(boomerangSheet, this.width*2, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
};

// Spinner - fires diagonally and waves in and out, bounces off walls
var spinner = function(x, y, width, height, speedX, speedY, dmg, iNum){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.dmg = dmg;
	this.iNum = iNum;
	return this;
};
spinner.prototype.move = function(){
	if (this.x + this.width + this.speedX > 800){
		this.speedX = -1;
	}
	else if (this.x + this.speedX < 0){
		this.speedX = 1;
	}
	else if (this.x > player.x+player.width){
		this.speedX--;
	}
	else if (this.x < player.x-this.width){
		this.speedX++;
	}
	this.x += this.speedX;
	this.y -= this.speedY;
};
spinner.prototype.hit = function(j){
	particles.particleArray.push(new spinnerParticle(this.x, this.y, randomInt(7,9), randomInt(7,9), randomInt((-this.speedX)-2, (-this.speedX)+2), randomInt((-this.speedY)-2, (-this.speedY)+2), 15));
	particles.particleArray.push(new spinnerParticle(this.x, this.y, randomInt(7,9), randomInt(7,9), randomInt((-this.speedX)-2, (-this.speedX)+2), randomInt((-this.speedY)-2, (-this.speedY)+2), 15));
};
spinner.prototype.draw = function(){
	if (this.iNum < 2){
		ctx.drawImage(spinnerSheet, 0, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else if (this.iNum < 4){
		ctx.drawImage(spinnerSheet, this.width*2, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else if (this.iNum < 6){
		ctx.drawImage(spinnerSheet, this.width*4, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else if (this.iNum < 8){
		ctx.drawImage(spinnerSheet, this.width*6, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	if (this.iNum < 7){
		this.iNum++;
	}
	else{
		this.iNum = 0;
	}
};

// Bouncer - fires horizontally, bounces between walls and the player
var bouncer = function(x, y, width, height, speedX, dmg, iNum, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.dmg = dmg;
	this.iNum = iNum;
	return this;
};
bouncer.prototype.move = function(){
	if (this.timeLeft == 0){
		this.y = 10000;
	}
	else{
		this.timeLeft--;
	}
	if (this.x + this.width + this.speedX > 800){
		this.speedX = -this.speedX;
	}
	else if (this.x + this.speedX < 0){
		this.speedX = -this.speedX;
	}
	this.x += this.speedX;
};
bouncer.prototype.hit = function(j){
	particles.particleArray.push(new bouncerParticle(this.x, this.y, randomInt(7,9), randomInt(7,9), randomInt((-this.speedX)-2, (-this.speedX)+2), randomInt(-2,2), 15));
	particles.particleArray.push(new bouncerParticle(this.x, this.y, randomInt(7,9), randomInt(7,9), randomInt((-this.speedX)-2, (-this.speedX)+2), randomInt(-2,2), 15));
};
bouncer.prototype.draw = function(){
	if (this.iNum < 2){
		ctx.drawImage(bouncerSheet, 0, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else if (this.iNum < 4){
		ctx.drawImage(bouncerSheet, this.width*2, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else if (this.iNum < 6){
		ctx.drawImage(bouncerSheet, this.width*4, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	else if (this.iNum < 8){
		ctx.drawImage(bouncerSheet, this.width*6, 0, this.width*2, this.height*2, this.x-8, this.y-8, this.width*2, this.height*2);
	}
	if (this.iNum < 7){
		this.iNum++;
	}
	else{
		this.iNum = 0;
	}
};

// Cluster - shoots up, travelling very slowly, explodes into 8 bullets scattering on impact
var cluster = function(x, y, width, height, speed, dmg){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.dmg = dmg;
	return this;
};
cluster.prototype.move = function(){
	this.y -= this.speed;
};
cluster.prototype.hit = function(j){
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, 0, 10, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, 7, 7, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, -7, -7, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, -7, 7, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, 7, -7, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, 10, 0, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, -10, 0, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	weapons.weaponArray.push(new bullet(this.x+14, this.y+14, 8, 8, 0, -10, Math.round(100*(1+(upgrades.weaponDamageMultiplier/10)))));
	particles.particleArray.push(new homingBulletParticle(this.x, this.y, 32, 32, 3, randomInt(1,2), 15));
	this.y = 10000;
};
cluster.prototype.draw = function(){
	ctx.drawImage(clusterImg, this.x-16, this.y-16);
};