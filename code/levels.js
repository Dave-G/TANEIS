/*------------------------------------------------ Levels ----------------------------------------------*/
levels = {
	currentZone: 1,
	currentLevel: 1,
	levelProgress: -1800,
	zone2Unlocked: true,
	zone3Unlocked: false,
	zone4Unlocked: false,
	zone5Unlocked: false,
	zone6Unlocked: false,
	// levels and their corresponding high scores
	levelScoreArray: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 
		11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 
		22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0, 31: 0, 32: 0, 
		33: 0, 34: 0, 35: 0, 36: 0},
	// level unlocks - 6 levels per zone
	levelUnlockArray: {0: false, 1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 
		11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 
		22: false, 23: false, 24: false, 25: false, 26: false, 27: false, 28: false, 29: false, 30: false, 31: false, 32: false, 
		33: false, 34: false, 35: false, 36: false},
	// level ace scores
	levelAceArray: {0: 0, 1: 500, 2: 600, 3: 700, 4: 800, 5: 900, 6: 1200, 7: 2500, 8: 2600, 9: 2700, 10: 2800, 
		11: 2900, 12: 3200, 13: 4500, 14: 4600, 15: 4700, 16: 4800, 17: 4900, 18: 5200, 19: 6500, 20: 6600, 21: 6700, 
		22: 6800, 23: 6900, 24: 7200, 25: 8500, 26: 8600, 27: 8700, 28: 8800, 29: 8900, 30: 9200, 31: 10500, 32: 10600, 
		33: 10700, 34: 10800, 35: 10900, 36: 11200},
	/*------------------ Buttons --------------------*/
	zone1Button: {
		x: 60,
		y: 100,
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
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				levels.currentZone = 1;
			}
		},
		draw: function(){
			if (levels.currentZone == 1){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Zone 1: Outworld", this.x+90, this.y+43);
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	zone2Button: {
		x: 60,
		y: 180,
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
			if (mouseClick(this) && levels.zone2Unlocked){
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				levels.currentZone = 2;
			}
		},
		draw: function(){
			if (levels.zone2Unlocked){
				if (levels.currentZone == 2){
					ctx.drawImage(octagonGreen, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(octagonTeal, this.x-8, this.y-8);
				}
			}
			else{
				ctx.drawImage(octagonDark, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.zone2Unlocked){
				ctx.fillText("Zone 2: Lost Wilds", this.x+90, this.y+43);
			}
			else{
				ctx.fillText("Zone 2: ????????", this.x+90, this.y+43);
			}
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	zone3Button: {
		x: 60,
		y: 260,
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
			if (mouseClick(this) && levels.zone3Unlocked){
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				levels.currentZone = 3;
			}
		},
		draw: function(){
			if (levels.zone3Unlocked){
				if (levels.currentZone == 3){
					ctx.drawImage(octagonGreen, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(octagonTeal, this.x-8, this.y-8);
				}
			}
			else{
				ctx.drawImage(octagonDark, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.zone3Unlocked){
				ctx.fillText("Zone 3: Deep Mines", this.x+90, this.y+43);
			}
			else{
				ctx.fillText("Zone 3: ????????", this.x+90, this.y+43);
			}
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	zone4Button: {
		x: 60,
		y: 340,
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
			if (mouseClick(this) && levels.zone4Unlocked){
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				levels.currentZone = 4;
			}
		},
		draw: function(){
			if (levels.zone4Unlocked){
				if (levels.currentZone == 4){
					ctx.drawImage(octagonGreen, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(octagonTeal, this.x-8, this.y-8);
				}
			}
			else{
				ctx.drawImage(octagonDark, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.zone4Unlocked){
				ctx.fillText("Zone 4: Desert Star", this.x+90, this.y+43);
			}
			else{
				ctx.fillText("Zone 4: ????????", this.x+90, this.y+43);
			}
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	zone5Button: {
		x: 60,
		y: 420,
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
			if (mouseClick(this) && levels.zone5Unlocked){
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				levels.currentZone = 5;
			}
		},
		draw: function(){
			if (levels.zone5Unlocked){
				if (levels.currentZone == 5){
					ctx.drawImage(octagonGreen, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(octagonTeal, this.x-8, this.y-8);
				}
			}
			else{
				ctx.drawImage(octagonDark, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.zone5Unlocked){
				ctx.fillText("Zone 5: Fiery Core", this.x+90, this.y+43);
			}
			else{
				ctx.fillText("Zone 5: ????????", this.x+90, this.y+43);
			}
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	zone6Button: {
		x: 60,
		y: 500,
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
			if (mouseClick(this) && levels.zone6Unlocked){
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				levels.currentZone = 6;
			}
		},
		draw: function(){
			if (levels.zone6Unlocked){
				if (levels.currentZone == 6){
					ctx.drawImage(octagonGreen, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(octagonTeal, this.x-8, this.y-8);
				}
			}
			else{
				ctx.drawImage(octagonDark, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.zone6Unlocked){
				ctx.fillText("Zone 6: Dark Void", this.x+90, this.y+43);
			}
			else{
				ctx.fillText("Zone 6: ????????", this.x+90, this.y+43);
			}
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	level1Button: {
		x: 550,
		y: 100,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				if (levels.currentZone == 1){
					levels.currentLevel = 1;
				}
				else if (levels.currentZone == 2){
					levels.currentLevel = 7;
				}
				else if (levels.currentZone == 3){
					levels.currentLevel = 13;
				}
				else if (levels.currentZone == 4){
					levels.currentLevel = 19;
				}
				else if (levels.currentZone == 5){
					levels.currentLevel = 25;
				}
				else if (levels.currentZone == 6){
					levels.currentLevel = 31;
				}
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
				if (levels.currentZone == 1 && levels.levelUnlockArray[1]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 2 && levels.levelUnlockArray[7]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 3 && levels.levelUnlockArray[13]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 4 && levels.levelUnlockArray[19]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 5 && levels.levelUnlockArray[25]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 6 && levels.levelUnlockArray[31]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.currentZone == 1){
				ctx.fillText("Level 1", this.x+90, this.y+43);
				if (levels.levelUnlockArray[1]){
					if (levels.currentLevel == 1){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 2){
				ctx.fillText("Level 7", this.x+90, this.y+43);
				if (levels.levelUnlockArray[7]){
					if (levels.currentLevel == 7){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 3){
				ctx.fillText("Level 13", this.x+90, this.y+43);
				if (levels.levelUnlockArray[13]){
					if (levels.currentLevel == 13){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 4){
				ctx.fillText("Level 19", this.x+90, this.y+43);
				if (levels.levelUnlockArray[19]){
					if (levels.currentLevel == 19){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 5){
				ctx.fillText("Level 25", this.x+90, this.y+43);
				if (levels.levelUnlockArray[25]){
					if (levels.currentLevel == 25){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 6){
				ctx.fillText("Level 31", this.x+90, this.y+43);
				if (levels.levelUnlockArray[31]){
					if (levels.currentLevel == 31){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	level2Button: {
		x: 550,
		y: 180,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				if (levels.currentZone == 1){
					levels.currentLevel = 2;
				}
				else if (levels.currentZone == 2){
					levels.currentLevel = 8;
				}
				else if (levels.currentZone == 3){
					levels.currentLevel = 14;
				}
				else if (levels.currentZone == 4){
					levels.currentLevel = 20;
				}
				else if (levels.currentZone == 5){
					levels.currentLevel = 26;
				}
				else if (levels.currentZone == 6){
					levels.currentLevel = 32;
				}
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
				if (levels.currentZone == 1 && levels.levelUnlockArray[2]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 2 && levels.levelUnlockArray[8]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 3 && levels.levelUnlockArray[14]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 4 && levels.levelUnlockArray[20]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 5 && levels.levelUnlockArray[26]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 6 && levels.levelUnlockArray[32]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.currentZone == 1){
				ctx.fillText("Level 2", this.x+90, this.y+43);
				if (levels.levelUnlockArray[2]){
					if (levels.currentLevel == 2){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 2){
				ctx.fillText("Level 8", this.x+90, this.y+43);
				if (levels.levelUnlockArray[8]){
					if (levels.currentLevel == 8){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 3){
				ctx.fillText("Level 14", this.x+90, this.y+43);
				if (levels.levelUnlockArray[14]){
					if (levels.currentLevel == 14){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 4){
				ctx.fillText("Level 20", this.x+90, this.y+43);
				if (levels.levelUnlockArray[20]){
					if (levels.currentLevel == 20){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 5){
				ctx.fillText("Level 26", this.x+90, this.y+43);
				if (levels.levelUnlockArray[26]){
					if (levels.currentLevel == 26){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 6){
				ctx.fillText("Level 32", this.x+90, this.y+43);
				if (levels.levelUnlockArray[32]){
					if (levels.currentLevel == 32){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	level3Button: {
		x: 550,
		y: 260,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				if (levels.currentZone == 1){
					levels.currentLevel = 3;
				}
				else if (levels.currentZone == 2){
					levels.currentLevel = 9;
				}
				else if (levels.currentZone == 3){
					levels.currentLevel = 15;
				}
				else if (levels.currentZone == 4){
					levels.currentLevel = 21;
				}
				else if (levels.currentZone == 5){
					levels.currentLevel = 27;
				}
				else if (levels.currentZone == 6){
					levels.currentLevel = 33;
				}
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
				if (levels.currentZone == 1 && levels.levelUnlockArray[3]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 2 && levels.levelUnlockArray[9]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 3 && levels.levelUnlockArray[15]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 4 && levels.levelUnlockArray[21]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 5 && levels.levelUnlockArray[27]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 6 && levels.levelUnlockArray[33]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.currentZone == 1){
				ctx.fillText("Level 3", this.x+90, this.y+43);
				if (levels.levelUnlockArray[3]){
					if (levels.currentLevel == 3){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 2){
				ctx.fillText("Level 9", this.x+90, this.y+43);
				if (levels.levelUnlockArray[9]){
					if (levels.currentLevel == 9){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 3){
				ctx.fillText("Level 15", this.x+90, this.y+43);
				if (levels.levelUnlockArray[15]){
					if (levels.currentLevel == 15){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 4){
				ctx.fillText("Level 21", this.x+90, this.y+43);
				if (levels.levelUnlockArray[21]){
					if (levels.currentLevel == 21){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 5){
				ctx.fillText("Level 27", this.x+90, this.y+43);
				if (levels.levelUnlockArray[27]){
					if (levels.currentLevel == 27){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 6){
				ctx.fillText("Level 33", this.x+90, this.y+43);
				if (levels.levelUnlockArray[33]){
					if (levels.currentLevel == 33){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	level4Button: {
		x: 550,
		y: 340,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				if (levels.currentZone == 1){
					levels.currentLevel = 4;
				}
				else if (levels.currentZone == 2){
					levels.currentLevel = 10;
				}
				else if (levels.currentZone == 3){
					levels.currentLevel = 16;
				}
				else if (levels.currentZone == 4){
					levels.currentLevel = 22;
				}
				else if (levels.currentZone == 5){
					levels.currentLevel = 28;
				}
				else if (levels.currentZone == 6){
					levels.currentLevel = 34;
				}
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
				if (levels.currentZone == 1 && levels.levelUnlockArray[4]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 2 && levels.levelUnlockArray[10]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 3 && levels.levelUnlockArray[16]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 4 && levels.levelUnlockArray[22]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 5 && levels.levelUnlockArray[28]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 6 && levels.levelUnlockArray[34]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.currentZone == 1){
				ctx.fillText("Level 4", this.x+90, this.y+43);
				if (levels.levelUnlockArray[4]){
					if (levels.currentLevel == 4){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 2){
				ctx.fillText("Level 10", this.x+90, this.y+43);
				if (levels.levelUnlockArray[10]){
					if (levels.currentLevel == 10){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 3){
				ctx.fillText("Level 16", this.x+90, this.y+43);
				if (levels.levelUnlockArray[16]){
					if (levels.currentLevel == 16){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 4){
				ctx.fillText("Level 22", this.x+90, this.y+43);
				if (levels.levelUnlockArray[22]){
					if (levels.currentLevel == 22){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 5){
				ctx.fillText("Level 28", this.x+90, this.y+43);
				if (levels.levelUnlockArray[28]){
					if (levels.currentLevel == 28){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 6){
				ctx.fillText("Level 34", this.x+90, this.y+43);
				if (levels.levelUnlockArray[34]){
					if (levels.currentLevel == 34){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	level5Button: {
		x: 550,
		y: 420,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				if (levels.currentZone == 1){
					levels.currentLevel = 5;
				}
				else if (levels.currentZone == 2){
					levels.currentLevel = 11;
				}
				else if (levels.currentZone == 3){
					levels.currentLevel = 17;
				}
				else if (levels.currentZone == 4){
					levels.currentLevel = 23;
				}
				else if (levels.currentZone == 5){
					levels.currentLevel = 29;
				}
				else if (levels.currentZone == 6){
					levels.currentLevel = 35;
				}
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
				if (levels.currentZone == 1 && levels.levelUnlockArray[5]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 2 && levels.levelUnlockArray[11]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 3 && levels.levelUnlockArray[17]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 4 && levels.levelUnlockArray[23]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 5 && levels.levelUnlockArray[29]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 6 && levels.levelUnlockArray[35]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.currentZone == 1){
				ctx.fillText("Level 5", this.x+90, this.y+43);
				if (levels.levelUnlockArray[5]){
					if (levels.currentLevel == 5){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 2){
				ctx.fillText("Level 11", this.x+90, this.y+43);
				if (levels.levelUnlockArray[11]){
					if (levels.currentLevel == 11){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 3){
				ctx.fillText("Level 17", this.x+90, this.y+43);
				if (levels.levelUnlockArray[17]){
					if (levels.currentLevel == 17){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 4){
				ctx.fillText("Level 23", this.x+90, this.y+43);
				if (levels.levelUnlockArray[23]){
					if (levels.currentLevel == 23){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 5){
				ctx.fillText("Level 29", this.x+90, this.y+43);
				if (levels.levelUnlockArray[29]){
					if (levels.currentLevel == 29){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 6){
				ctx.fillText("Level 35", this.x+90, this.y+43);
				if (levels.levelUnlockArray[35]){
					if (levels.currentLevel == 35){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	level6Button: {
		x: 550,
		y: 500,
		width: 48,
		height: 48,
		selectorTimer: 45,
		selectorTimerMax: 45,
		selectorGoingDown: true,
		click: function(){
			if (mouseOver(this)){
				if (levels.currentZone == 1){
					levels.currentLevel = 6;
				}
				else if (levels.currentZone == 2){
					levels.currentLevel = 12;
				}
				else if (levels.currentZone == 3){
					levels.currentLevel = 18;
				}
				else if (levels.currentZone == 4){
					levels.currentLevel = 24;
				}
				else if (levels.currentZone == 5){
					levels.currentLevel = 30;
				}
				else if (levels.currentZone == 6){
					levels.currentLevel = 36;
				}
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
				if (levels.currentZone == 1 && levels.levelUnlockArray[6]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 2 && levels.levelUnlockArray[12]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 3 && levels.levelUnlockArray[18]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 4 && levels.levelUnlockArray[24]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 5 && levels.levelUnlockArray[30]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
				else if (levels.currentZone == 6 && levels.levelUnlockArray[36]){
					if (menus.soundOn){
						startSound.currentTime = 0;
						startSound.play();
					}
					gameState = "play";
				}
			}
		},
		draw: function(){
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			if (levels.currentZone == 1){
				ctx.fillText("Level 6", this.x+90, this.y+43);
				if (levels.levelUnlockArray[6]){
					if (levels.currentLevel == 6){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 2){
				ctx.fillText("Level 12", this.x+90, this.y+43);
				if (levels.levelUnlockArray[12]){
					if (levels.currentLevel == 12){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 3){
				ctx.fillText("Level 18", this.x+90, this.y+43);
				if (levels.levelUnlockArray[18]){
					if (levels.currentLevel == 18){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 4){
				ctx.fillText("Level 24", this.x+90, this.y+43);
				if (levels.levelUnlockArray[24]){
					if (levels.currentLevel == 24){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 5){
				ctx.fillText("Level 30", this.x+90, this.y+43);
				if (levels.levelUnlockArray[30]){
					if (levels.currentLevel == 30){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			else if (levels.currentZone == 6){
				ctx.fillText("Level 36", this.x+90, this.y+43);
				if (levels.levelUnlockArray[36]){
					if (levels.currentLevel == 36){
						ctx.drawImage(octagonGreen, this.x-8, this.y-8);
					}
					else{
						ctx.drawImage(octagonTeal, this.x-8, this.y-8);
					}
				}
				else{
					ctx.drawImage(octagonDark, this.x-8, this.y-8);
				}
			}
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			this.click();
			this.draw();
		},
	},
	sideBar: {
		x: 500,
		y: 0,
		width: 300,
		height: 600,
		draw: function(){
			ctx.drawImage(levelSideBar, this.x, this.y);
			ctx.font = "16pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Level: " + levels.currentLevel, this.x+35, this.y+20);
			ctx.fillText("High Score: " + levels.levelScoreArray[levels.currentLevel], this.x+35, this.y+50);
			if (levels.levelScoreArray[levels.currentLevel] >= levels.levelAceArray[levels.currentLevel]){
				ctx.fillStyle = "gold";
				ctx.fillText("Ace Rank Achieved!", this.x+35, this.y+80);
			}
			else{
				ctx.fillText("Ace Score: " + levels.levelAceArray[levels.currentLevel], this.x+35, this.y+80);
			}
		},
		run: function(){
			this.draw();
		},
	},
	/*-------------------------- Main Functions ------------------------*/
	checkHighScore: function(){
		if (this.currentZone == -1){
			if (hyper.currentMode == "easy"){
				if (player.score > hyper.easyHighScore){
					hyper.easyHighScore = player.score;
				}
			}
			else if (hyper.currentMode == "normal"){
				if (player.score > hyper.normalHighScore){
					hyper.normalHighScore = player.score;
				}
			}
			else if (hyper.currentMode == "hard"){
				if (player.score > hyper.hardHighScore){
					hyper.hardHighScore = player.score;
				}
			}
			else if (hyper.currentMode == "insane"){
				if (player.score > hyper.insaneHighScore){
					hyper.insaneHighScore = player.score;
				}
			}
		}
		else if (player.score > this.levelScoreArray[this.currentLevel]){
			this.levelScoreArray[this.currentLevel] = player.score;
		}
	},
	reset: function(){
		this.levelProgress = -1800;
		if (this.currentLevel < 1){
			this.currentLevel = 1;
		}
		if (this.currentZone < 1){
			this.currentZone = 1;
		}
	},
	// Unlock levels/zones based on the completed level
	levelUnlock: function(){
		if (this.currentLevel == 1){
			this.levelUnlockArray[2] = true;
		}
		else if (this.currentLevel == 2){
			this.levelUnlockArray[3] = true;
		}
		else if (this.currentLevel == 3){
			this.levelUnlockArray[4] = true;
		}
		else if (this.currentLevel == 4){
			this.levelUnlockArray[5] = true;
		}
		else if (this.currentLevel == 5){
			this.levelUnlockArray[6] = true;
		}
		else if (this.currentLevel == 6){
			this.zone2Unlocked = true;
			this.levelUnlockArray[7] = true;
		}
		else if (this.currentLevel == 7){
			this.levelUnlockArray[8] = true;
		}
		else if (this.currentLevel == 8){
			this.levelUnlockArray[9] = true;
		}
		else if (this.currentLevel == 9){
			this.levelUnlockArray[10] = true;
		}
		else if (this.currentLevel == 10){
			this.levelUnlockArray[11] = true;
		}
		else if (this.currentLevel == 11){
			this.levelUnlockArray[12] = true;
		}
		else if (this.currentLevel == 12){
			this.zone3Unlocked = true;
			this.levelUnlockArray[13] = true;
		}
		else if (this.currentLevel == 13){
			this.levelUnlockArray[14] = true;
		}
		else if (this.currentLevel == 14){
			this.levelUnlockArray[15] = true;
		}
		else if (this.currentLevel == 15){
			this.levelUnlockArray[16] = true;
		}
		else if (this.currentLevel == 16){
			this.levelUnlockArray[17] = true;
		}
		else if (this.currentLevel == 17){
			this.levelUnlockArray[18] = true;
		}
		else if (this.currentLevel == 18){
			this.zone4Unlocked = true;
			this.levelUnlockArray[19] = true;
		}
		else if (this.currentLevel == 19){
			this.levelUnlockArray[20] = true;
		}
		else if (this.currentLevel == 20){
			this.levelUnlockArray[21] = true;
		}
		else if (this.currentLevel == 21){
			this.levelUnlockArray[22] = true;
		}
		else if (this.currentLevel == 22){
			this.levelUnlockArray[23] = true;
		}
		else if (this.currentLevel == 23){
			this.levelUnlockArray[24] = true;
		}
		else if (this.currentLevel == 24){
			this.zone5Unlocked = true;
			this.levelUnlockArray[25] = true;
		}
		else if (this.currentLevel == 25){
			this.levelUnlockArray[26] = true;
		}
		else if (this.currentLevel == 26){
			this.levelUnlockArray[27] = true;
		}
		else if (this.currentLevel == 27){
			this.levelUnlockArray[28] = true;
		}
		else if (this.currentLevel == 28){
			this.levelUnlockArray[29] = true;
		}
		else if (this.currentLevel == 29){
			this.levelUnlockArray[30] = true;
		}
		else if (this.currentLevel == 30){
			this.zone6Unlocked = true;
			this.levelUnlockArray[31] = true;
		}
		else if (this.currentLevel == 31){
			this.levelUnlockArray[32] = true;
		}
		else if (this.currentLevel == 32){
			this.levelUnlockArray[33] = true;
		}
		else if (this.currentLevel == 33){
			this.levelUnlockArray[34] = true;
		}
		else if (this.currentLevel == 34){
			this.levelUnlockArray[35] = true;
		}
		else if (this.currentLevel == 35){
			this.levelUnlockArray[36] = true;
		}
		else if (this.currentLevel == 36){
			hyper.unlocked = true;
		}
	},
	run: function(){
		if (gameState == "play"){
			// Hyper Mode is -1
			if (this.currentZone == -1){
				hyper.levels();
			}
			if (this.currentZone == 1){
				if (this.currentLevel == 1){
					levelLayout.level1();
				}
				else if (this.currentLevel == 2){
					levelLayout.level2();
				}
				else if (this.currentLevel == 3){
					levelLayout.level3();
				}
				else if (this.currentLevel == 4){
					levelLayout.level4();
				}
				else if (this.currentLevel == 5){
					levelLayout.level5();
				}
				else if (this.currentLevel == 6){
					levelLayout.level6();
				}
			}
			else if (this.currentZone == 2){
				if (this.currentLevel == 7){
					levelLayout.level7();
				}
				else if (this.currentLevel == 8){
					levelLayout.level8();
				}
				else if (this.currentLevel == 9){
					levelLayout.level9();
				}
				else if (this.currentLevel == 10){
					levelLayout.level10();
				}
				else if (this.currentLevel == 11){
					levelLayout.level11();
				}
				else if (this.currentLevel == 12){
					levelLayout.level12();
				}
			}
			else if (this.currentZone == 3){
				if (this.currentLevel == 13){
					levelLayout.level13();
				}
				if (this.currentLevel == 14){
					levelLayout.level14();
				}
				if (this.currentLevel == 15){
					levelLayout.level15();
				}
				if (this.currentLevel == 16){
					levelLayout.level16();
				}
				if (this.currentLevel == 17){
					levelLayout.level17();
				}
				if (this.currentLevel == 18){
					levelLayout.level18();
				}
			}
			else if (this.currentZone == 4){
				if (this.currentLevel == 19){
					levelLayout.level19();
				}
				if (this.currentLevel == 20){
					levelLayout.level20();
				}
				if (this.currentLevel == 21){
					levelLayout.level21();
				}
				if (this.currentLevel == 22){
					levelLayout.level22();
				}
				if (this.currentLevel == 23){
					levelLayout.level23();
				}
				if (this.currentLevel == 24){
					levelLayout.level24();
				}
			}
			else if (this.currentZone == 5){
				if (this.currentLevel == 25){
					levelLayout.level25();
				}
				if (this.currentLevel == 26){
					levelLayout.level26();
				}
				if (this.currentLevel == 27){
					levelLayout.level27();
				}
				if (this.currentLevel == 28){
					levelLayout.level28();
				}
				if (this.currentLevel == 29){
					levelLayout.level29();
				}
				if (this.currentLevel == 30){
					levelLayout.level30();
				}
			}
			else if (this.currentZone == 6){
				if (this.currentLevel == 31){
					levelLayout.level31();
				}
				if (this.currentLevel == 32){
					levelLayout.level32();
				}
				if (this.currentLevel == 33){
					levelLayout.level33();
				}
				if (this.currentLevel == 34){
					levelLayout.level34();
				}
				if (this.currentLevel == 35){
					levelLayout.level35();
				}
				if (this.currentLevel == 36){
					levelLayout.level36();
				}
			}
			if (this.currentZone > 0){
				if (this.levelProgress < 0){
					this.levelProgress++;
				}
				else{
					// End level once all enemies are killed on normal levels
					if (this.currentLevel != 6 && this.currentLevel != 12 && this.currentLevel != 18 && 
						this.currentLevel != 24 && this.currentLevel != 30 && this.currentLevel != 36){
						if (enemies.enemyArray.length == 0){
							this.levelUnlock();
							// reset handicap due to level completion
							player.handicap = 0;
							victorySound.currentTime=0;
							victorySound.play();
							transitions.createFade(1, 60, "white", "levelcomplete");
						}
					}
					else{
						// End level after boss dies
						if (bosses.bossKilled){
							this.levelUnlock();
							// reset handicap due to level completion
							player.handicap = 0;
							victorySound.currentTime=0;
							victorySound.play();
							transitions.createFade(1, 60, "white", "levelcomplete");
						}
						// Spawn boss at the end of the level after killing all enemies
						else if (enemies.enemyArray.length == 0 && !bosses.bossAlive){
							bosses.spawnBoss();
						}
					}
				}
			}
		}
		else if (gameState == "levelselect"){
			this.sideBar.draw();
			this.zone1Button.run();
			this.zone2Button.run();
			this.zone3Button.run();
			this.zone4Button.run();
			this.zone5Button.run();
			this.zone6Button.run();
			this.level1Button.run();
			this.level2Button.run();
			this.level3Button.run();
			this.level4Button.run();
			this.level5Button.run();
			this.level6Button.run();
		}
	},
};