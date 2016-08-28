/*------------------------------------------------ Particles ----------------------------------------------*/
var particles = {
	particleArray: new Array(),
	reset: function(){
		this.particleArray = new Array();
	},
	// Run everything
	run: function(){
		if (!menus.particlesOn){
			this.particleArray = new Array();
		}
		else{
			// Loop through the array and perform actions on each
			for (var i = 0, particle; particle = this.particleArray[i]; i++) {
		 		// Remove particle if it goes off screen
				if (offScreen(particle) || particle.timeLeft == 0){
		  			this.particleArray.splice(i, 1);
					i--;
		 	 	}
		 		else{
		  			particle.move();
		  			particle.draw();
	  	  		}
			}
		}
	},
};

// Normal Bullet Particle
var bulletParticle = function(x, y, width, height, speedX, speedY, pNum, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.pNum = pNum;
	this.timeLeft = timeLeft;
	return this;
};
bulletParticle.prototype.move = function(){
	this.x += this.speedX;
	this.y += this.speedY;
	this.timeLeft--;
};
bulletParticle.prototype.draw = function(){
	if (this.pNum == 1){
		ctx.drawImage(bulletParticleSheet, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 2){
		ctx.drawImage(bulletParticleSheet, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 3){
		ctx.drawImage(bulletParticleSheet, this.width*2, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 4){
		ctx.drawImage(bulletParticleSheet, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 5){
		ctx.drawImage(bulletParticleSheet, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 6){
		ctx.drawImage(bulletParticleSheet, this.width*3, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum = 1;
	}
};

// Homing Bullet Particle
var homingBulletParticle = function(x, y, width, height, speedY, pNum, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedY = speedY;
	this.pNum = pNum;
	this.timeLeft = timeLeft;
	return this;
};
homingBulletParticle.prototype.move = function(){
	this.y += this.speedY;
	this.timeLeft--;
};
homingBulletParticle.prototype.draw = function(){
	if (this.timeLeft <= 12){
		if (this.timeLeft > 9){
			ctx.globalAlpha = .8;
		}
		else if (this.timeLeft > 6){
			ctx.globalAlpha = .6;
		}
		else if (this.timeLeft > 3){
			ctx.globalAlpha = .4;
		}
		else{
			ctx.globalAlpha = .2;
		}
	}
	if (this.pNum == 1){
		ctx.drawImage(homingBulletParticleSheet, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	else{
		ctx.drawImage(homingBulletParticleSheet, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	ctx.globalAlpha = 1;
};

// Enemy Bullet Particle
var enemyBulletParticle = function(x, y, width, height, speedX, speedY, pNum, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.pNum = pNum;
	this.timeLeft = timeLeft;
	return this;
};
enemyBulletParticle.prototype.move = function(){
	this.x -= this.speedX;
	this.y -= this.speedY;
	this.timeLeft--;
};
enemyBulletParticle.prototype.draw = function(){
	if (this.pNum == 1){
		ctx.drawImage(enemyBulletParticleSheet, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 2){
		ctx.drawImage(enemyBulletParticleSheet, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 3){
		ctx.drawImage(enemyBulletParticleSheet, this.width*2, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 4){
		ctx.drawImage(enemyBulletParticleSheet, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 5){
		ctx.drawImage(enemyBulletParticleSheet, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum++;
	}
	else if (this.pNum == 6){
		ctx.drawImage(enemyBulletParticleSheet, this.width*3, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.pNum = 1;
	}
};

// Boomerang Particle
var boomerangParticle = function(x, y, width, height, speedX, speedY, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.timeLeft = timeLeft;
	return this;
};
boomerangParticle.prototype.move = function(){
	if (this.timeLeft == 12 || this.timeLeft == 9 || this.timeLeft == 6 || this.timeLeft == 3){
		this.width--;
		this.height--;
	}
	this.x += this.speedX;
	this.y += this.speedY;
	this.timeLeft--;
};
boomerangParticle.prototype.draw = function(){
	ctx.fillStyle = "purple";
	ctx.fillRect(this.x, this.y, this.width, this.height);
};

// Spinner Particle
var spinnerParticle = function(x, y, width, height, speedX, speedY, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.timeLeft = timeLeft;
	return this;
};
spinnerParticle.prototype.move = function(){
	if (this.timeLeft == 13 || this.timeLeft == 11 || this.timeLeft == 9 || this.timeLeft == 7 || this.timeLeft == 5 ||
		this.timeLeft == 3){
		this.width--;
		this.height--;
	}
	this.x += this.speedX;
	this.y += this.speedY;
	this.timeLeft--;
};
spinnerParticle.prototype.draw = function(){
	ctx.fillStyle = "orange";
	ctx.fillRect(this.x, this.y, this.width, this.height);
};

// Bouncer Particle
var bouncerParticle = function(x, y, width, height, speedX, speedY, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = speedX;
	this.speedY = speedY;
	this.timeLeft = timeLeft;
	return this;
};
bouncerParticle.prototype.move = function(){
	if (this.timeLeft == 13 || this.timeLeft == 11 || this.timeLeft == 9 || this.timeLeft == 7 || this.timeLeft == 5 ||
		this.timeLeft == 3){
		this.width--;
		this.height--;
	}
	this.x += this.speedX;
	this.y += this.speedY;
	this.timeLeft--;
};
bouncerParticle.prototype.draw = function(){
	ctx.fillStyle = "green";
	ctx.fillRect(this.x, this.y, this.width, this.height);
};

// Death Particle
var deathParticle = function(x, y, width, height, speedY, pNum, sNum, timeLeft){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedY = speedY;
	this.pNum = pNum;
	this.sNum = sNum;
	this.timeLeft = timeLeft;
	return this;
};
deathParticle.prototype.move = function(){
	this.y += this.speedY;
	this.timeLeft--;
};
deathParticle.prototype.draw = function(){
	ctx.globalAlpha = this.timeLeft/15;
	if (this.timeLeft == 12 || this.timeLeft == 9 || this.timeLeft == 6 || this.timeLeft == 3){
		this.pNum++;
	}
	if (this.sNum == 1){
		ctx.drawImage(deathParticleSheet1, ((this.pNum-1)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	else if (this.sNum == 2){
		ctx.drawImage(deathParticleSheet2, ((this.pNum-1)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	else if (this.sNum == 3){
		ctx.drawImage(deathParticleSheet3, ((this.pNum-1)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	else if (this.sNum == 4){
		ctx.drawImage(deathParticleSheet4, ((this.pNum-1)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	ctx.globalAlpha = 1;
};