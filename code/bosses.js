/*------------------------------------------------ Bosses ----------------------------------------------*/
var bosses = {
	bossAlive: false,
	bossKilled: false,
	spawnBoss: function(){
		enemies.freezeTimer = 0;
		if (levels.currentZone == 1){
			enemies.enemyArray.push(new armadaShooter(50, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(100, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(150, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(200, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(250, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(300, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(350, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(400, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(450, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(500, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(550, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(600, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(650, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(700, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaShooter(750, -31, 32, 32, 400, 20, 45, 30, "b", 150, 150, 5, 50));
			enemies.enemyArray.push(new armadaDefender(100, -31, 32, 32, 5, 800, 10, 5, 50, false));
			enemies.enemyArray.push(new armadaDefender(200, -31, 32, 32, 5, 800, 10, 5, 50, true));
			enemies.enemyArray.push(new armadaDefender(300, -31, 32, 32, 5, 800, 10, 5, 50, false));
			enemies.enemyArray.push(new armadaDefender(400, -31, 32, 32, 5, 800, 10, 5, 50, true));
			enemies.enemyArray.push(new armadaDefender(500, -31, 32, 32, 5, 800, 10, 5, 50, false));
			enemies.enemyArray.push(new armadaDefender(600, -31, 32, 32, 5, 800, 10, 5, 50, true));
			enemies.enemyArray.push(new armadaDefender(700, -31, 32, 32, 5, 800, 10, 5, 50, false));
			enemies.enemyArray.push(new armadaCore(200, -31, 32, 32, 600, 20, 45, 20, 10, 100));
			enemies.enemyArray.push(new armadaCore(400, -31, 32, 32, 600, 20, 45, 20, 10, 100));
			enemies.enemyArray.push(new armadaCore(600, -31, 32, 32, 600, 20, 45, 20, 10, 100));
		}
		else if (levels.currentZone == 2){
			enemies.enemyArray.push(new whiteCross(380, -31, 32, 32, 7500, 25, 2, 10, 20, 1, 150, 250, 2500));
		}
		else if (levels.currentZone == 3){
			enemies.enemyArray.push(new redWing(380, -31, 64, 32, 10000, 35, 2, 10, 20, 1, 150, 400, 4000));
		}
		else if (levels.currentZone == 4){
			enemies.enemyArray.push(new cannon(200, -31, 32, 32, 3500, 40, 30, 20, 150, 1500));
			enemies.enemyArray.push(new cannon(400, -31, 32, 32, 3500, 40, 30, 20, 150, 1500));
			enemies.enemyArray.push(new cannon(600, -31, 32, 32, 3500, 40, 30, 20, 150, 1500));
		}
		else if (levels.currentZone == 5){
			enemies.enemyArray.push(new bugBot(380, -31, 32, 32, 35000, 60, 2, 10, 20, 1, 90, 1000, 10000));
		}
		else if (levels.currentZone == 6){
			enemies.enemyArray.push(new destructor(380, -63, 64, 64, 100000, 80, 2, 10, 20, 1, 150, 1, 2500, 25000));
		}
		this.bossAlive = true;
	},
	reset: function(){
		this.bossAlive = false;
		this.bossKilled = false;
	},
	check: function(){
		if (this.bossAlive && enemies.enemyArray.length == 0){
			this.bossKilled = true;
		}
	},
	run: function(){
		this.check();
	},
};

/*--------------------- Armada - Zone 1 Boss ----------------------*/
// Armada Shooter - alternates firing patterns between downwards shots and 2-way spread
var armadaShooter = function(x, y, width, height, hp, dmg, bulletTimer, bulletTimerMax, pattern, patternTimer, patternTimerMax, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.pattern = pattern;
	this.patternTimer = patternTimer;
	this.patternTimerMax = patternTimerMax;
	this.exp = exp;
	this.score = score;
	return this;
};
armadaShooter.prototype.ai = function(){
	if (this.y > 80){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 400){
			this.hp = 400;
		}
	}
	if (this.bulletTimer == 0){
		if (this.pattern == "a"){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x - 8, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
		}
		else{
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		}
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
	if (this.patternTimer == 0){
		if (this.pattern == "a"){
			this.pattern = "b";
		}
		else{
			this.pattern = "a";
		}
		this.patternTimer = this.patternTimerMax;
	}
	else{
		this.patternTimer--;
	}
};
armadaShooter.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
armadaShooter.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 3, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
armadaShooter.prototype.draw = function(){
	ctx.drawImage(armadaShooterImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/400), 3);
};
// Armada Defender - moves across the screen blocking damage
var armadaDefender = function(x, y, width, height, speed, hp, dmg, exp, score, movingLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.hp = hp;
	this.dmg = dmg;
	this.exp = exp;
	this.score = score;
	this.movingLeft = movingLeft;
	return this;
};
armadaDefender.prototype.ai = function(){
	if (this.y > 150){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 800){
			this.hp = 800;
		}
	}
	if (this.movingLeft){
		this.x -= this.speed;
	}
	else{
		this.x += this.speed;
	}
	if (this.x < 0){
		this.movingLeft = false;
		this.x += this.speed;
	}
	else if (this.x > 768){
		this.movingLeft = true;
		this.x -= this.speed;
	}
};
armadaDefender.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
armadaDefender.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 3, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
armadaDefender.prototype.draw = function(){
	ctx.drawImage(armadaDefenderImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/800), 3);
};
// Armada Core - shoots 3-bullet spreads depending on player location
var armadaCore = function(x, y, width, height, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
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
armadaCore.prototype.ai = function(){
	if (this.y > 10){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 600){
			this.hp = 600;
		}
	}
	if (this.bulletTimer == 0){
		if (player.x < this.x - 100){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 5, this.dmg));
		}
		else if (player.x > this.x + this.width + 100){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
		}
		else{
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 2, 5, this.dmg));
		}
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
armadaCore.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
armadaCore.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
armadaCore.prototype.draw = function(){
	ctx.drawImage(armadaCoreImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/600), 3);
};

/*--------------------- White Cross - Zone 2 Boss ----------------------*/
// White Cross - alternates firing patterns and moves around at intervals
var whiteCross = function(x, y, width, height, hp, dmg, speed, bulletTimer, bulletTimerMax, phase, phaseTimer, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.speed = speed;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.phase = phase;
	this.phaseTimer = phaseTimer;
	this.exp = exp;
	this.score = score;
	return this;
};
whiteCross.prototype.ai = function(){
	if (this.y > 50){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 7500){
			this.hp = 7500;
		}
	}
	if (this.phase == 1 || this.phase == 4){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x+=this.speed;
	}
	else if (this.phase == 2 || this.phase == 3){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x-=this.speed;
	}
	else if (this.phase == 5){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
	}
	else if (this.phase == 6){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+14, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -6, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
	}
	if (this.phaseTimer == 0){
		if (this.phase == 6){
			this.phase = 1;
		}
		else{
			this.phase++;
		}
		this.phaseTimer = 150;
	}
	else{
		this.phaseTimer--;
	}
};
whiteCross.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
whiteCross.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
whiteCross.prototype.draw = function(){
	ctx.drawImage(whiteCrossImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/7500), 3);
};

/*--------------------- Red Wing - Zone 3 Boss ----------------------*/
// Red Wing - alternates firing patterns and moves around at intervals
var redWing = function(x, y, width, height, hp, dmg, speed, bulletTimer, bulletTimerMax, phase, phaseTimer, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.speed = speed;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.phase = phase;
	this.phaseTimer = phaseTimer;
	this.exp = exp;
	this.score = score;
	return this;
};
redWing.prototype.ai = function(){
	if (this.y > 50){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 10000){
			this.hp = 10000;
		}
	}
	if (this.phase == 1 || this.phase == 4){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -6, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x-=this.speed;
	}
	else if (this.phase == 2 || this.phase == 3){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -4, 5, this.dmg));;
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -6, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x+=this.speed;
	}
	else if (this.phase == 5){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 0, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x+=this.speed;
	}
	else if (this.phase == 6){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 4, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -5, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 6, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -4, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -6, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -6, 5, this.dmg));
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x-=this.speed;
	}
	if (this.phaseTimer == 0){
		if (this.phase == 6){
			this.phase = 1;
		}
		else{
			this.phase++;
		}
		this.phaseTimer = 150;
	}
	else{
		this.phaseTimer--;
	}
};
redWing.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
redWing.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
redWing.prototype.draw = function(){
	ctx.drawImage(redWingImg, this.x-32, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/10000), 3);
};

