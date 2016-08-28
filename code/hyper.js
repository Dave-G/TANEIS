/*------------------------------------------------ Hyper Mode ----------------------------------------------*/
// Hyper Mode menu and gameplay
hyper = {
	unlocked: true,
	currentMode: "easy",
	easyHighScore: 0,
	easyAceScore: 20000,
	normalHighScore: 0,
	normalAceScore: 40000,
	hardHighScore: 0,
	hardAceScore: 65000,
	insaneHighScore: 0,
	insaneAceScore: 100000,
	bgProgress: -1800,
	bg: 1,
	timeAlive: 1,
	spawnTimer: 0,
	spawnTimerMax: 120,
	/*------------------ Buttons --------------------*/
	easyButton: {
		x: 280,
		y: 260,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				hyper.currentMode = "easy";
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
				levels.currentZone = -1;
				player.handicap = 0;
				if (menus.soundOn){
					startSound.currentTime = 0;
					startSound.play();
				}
				gameState = "play";
			}
		},
		draw: function(){
			if (hyper.currentMode == "easy"){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Easy", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	normalButton: {
		x: 280,
		y: 340,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				hyper.currentMode = "normal";
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
				levels.currentZone = -1;
				player.handicap = 0;
				if (menus.soundOn){
					startSound.currentTime = 0;
					startSound.play();
				}
				gameState = "play";
			}
		},
		draw: function(){
			if (hyper.currentMode == "normal"){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Normal", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	hardButton: {
		x: 280,
		y: 420,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				hyper.currentMode = "hard";
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
				levels.currentZone = -1;
				player.handicap = 0;
				if (menus.soundOn){
					startSound.currentTime = 0;
					startSound.play();
				}
				gameState = "play";
			}
		},
		draw: function(){
			if (hyper.currentMode == "hard"){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Hard", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	insaneButton: {
		x: 280,
		y: 500,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				hyper.currentMode = "insane";
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
				levels.currentZone = -1;
				player.handicap = 0;
				if (menus.soundOn){
					startSound.currentTime = 0;
					startSound.play();
				}
				gameState = "play";
			}
		},
		draw: function(){
			if (hyper.currentMode == "insane"){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Insane", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	reset: function(){
		this.bgProgress = -1800;
		this.bg = 1;
		this.timeAlive = 0;
		this.spawnTimer = 0;
		this.spawnTimerMax = 120;
	},
	backgrounds: function(){
		if (this.bg == 1){
			ctx.drawImage(spaceBG, 0, this.bgProgress);
			if (this.bgProgress > -600){
				ctx.drawImage(jungleBG, 0, this.bgProgress-1800);
			}
			ctx.drawImage(levelTransition, 0, this.bgProgress+2300);
			ctx.drawImage(levelTransition, 0, this.bgProgress+500);
		}
		else if (this.bg == 2){
			ctx.drawImage(jungleBG, 0, this.bgProgress);
			if (this.bgProgress > -600){
				ctx.drawImage(caveBG, 0, this.bgProgress-1800);
			}
			ctx.drawImage(levelTransition, 0, this.bgProgress+2300);
			ctx.drawImage(levelTransition, 0, this.bgProgress+500);
		}
		else if (this.bg == 3){
			ctx.drawImage(caveBG, 0, this.bgProgress);
			if (this.bgProgress > -600){
				ctx.drawImage(desertBG, 0, this.bgProgress-1800);
			}
			ctx.drawImage(levelTransition, 0, this.bgProgress+2300);
			ctx.drawImage(levelTransition, 0, this.bgProgress+500);
		}
		else if (this.bg == 4){
			ctx.drawImage(desertBG, 0, this.bgProgress);
			if (this.bgProgress > -600){
				ctx.drawImage(lavaBG, 0, this.bgProgress-1800);
			}
			ctx.drawImage(levelTransition, 0, this.bgProgress+2300);
			ctx.drawImage(levelTransition, 0, this.bgProgress+500);
		}
		else if (this.bg == 5){
			ctx.drawImage(lavaBG, 0, this.bgProgress);
			if (this.bgProgress > -600){
				ctx.drawImage(darkBG, 0, this.bgProgress-1800);
			}
			ctx.drawImage(levelTransition, 0, this.bgProgress+2300);
			ctx.drawImage(levelTransition, 0, this.bgProgress+500);
		}
		else if (this.bg == 6){
			ctx.drawImage(darkBG, 0, this.bgProgress);
			if (this.bgProgress > -600){
				ctx.drawImage(spaceBG, 0, this.bgProgress-1800);
			}
			ctx.drawImage(levelTransition, 0, this.bgProgress+2300);
			ctx.drawImage(levelTransition, 0, this.bgProgress+500);
		}
		if (this.bgProgress == 0){
			this.bgProgress = -1800;
			if (this.bg < 6){
				this.bg++;
			}
			else{
				this.bg = 1;
			}
		}
		else{
			this.bgProgress++;
		}
	},
	// Random enemy spawning
	randomSpawn: function(enemyNum){
		for (enemyNum; enemyNum > 0; enemyNum--){
			var randomEnemy = 1;
			// Limit spawnable enemies by time
			if (this.timeAlive < 1800){
				randomEnemy = randomInt(1,4);
			}
			else if (this.timeAlive < 3600){
				randomEnemy = randomInt(1,6);
			}
			else if (this.timeAlive < 5400){
				randomEnemy = randomInt(1,8);
			}
			else if (this.timeAlive < 7200){
				randomEnemy = randomInt(1,10);
			}
			else if (this.timeAlive < 9000){
				randomEnemy = randomInt(1,12);
			}
			else{
				randomEnemy = randomInt(1,14);
			}
			// Spawn enemies
			if (randomEnemy == 1){
				enemies.enemyArray.push(new slider(randomInt(50,700), -31, 32, 32, 8, 4, Math.round(100*(1+this.timeAlive/5400)), 10, true, Math.round(3*(1+this.timeAlive/5400)), Math.round(10*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 2){
				enemies.enemyArray.push(new charger(randomInt(50,700), -15, 16, 16, 5, 10, Math.round(50*(1+this.timeAlive/5400)), 10, Math.round(1*(1+this.timeAlive/5400)), Math.round(5*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 3){
				enemies.enemyArray.push(new shooter(randomInt(50,700), -31, 32, 32, 4, Math.round(200*(1+this.timeAlive/5400)), 10, 40, 60, Math.round(5*(1+this.timeAlive/5400)), Math.round(20*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 4){
				enemies.enemyArray.push(new tank(randomInt(50,700), -63, 64, 64, 2, 2, Math.round(400*(1+this.timeAlive/5400)), 15, Math.round(30*(1+this.timeAlive/5400)), Math.round(130*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 5){
				enemies.enemyArray.push(new sprayer(randomInt(50,700), -31, 32, 32, 3, Math.round(150*(1+this.timeAlive/5400)), 15, 15, 30, Math.round(10*(1+this.timeAlive/5400)), Math.round(40*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 6){
				enemies.enemyArray.push(new spreader(randomInt(50,700), -31, 32, 32, Math.round(300*(1+this.timeAlive/5400)), 15, 30, 30, Math.round(15*(1+this.timeAlive/5400)), Math.round(60*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 7){
				enemies.enemyArray.push(new sliderShooter(randomInt(50,700), -31, 32, 32, 8, 4, Math.round(250*(1+this.timeAlive/5400)), 15, true, 40, 60, Math.round(12*(1+this.timeAlive/5400)), Math.round(50*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 8){
				enemies.enemyArray.push(new clusterMine(randomInt(50,700), -31, 32, 32, 0, 0, Math.round(100*(1+this.timeAlive/5400)), 30, Math.round(7*(1+this.timeAlive/5400)), Math.round(25*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 9){
				enemies.enemyArray.push(new zipper(randomInt(50,700), -63, 64, 64, 3, 8, true, Math.round(1000*(1+this.timeAlive/5400)), 40, Math.round(25*(1+this.timeAlive/5400)), Math.round(200*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 10){
				enemies.enemyArray.push(new zapper(randomInt(50,700), -63, 64, 64, 3, 4, true, Math.round(400*(1+this.timeAlive/5400)), 40, Math.round(5*(1+this.timeAlive/5400)), Math.round(20*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 11){
				enemies.enemyArray.push(new clusterBomb(randomInt(50,700), -31, 32, 32, 0, 0, Math.round(250*(1+this.timeAlive/5400)), 60, Math.round(15*(1+this.timeAlive/5400)), Math.round(100*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 12){
				enemies.enemyArray.push(new gunner(randomInt(50,700), -31, 32, 32, Math.round(1000*(1+this.timeAlive/5400)), 60, 20, 20, Math.round(40*(1+this.timeAlive/5400)), Math.round(400*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 13){
				enemies.enemyArray.push(new speedShooter(randomInt(50,700), -31, 32, 32, 3, Math.round(1500*(1+this.timeAlive/5400)), 70, 20, 20, Math.round(70*(1+this.timeAlive/5400)), Math.round(700*(1+this.timeAlive/5400))));
			}
			else if (randomEnemy == 14){
				enemies.enemyArray.push(new superTank(randomInt(50,700), -63, 64, 64, 2, 2, Math.round(3000*(1+this.timeAlive/5400)), 80, Math.round(100*(1+this.timeAlive/5400)), Math.round(1000*(1+this.timeAlive/5400))));
			}
		}
	},
	// Level Layout
	levels: function(){
		if (this.spawnTimer == 0){
			this.randomSpawn(Math.floor(1+this.timeAlive/1800));
			this.spawnTimer = this.spawnTimerMax;
			if (this.spawnTimerMax > 30){
				this.spawnTimerMax--;
			}
		}
		else{
			this.spawnTimer--;
		}
		if (this.currentMode == "easy"){
			this.timeAlive++;
		}
		else if (this.currentMode == "normal"){
			this.timeAlive+=2;
		}
		else if (this.currentMode == "hard"){
			this.timeAlive+=3;
		}
		else if (this.currentMode == "insane"){
			this.timeAlive+=4;
		}
	},
	run: function(){
		this.easyButton.run();
		this.normalButton.run();
		this.hardButton.run();
		this.insaneButton.run();
	},
};