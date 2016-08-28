/*------------------------------------------------ Enemy Weapons ----------------------------------------------*/
var enemyWeapons = {
	enemyWeaponArray: new Array(),
	reset: function(){
		this.enemyWeaponArray = new Array();
	},
	// Run everything
	run: function(){
		// Loop through the array and perform actions on each
		for (var i = 0, enemyWeapon; enemyWeapon = this.enemyWeaponArray[i]; i++) {
		  // Remove enemy weapon if it goes off screen
		  if (offScreen(enemyWeapon)){
		  	this.enemyWeaponArray.splice(i, 1);
			i--;
		  }
		  else{
		  	enemyWeapon.ai();
		  	enemyWeapon.draw();
	  	  }
		}
	},
};

// Normal Bullet - shoots up in a straight line
var enemyBullet = function(x, y, width, height, speedX, speedY, dmg){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.dmg = dmg;
	return this;
};
enemyBullet.prototype.ai = function(){
	this.x += this.speedX;
	this.y += this.speedY;
};
enemyBullet.prototype.hit = function(j, playerHit){
	particles.particleArray.push(new enemyBulletParticle(this.x+2, this.y, 4, 4, randomInt(-3,-6), randomInt(2,4), randomInt(1,6), 15));
	particles.particleArray.push(new enemyBulletParticle(this.x+6, this.y, 4, 4, randomInt(3,6), randomInt(2,4), randomInt(1,6), 15));
	particles.particleArray.push(new enemyBulletParticle(this.x+4, this.y, 4, 4, randomInt(-2,2), randomInt(3,7), randomInt(1,6), 15));
	particles.particleArray.push(new enemyBulletParticle(this.x+2, this.y, 4, 4, randomInt(-3,-6), randomInt(2,4), randomInt(1,6), 15));
	particles.particleArray.push(new enemyBulletParticle(this.x+6, this.y, 4, 4, randomInt(3,6), randomInt(2,4), randomInt(1,6), 15));
	particles.particleArray.push(new enemyBulletParticle(this.x+4, this.y, 4, 4, randomInt(-2,2), randomInt(3,7), randomInt(1,6), 15));
	this.y = 10000;
	// Check if the hit was on the player
	if (playerHit){
		player.hp -= this.dmg;
		ui.spawnHpExpMarker(this.dmg, false);
	}
};
enemyBullet.prototype.draw = function(){
	ctx.drawImage(enemyBulletImg, this.x-4, this.y-4);
};