/*--------------------- Cannon-Spikes - Zone 4 Boss ----------------------*/
// Cannon - shoots 6-bullet spread
var cannon = function(x, y, width, height, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
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
cannon.prototype.ai = function(){
	if (this.y > 100){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 3500){
			this.hp = 3500;
		}
	}
	// spawn spikes behind them
	else if (this.y == 1){
		enemies.enemyArray.push(new spike(this.x, -31, 32, 32, 5000, 40, 30, 20, 200, 2000));
	}
	if (this.bulletTimer == 0){
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 0, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 3, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 0, 3, this.dmg));
		enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 3, this.dmg));
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
cannon.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
cannon.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
cannon.prototype.draw = function(){
	ctx.drawImage(cannonImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/3500), 3);
};
// Spike - shoots 6-bullet spread depending on player location
var spike = function(x, y, width, height, hp, dmg, bulletTimer, bulletTimerMax, exp, score){
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
spike.prototype.ai = function(){
	if (this.y > 68){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 5000){
			this.hp = 5000;
		}
	}
	if (this.bulletTimer == 0){
		if (player.x < this.x - 100){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -6, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -4, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 3, this.dmg));
		}
		else if (player.x > this.x + this.width + 100){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 6, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 4, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 6, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 4, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 3, this.dmg));
		}
		else{
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, -2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 2, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, -2, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 0, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x + 12, this.y + this.height, 8, 8, 2, 3, this.dmg));
		}
		this.bulletTimer = this.bulletTimerMax;
	}
	else{
		this.bulletTimer--;
	}
};
spike.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
spike.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
spike.prototype.draw = function(){
	ctx.drawImage(spikeImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/5000), 3);
};

