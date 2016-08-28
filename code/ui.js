/*------------------------------------------------ UI ----------------------------------------------*/
var ui = {
	active: true,
	levelUpTimer: 0,
	levelUpTimerMax: 57,
	markerArray: new Array(),
	pauseButton: {
		x: 730,
		y: 546,
		width: 50,
		height: 50,
		click: function(){
			if (mouseClick(this)){
				if (gameState == "play"){
					if (menus.soundOn){
						clickSound.currentTime = 0;
						clickSound.play();
					}
					gameState = "pause";
				}
				else if (gameState == "pause"){
					if (menus.soundOn){
						clickSound.currentTime = 0;
						clickSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.drawImage(pauseButtonImg, this.x-15, this.y-15);
		},
		run: function(){
			this.click();
			this.draw();
		}
	},
	// For pause/game over screens (middle)
	mainMenuButton: {
		x: 320,
		y: 300,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				ctx.globalAlpha = this.selectorTimer/this.selectorTimerMax;
				ctx.drawImage(selector, this.x-8, this.y-8);
				ctx.globalAlpha = 1;
				if (this.selectorTimer == 15){
					this.selectorTimer = 16;
					this.selectorTimerGoingDown = false;
				}
				else if (this.selectorTimer == this.selectorTimerMax){
					this.selectorTimer = 44;
					this.selectorTimerGoingDown = true;
				}
				else{
					if (this.selectorTimerGoingDown){
						this.selectorTimer--;
					}
					else{
						this.selectorTimer++;
					}
				}
			}
			else{
				this.selectorTimer = this.selectorTimerMax;
				this.selectorGoingDown;
			}
			if (mouseClick(this)){
				resetAll();
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				transitions.createFade(1, 30, "black", "mainmenu");
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Main Menu", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "pause" || gameState == "gameover" || gameState == "levelcomplete"){
				this.click();
				this.draw();
			}
		},
	},
	// For all other menus (top left)
	mainMenuButton2: {
		x: 20,
		y: 20,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				ctx.globalAlpha = this.selectorTimer/this.selectorTimerMax;
				ctx.drawImage(selector, this.x-8, this.y-8);
				ctx.globalAlpha = 1;
				if (this.selectorTimer == 15){
					this.selectorTimer = 16;
					this.selectorTimerGoingDown = false;
				}
				else if (this.selectorTimer == this.selectorTimerMax){
					this.selectorTimer = 44;
					this.selectorTimerGoingDown = true;
				}
				else{
					if (this.selectorTimerGoingDown){
						this.selectorTimer--;
					}
					else{
						this.selectorTimer++;
					}
				}
			}
			else{
				this.selectorTimer = this.selectorTimerMax;
				this.selectorGoingDown;
			}
			if (mouseClick(this)){
				resetAll();
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				transitions.createFade(1, 15, "black", "mainmenu");
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Main Menu", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "levelselect" || gameState == "shop" || gameState == "options" || 
				gameState == "credits" || gameState == "hypermenu"){
				this.click();
				this.draw();
			}
		},
	},
	// For going straight to the next level if possible
	nextLevelButton: {
		x: 320,
		y: 380,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				ctx.globalAlpha = this.selectorTimer/this.selectorTimerMax;
				ctx.drawImage(selector, this.x-8, this.y-8);
				ctx.globalAlpha = 1;
				if (this.selectorTimer == 15){
					this.selectorTimer = 16;
					this.selectorTimerGoingDown = false;
				}
				else if (this.selectorTimer == this.selectorTimerMax){
					this.selectorTimer = 44;
					this.selectorTimerGoingDown = true;
				}
				else{
					if (this.selectorTimerGoingDown){
						this.selectorTimer--;
					}
					else{
						this.selectorTimer++;
					}
				}
			}
			else{
				this.selectorTimer = this.selectorTimerMax;
				this.selectorGoingDown;
			}
			if (mouseClick(this)){
				resetAll();
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				if (levels.currentLevel == 6 || levels.currentLevel == 12 || levels.currentLevel == 18 || 
					levels.currentLevel == 24 || levels.currentLevel == 30){
					levels.currentZone++;	
				}
				levels.currentLevel++;
				gameState = "play";
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Next Level", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "levelcomplete" && levels.currentLevel < 36){
				this.click();
				this.draw();
			}
		},
	},
	notifierIcon: {
		x: 593,
		y: 320,
		width: 16,
		height: 16,
		mouse: function(){
			if (mouseOver(this)){
				ctx.fillStyle = "white";
				ctx.font = "10pt Arial";
				ctx.fillText("You have additional", this.x-35, this.y-30);
				ctx.fillText("Upgrade Points to spend!", this.x-35, this.y-15);
			}
		},
		draw: function(){
			if (mouseOver(this)){
				ctx.drawImage(notifierHighlight, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(notifier, this.x-8, this.y-8);
			}
		},
		run: function(){
			if ((gameState == "gameover" || gameState == "levelcomplete") && player.upgradePoints > 0){
				this.mouse();
				this.draw();
			}
		},
	},
	/*--------- Main Functions -------------*/
	reset: function(){
		this.levelUpTimer = 0;
		this.markerArray = new Array();
	},
	draw: function(){
		ctx.fillStyle = "black";
		ctx.font = "12pt Arial";
		// Main Bar
		ctx.drawImage(uiMainBar, 0, 536);
		// Health Bar
		ctx.drawImage(uiBarBG, 4, 546);
		if (player.invulnTimer == 0){
			ctx.drawImage(healthBar2, 0, 0, 150, 50, 4, 546, Math.ceil(150*(player.hp/player.hpMax)), 50);
			if (player.hp == player.hpMax){
				ctx.drawImage(healthBarGlow, 0, 0, 170, 70, -6, 536, 170, 70);
			}
		}
		else{
			ctx.drawImage(healthBar, 0, 0, 150, 50, 4, 546, Math.ceil(150*(player.hp/player.hpMax)), 50);
		}
		ctx.fillText(player.hp + "/" + player.hpMax, 10, 566);
		ctx.drawImage(uiBarFrame, 4, 546);
		// Shield Bar
		ctx.drawImage(uiBarBG, 164, 546);
		if (shield.active){
			ctx.drawImage(shieldBar, 0, 0, 150, 50, 164, 546, Math.ceil(150*(shield.timer/shield.timerMax)), 50);
			ctx.fillText(shield.timer + "/" + shield.timerMax, 170, 566);
		}
		else if (shield.cooldown == 0){
			ctx.drawImage(shieldBarGlow, 0, 0, 170, 70, 154, 536, 170, 70);
			ctx.fillText(shield.timerMax + "/" + shield.timerMax, 170, 566);
		}
		else{
			ctx.drawImage(shieldBar2, 0, 0, 150, 50, 164, 546, Math.ceil(150*(1-shield.cooldown/shield.cooldownMax)), 50);
			ctx.fillText((shield.cooldownMax-shield.cooldown) + "/" + shield.cooldownMax, 170, 566);
		}
		ctx.drawImage(uiBarFrame, 164, 546);
		// Exp Bar
		ctx.drawImage(uiBarBG, 324, 546);
		if (this.levelUpTimer > 0){
			if (this.levelUpTimer >= 54){
				ctx.drawImage(expBar1, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 51){
				ctx.drawImage(expBar2, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 48){
				ctx.drawImage(expBar3, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 45){
				ctx.drawImage(expBar4, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 42){
				ctx.drawImage(expBar5, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 39){
				ctx.drawImage(expBar6, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 36){
				ctx.drawImage(expBar7, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 33){
				ctx.drawImage(expBar8, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 30){
				ctx.drawImage(expBar9, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 27){
				ctx.drawImage(expBar1, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 24){
				ctx.drawImage(expBar2, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 21){
				ctx.drawImage(expBar3, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 18){
				ctx.drawImage(expBar4, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 15){
				ctx.drawImage(expBar5, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 12){
				ctx.drawImage(expBar6, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 9){
				ctx.drawImage(expBar7, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 6){
				ctx.drawImage(expBar8, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else if (this.levelUpTimer >= 3){
				ctx.drawImage(expBar9, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			else{
				ctx.drawImage(expBar1, 0, 0, 170, 70, 314, 536, 170, 70);
			}
			ctx.fillText((player.level-1)*(player.level-1)*100 + "/" + (player.level-1)*(player.level-1)*100, 330, 566);
			if (gameState == "play"){
				this.levelUpTimer--;
			}
		}
		else{
			if (player.exp > (player.level*player.level*100) && player.level < 40){
				ctx.drawImage(expBar, 0, 0, 150, 50, 324, 546, 150, 50);
				ctx.fillText((player.level-1)*(player.level-1)*100 + "/" + (player.level-1)*(player.level-1)*100, 330, 566);
			}
			else{
				if (player.level < 40){
					ctx.drawImage(expBar, 0, 0, 150, 50, 324, 546, Math.ceil(150*(player.exp/(player.level*player.level*100))), 50);
					ctx.fillText(player.exp + "/" + player.level*player.level*100, 330, 566);
				}
				else{
					ctx.drawImage(expBar, 0, 0, 150, 50, 324, 546, 150, 50);
					ctx.fillText("" + player.exp, 330, 566);
				}
			}
		}
		ctx.drawImage(uiBarFrame, 324, 546);
		ctx.fillStyle = "white";
		ctx.font = "16pt Arial";
		ctx.fillText("Score: " + player.score, 480, 582);
	},
	spawnScoreMarker: function(score){
		this.markerArray.push(new scoreMarker(520, 565, randomInt(-5,5), randomInt(-8,-14), score, 30));	
	},
	spawnHpExpMarker: function(hpExp, exp){
		if (exp){
			this.markerArray.push(new hpExpMarker(350, 545, hpExp, 30));
		}
		else{
			this.markerArray.push(new hpExpMarker(20, 545, -hpExp, 30));
		}
	},
	spawnLevelUpMarker: function(){
		this.markerArray.push(new levelUpMarker(340, 550, 0, -2, 57));	
	},
	showPowerups: function(){
		if (player.speedBoostTimer > 0){
			ctx.drawImage(yellowArrowTiny, 480, 545);
		}
		if (weapons.doubleShotTimer > 0){
			ctx.drawImage(redArrowTiny, 500, 545);
		}
		if (enemies.freezeTimer > 0){
			ctx.drawImage(blueArrowTiny, 520, 545);
		}
		if (player.collectorTimer > 0){
			ctx.drawImage(orangeArrowTiny, 540, 545);
		}
		if (player.luckyDrops > 0){
			ctx.drawImage(greenArrowTiny, 560, 545);
		}
	},
	run: function(){
		// Draw main UI
		this.draw();
		// Run Buttons
		this.pauseButton.run();
		this.mainMenuButton.run();
		this.showPowerups();
		if (player.invulnTimer > 0){
			ctx.globalAlpha = player.invulnTimer/player.invulnTimerMax+player.handicap*3;
			ctx.drawImage(damagedOverlay, 0, 0);
			ctx.globalAlpha = 1;
		}
		else if (shield.active){
			ctx.globalAlpha = shield.timer/shield.timerMax;
			ctx.drawImage(shieldOverlay, 0, 0);
			ctx.globalAlpha = 1;
		}
		if (!menus.textAnimationsOn){
			this.markerArray = new Array();
		}
		else{
			// Loop through the array and perform actions on each
			for (var i = 0, marker; marker = this.markerArray[i]; i++) {
				// Remove score marker if it goes off screen
		 		if (offScreen(marker) || marker.timeLeft == 0){
					this.markerArray.splice(i, 1);
		  		}
		 		else{
					if (gameState == "play"){
		  			   marker.move();
					   marker.draw();
				   	}
	  	  	 	}
			}
		}
	},
};

// Score Bonus Marker
var scoreMarker = function(x, y, speedX, speedY, score, timeLeft){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.score = score;
	this.timeLeft = timeLeft;
	return this;
};
scoreMarker.prototype.move = function(){
	this.x += this.speedX;
	this.y += this.speedY;
	this.timeLeft--;
};
scoreMarker.prototype.draw = function(){
	if (this.speedY < 4){
		this.speedY++;
	}
	if (this.timeLeft < 10){
		ctx.globalAlpha = this.timeLeft*.1;
	}
	if (this.score < 25){
		ctx.font = "12pt Arial";
		ctx.fillStyle = "white";
	}
	else if (this.score < 50){
		ctx.font = "14pt Arial";
		ctx.fillStyle = "yellow";
	}
	else if (this.score < 100){
		ctx.font = "16pt Arial";
		ctx.fillStyle = "teal";
	}
	else if (this.score < 500){
		ctx.font = "18pt Arial";
		ctx.fillStyle = "green";
	}
	else if (this.score < 1000){
		ctx.font = "20pt Arial";
		ctx.fillStyle = "blue";
	}
	else if (this.score < 5000){
		ctx.font = "22pt Arial";
		ctx.fillStyle = "purple";
	}
	else if (this.score < 10000){
		ctx.font = "24pt Arial";
		ctx.fillStyle = "orange";
	}
	else{
		ctx.font = "26pt Arial";
		ctx.fillStyle = "red";
	}
	ctx.fillText("+" + this.score, this.x, this.y);
	ctx.globalAlpha = 1;
};

// Level Up Marker
var levelUpMarker = function(x, y, speedX, speedY, timeLeft){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.timeLeft = timeLeft;
	return this;
};
levelUpMarker.prototype.move = function(){
	this.x += this.speedX;
	this.y += this.speedY;
	this.timeLeft--;
};
levelUpMarker.prototype.draw = function(){
	if (this.timeLeft < 10){
		ctx.globalAlpha =  this.timeLeft*.1;
	}
	ctx.font = "16pt Arial";
	if (this.timeLeft >= 54){
		ctx.fillStyle = "green";
	}
	else if (this.timeLeft >= 51){
		ctx.fillStyle = "darkGreen";
	}
	else if (this.timeLeft >= 48){
		ctx.fillStyle = "teal";
	}
	else if (this.timeLeft >= 45){
		ctx.fillStyle = "blue";
	}
	else if (this.timeLeft >= 42){
		ctx.fillStyle = "darkBlue";
	}
	else if (this.timeLeft >= 39){
		ctx.fillStyle = "purple";
	}
	else if (this.timeLeft >= 36){
		ctx.fillStyle = "red";
	}
	else if (this.timeLeft >= 33){
		ctx.fillStyle = "orange";
	}
	else if (this.timeLeft >= 30){
		ctx.fillStyle = "yellow";
	}
	else if (this.timeLeft >= 27){
		ctx.fillStyle = "green";
	}
	else if (this.timeLeft >= 24){
		ctx.fillStyle = "darkGreen";
	}
	else if (this.timeLeft >= 21){
		ctx.fillStyle = "teal";
	}
	else if (this.timeLeft >= 18){
		ctx.fillStyle = "blue";
	}
	else if (this.timeLeft >= 15){
		ctx.fillStyle = "darkBlue";
	}
	else if (this.timeLeft >= 12){
		ctx.fillStyle = "purple";
	}
	else if (this.timeLeft >= 9){
		ctx.fillStyle = "red";
	}
	else if (this.timeLeft >= 6){
		ctx.fillStyle = "orange";
	}
	else if (this.timeLeft >= 3){
		ctx.fillStyle = "yellow";
	}
	else{
		ctx.fillStyle = "green";
	}
	ctx.fillText("LEVEL UP!", this.x, this.y);
	ctx.globalAlpha = 1;
};

// Pickup Marker
var pickupMarker = function(x, y, color, text, timeLeft){
	this.x = x;
	this.y = y;
	this.color = color;
	this.text = text;
	this.timeLeft = timeLeft;
	return this;
};
pickupMarker.prototype.move = function(){
	this.y -= 6;
	this.timeLeft--;
};
pickupMarker.prototype.draw = function(){
	if (this.timeLeft < 10){
		ctx.globalAlpha = this.timeLeft*.1;
	}
	ctx.font = "18pt Arial";
	ctx.fillStyle = this.color;
	ctx.fillText(this.text, this.x, this.y);
	ctx.globalAlpha = 1;
};

// Text Marker for displaying tutorial/extra info
var textMarker = function(x, y, color, text, timeLeft){
	this.x = x;
	this.y = y;
	this.color = color;
	this.text = text;
	this.timeLeft = timeLeft;
	return this;
};
textMarker.prototype.move = function(){
	this.y += 3;
	this.timeLeft--;
};
textMarker.prototype.draw = function(){
	ctx.font = "18pt Arial";
	ctx.fillStyle = this.color;
	ctx.fillText(this.text, this.x, this.y);
};

// Marker for displaying hp/exp gains and losses
var hpExpMarker = function(x, y, hpExp, timeLeft){
	this.x = x;
	this.y = y;
	this.hpExp = hpExp;
	this.timeLeft = timeLeft;
	return this;
};
hpExpMarker.prototype.move = function(){
	this.y -= 2;
	this.timeLeft--;
};
hpExpMarker.prototype.draw = function(){
	ctx.font = "14pt Arial";
	if (this.hpExp == 0){
		ctx.fillStyle = "white";
	}
	else if (this.hpExp > 0){
		ctx.fillStyle = "green";
	}
	else if (this.hpExp < 0){
		ctx.fillStyle = "red";
	}
	ctx.fillText("" + this.hpExp, this.x, this.y);
};