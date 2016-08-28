/*------------------------------------------------ Shield ----------------------------------------------*/
var shield = {
	x: 0,
	y: 0,
	width: 48,
	height: 48,
	active: false,
	timer: 0,
	timerMax: 40,
	cooldown: 0,
	cooldownMax: 450,
	flashTimer: 0,
	flashTimerMax: 15,
	reset: function(){
		this.active = false;
		this.timer = 0;
		this.cooldown = 0;
		this.flashTimer = 0;
	},
	// Activate if able on press
	keys: function(){
		if (32 in keysDown && !this.active){
			if (this.cooldown == 0){
				if (menus.soundOn){
					shieldSound.currentTime=0;
					shieldSound.play();
				}
				this.active = true;
				this.timer = this.timerMax;
			}
			else{
				this.cooldown--;
			}
		}
	},
	// Move to line up with the player
	move: function(){
		this.x = player.x - 23;
		this.y = player.y - 18;
	},
	// Apply shield effects
	effect: function(){
		if (this.active){
			for (var j = 0, enemyWeapon; enemyWeapon = enemyWeapons.enemyWeaponArray[j]; j++) {
				if (collision(this, enemyWeapon)){
					enemyWeapon.hit(j, false);
					this.flashTimer = this.flashTimerMax;
				}
			}
			this.timer--;
			if (this.timer == 0){
				this.cooldown = this.cooldownMax;
				this.active = false;
			}
		}
		else if (this.cooldown != 0){
			this.cooldown--;
		}
	},
	// Draw the shield when active
	draw: function(){
		if (this.active){
			if (this.flashTimer == 0){
				ctx.drawImage(shieldImg, this.x, this.y);
			}
			else{
				ctx.drawImage(shieldFlash, this.x, this.y);
				this.flashTimer--;
			}
		}
	},
	// Run everything
	run: function(){
		this.keys();
		this.move();
		this.effect();
		this.draw();
	},
};