/*--------------------- Bug Bot - Zone 5 Boss ----------------------*/
// Bug Bot - alternates firing patterns, shoots fast when low
var bugBot = function(x, y, width, height, hp, dmg, speed, bulletTimer, bulletTimerMax, phase, phaseTimer, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.speed = speed;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.phase = phase;
	this.phaseTimer = phaseTimer;
	this.exp = exp;
	this.score = score;
	return this;
};
bugBot.prototype.ai = function(){
	if (this.y > 50){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 35000){
			this.hp = 35000;
		}
	}
	if (this.phase == 1){
		if (this.bulletTimer == 0){
			if (this.hp >= 5000){
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -4, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -4, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 4, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 4, 3, this.dmg));
				this.bulletTimer = this.bulletTimerMax;
			}
			else{
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 3, this.dmg));
				this.bulletTimer = this.bulletTimerMax;
			}
		}
		else{
			this.bulletTimer--;
		}
	}
	else if (this.phase == 2){
		if (this.bulletTimer == 0){
			if (this.hp >= 5000){
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -2, 3, this.dmg));
				this.bulletTimer = this.bulletTimerMax;
			}
			else{
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, -3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, 3, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, -1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+12, this.y + this.height, 8, 8, -3, 3, this.dmg));
				this.bulletTimer = this.bulletTimerMax;
			}
		}
		else{
			this.bulletTimer--;
		}
	}
	if (this.phaseTimer == 0){
		if (this.phase == 2){
			this.phase = 1;
		}
		else{
			this.phase = 2;
		}
		this.phaseTimer = 90;
	}
	else{
		this.phaseTimer--;
	}
};
bugBot.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
bugBot.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
bugBot.prototype.draw = function(){
	ctx.drawImage(bugBotImg, this.x-16, this.y-16);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/35000), 3);
};

