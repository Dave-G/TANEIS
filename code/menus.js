/*------------------------------------------------ Menus ----------------------------------------------*/
var menus = {
	// Game Options that can be changed in the Options menu
	particlesOn: true,
	autoShootOn: true,
	soundOn: true,
	textAnimationsOn: true,
	levelSelectButton: {
		x: 300,
		y: 200,
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
				transitions.createFade(1, 15, "black", "levelselect");
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Level Select", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "mainmenu"){
				this.click();
				this.draw();
			}
		},
	},
	hyperModeButton: {
		x: 300,
		y: 280,
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
			if (mouseClick(this) && hyper.unlocked){
				if (menus.soundOn){
					clickSound.currentTime = 0;
					clickSound.play();
				}
				transitions.createFade(1, 15, "black", "hypermenu");
			}
		},
		draw: function(){
			if (hyper.unlocked){
				ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonDark, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Hyper Mode", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "mainmenu"){
				this.click();
				this.draw();
			}
		},
	},
	shopButton: {
		x: 300,
		y: 360,
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
				transitions.createFade(1, 15, "black", "shop");
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Upgrade Shop", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "mainmenu"){
				this.click();
				this.draw();
			}
		},
	},
	notifierIcon: {
		x: 573,
		y: 380,
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
			if (gameState == "mainmenu" && player.upgradePoints > 0){
				this.mouse();
				this.draw();
			}
		},
	},
	notifierIcon2: {
		x: 573,
		y: 300,
		width: 16,
		height: 16,
		mouse: function(){
			if (mouseOver(this)){
				ctx.fillStyle = "white";
				ctx.font = "10pt Arial";
				ctx.fillText("Requires Game Complete", this.x-35, this.y-15);
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
			if (gameState == "mainmenu" && !hyper.unlocked){
				this.mouse();
				this.draw();
			}
		},
	},
	optionsButton: {
		x: 300,
		y: 440,
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
				transitions.createFade(1, 15, "black", "options");
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Options", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "mainmenu"){
				this.click();
				this.draw();
			}
		},
	},
	creditsButton: {
		x: 300,
		y: 520,
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
				transitions.createFade(1, 15, "black", "credits");
			}
		},
		draw: function(){
			ctx.drawImage(octagonTeal, this.x-8, this.y-8);
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Credits", this.x+90, this.y+43);
			ctx.drawImage(hexLineMedium, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "mainmenu"){
				this.click();
				this.draw();
			}
		},
	},
	particlesOnButton: {
		x: 200,
		y: 200,
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
				menus.particlesOn = !menus.particlesOn;
			}
		},
		draw: function(){
			if (menus.particlesOn){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonRed, this.x-8, this.y-8);
			}
			
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Enable Particle Effects", this.x+90, this.y+43);
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "options"){
				this.click();
				this.draw();
			}
		},
	},
	autoShootOnButton: {
		x: 200,
		y: 280,
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
				menus.autoShootOn = !menus.autoShootOn;
			}
		},
		draw: function(){
			if (menus.autoShootOn){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonRed, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Enable Auto-Shoot", this.x+90, this.y+43);
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "options"){
				this.click();
				this.draw();
			}
		},
	},
	soundOnButton: {
		x: 200,
		y: 360,
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
				menus.soundOn = !menus.soundOn;
				if (!menus.soundOn){
					menuBGM.pause();
					menuBGM.currentTime=0;
				}
				else{
					clickSound.currentTime = 0;
					clickSound.play();
				}
			}
		},
		draw: function(){
			if (menus.soundOn){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonRed, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Enable Sound", this.x+90, this.y+43);
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "options"){
				this.click();
				this.draw();
			}
		},
	},
	textAnimationsOnButton: {
		x: 200,
		y: 440,
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
				menus.textAnimationsOn = !menus.textAnimationsOn;
			}
		},
		draw: function(){
			if (menus.textAnimationsOn){
				ctx.drawImage(octagonGreen, this.x-8, this.y-8);
			}
			else{
				ctx.drawImage(octagonRed, this.x-8, this.y-8);
			}
			ctx.font = "20pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Enable Text Effects", this.x+90, this.y+43);
			ctx.drawImage(hexLineLong, this.x+56, this.y-12);
		},
		run: function(){
			if (gameState == "options"){
				this.click();
				this.draw();
			}
		},
	},
	draw: function(){
		if (gameState == "mainmenu"){
			ctx.drawImage(pauseBG, 0, 0);
			ctx.fillStyle = "white";
			ctx.font = "32pt Lucida Sans Unicode";
			ctx.drawImage(titleImg, 0, 25);
			ctx.font = "18pt Lucida Sans Unicode";
			ctx.fillText("By David Gedarovich", 280, 150);
		}
		else if (gameState == "options"){
			ctx.drawImage(pauseBG, 0, 0);
			ctx.fillStyle = "white";
			ctx.font = "24pt Arial";
			ctx.fillText("Options", 330, 150);
		}
		else if (gameState == "hypermenu"){
			ctx.drawImage(pauseBG, 0, 0);
			ctx.fillStyle = "white";
			ctx.font = "24pt Arial";
			ctx.fillText("Hyper Mode", 310, 150);
			ctx.font = "18pt Arial";
			if (hyper.currentMode == "easy"){
				ctx.fillText("High Score: " + hyper.easyHighScore, 280, 190);
				if (hyper.easyHighScore < hyper.easyAceScore){
					ctx.fillText("Ace Rank Score: " + hyper.easyAceScore, 280, 220);
				}
				else{
					ctx.fillStyle = "gold";
					ctx.fillText("Ace Rank Achieved!", 280, 220);
				}
			}
			else if (hyper.currentMode == "normal"){
				ctx.fillText("High Score: " + hyper.normalHighScore, 280, 190);
				if (hyper.normalHighScore < hyper.normalAceScore){
					ctx.fillText("Ace Rank Score: " + hyper.normalAceScore, 280, 220);
				}
				else{
					ctx.fillStyle = "gold";
					ctx.fillText("Ace Rank Achieved!", 280, 220);
				}
			}
			else if (hyper.currentMode == "hard"){
				ctx.fillText("High Score: " + hyper.hardHighScore, 280, 190);
				if (hyper.hardHighScore < hyper.hardAceScore){
					ctx.fillText("Ace Rank Score: " + hyper.hardAceScore, 280, 220);
				}
				else{
					ctx.fillStyle = "gold";
					ctx.fillText("Ace Rank Achieved!", 280, 220);
				}
			}
			else if (hyper.currentMode == "insane"){
				ctx.fillText("High Score: " + hyper.insaneHighScore, 280, 190);
				if (hyper.insaneHighScore < hyper.insaneAceScore){
					ctx.fillText("Ace Rank Score: " + hyper.insaneAceScore, 280, 220);
				}
				else{
					ctx.fillStyle = "gold";
					ctx.fillText("Ace Rank Achieved!", 280, 220);
				}
			}
		}
		else if (gameState == "shop"){
			ctx.drawImage(pauseBG, 0, 0);
			ctx.fillStyle = "white";
			ctx.font = "24pt Arial";
			ctx.fillText("Upgrade Shop", 300, 80);
			ctx.font = "16pt Arial";
			if (player.level < 40){
				ctx.fillText("Player Level: " + player.level + " (" + player.exp + "/" + player.level*player.level*100 + " exp)", 280, 120);
			}
			else{
				ctx.fillText("Player Level: " + player.level + " (" + player.exp +" exp)", 280, 120);
			}
			ctx.fillText("Points to spend: " + player.upgradePoints, 280, 150);
		}
		else if (gameState == "credits"){
			ctx.drawImage(pauseBG, 0, 0);
			ctx.fillStyle = "white";
			ctx.font = "24pt Arial";
			ctx.fillText("Credits", 330, 150);
			ctx.font = "18pt Arial";
			ctx.fillText("Programming and Art by David Gedarovich", 180, 200);
			ctx.fillText("<dave.gedarovich@gmail.com>", 180, 230);
			ctx.fillText("Painted Backgrounds by Ashley Callahan", 180, 290);
			ctx.fillText("Sound by freesound.org (LS, knarmahfox)", 180, 350);
			ctx.fillText("Glass Knuckle Games", 180, 410);
			ctx.fillText("www.glassknuckle.com", 180, 440);
			ctx.fillText("www.facebook.com/GlassKnuckleGames", 180, 470);
		}
	},
	run: function(){
		this.draw();
		this.levelSelectButton.run();
		this.hyperModeButton.run();
		this.shopButton.run();
		this.notifierIcon.run();
		this.notifierIcon2.run();
		this.optionsButton.run();
		this.creditsButton.run();
		this.particlesOnButton.run();
		this.autoShootOnButton.run();
		this.soundOnButton.run();
		this.textAnimationsOnButton.run();
	},
};