/*--------------------- Destructor - Zone 6 Boss ----------------------*/
// Destructor - alternates firing patterns and moves around at intervals, shoots more when low
var destructor = function(x, y, width, height, hp, dmg, speed, bulletTimer, bulletTimerMax, phase, phaseTimer, form, exp, score){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.dmg = dmg;
	this.speed = speed;
	this.bulletTimer = bulletTimer;
	this.bulletTimerMax = bulletTimerMax;
	this.phase = phase;
	this.phaseTimer = phaseTimer;
	this.form = form;
	this.exp = exp;
	this.score = score;
	return this;
};
destructor.prototype.ai = function(){
	if (this.y > 75){
		this.y--;
	}
	else if (this.y < 0){
		if (!this.hp || this.hp < 100000){
			this.hp = 100000;
		}
	}
	if (this.phase == 1 || this.phase == 4){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -7, 5, this.dmg));
			if (this.form == 2){
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -1, 1, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -4, 7, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -5, 9, this.dmg));
			}
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x-=this.speed;
	}
	else if (this.phase == 2 || this.phase == 3){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, -7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, -7, 5, this.dmg));
			if (this.form == 2){
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 1, 1, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 2, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 4, 7, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 5, 9, this.dmg));
			}
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x+=this.speed;
	}
	else if (this.phase == 5){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+10, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+30, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+50, this.y + this.height, 8, 8, 0, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 5, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 7, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 7, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 5, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 7, 3, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 7, 5, this.dmg));
			if (this.form == 2){
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+40, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+48, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+56, this.y + this.height, 8, 8, 0, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 1, 3, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -1, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -2, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 3, 5, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -3, 5, this.dmg));
			}
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x+=this.speed;
	}
	else if (this.phase == 6){
		if (this.bulletTimer == 0){
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+20, this.y + this.height, 8, 8, 0, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+40, this.y + this.height, 8, 8, 0, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 1, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 3, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 5, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 5, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 7, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x-8, this.y + this.height, 8, 8, 7, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 1, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 3, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 5, 4, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 7, 2, this.dmg));
			enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+this.width, this.y + this.height, 8, 8, 7, 4, this.dmg));
			if (this.form == 2){
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+8, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+16, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+24, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+40, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+48, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+56, this.y + this.height, 8, 8, 0, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 1, 2, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -1, 4, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 2, 4, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -2, 4, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, 3, 4, this.dmg));
				enemyWeapons.enemyWeaponArray.push(new enemyBullet(this.x+32, this.y + this.height, 8, 8, -3, 4, this.dmg));
			}
			this.bulletTimer = this.bulletTimerMax;
		}
		else{
			this.bulletTimer--;
		}
		this.x-=this.speed;
	}
	if (this.phaseTimer == 0){
		if (this.phase == 6){
			this.phase = 1;
		}
		else{
			this.phase++;
		}
		this.phaseTimer = 150;
	}
	else{
		this.phaseTimer--;
	}
	if (this.hp < 50000 && this.form == 1){
		this.form = 2;
	}
};
destructor.prototype.hit = function(i){
	player.hp -= this.dmg;
	ui.spawnHpExpMarker(this.dmg, false);
};
destructor.prototype.hurt = function(weapon, i, j){
	this.hp -= weapon.dmg;
	if (this.hp <= 0){
		player.exp+=this.exp;
		player.score+=this.score;
		ui.spawnScoreMarker(this.score);
		ui.spawnHpExpMarker(this.exp, true);
		pickups.randomDrop(1, 1, this.x, this.y);
		if (menus.soundOn){
			explodeBossSound.currentTime=0;
			explodeBossSound.play();
		}
		this.y = 10000;
	}
	weapon.hit(j);
};
destructor.prototype.draw = function(){
	ctx.drawImage(destructorSheet, ((this.width*2)*(this.form-1)), 0, this.width*2, this.height*2, this.x-32, this.y-32, this.width*2, this.height*2);
	// HP Bar
	ctx.fillStyle = "black";
	ctx.fillRect(this.x, this.y-10, this.width, 5);
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x+1, this.y-9, this.width-2, 3);
	ctx.fillStyle = "red";
	ctx.fillRect(this.x+1, this.y-9, (this.width-2)*(this.hp/100000), 3);
};