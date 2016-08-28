/*------------------------------------------------ Upgrades ----------------------------------------------*/
var upgrades = {
	shieldDuration: 0,
	shieldCooldown: 0,
	itemDropRate: 0,
	healthRegeneration: 0,
	weaponDamageMultiplier: 0,
	plusButton1: {
		x: 178,
		y: 215,
		width: 16,
		height: 16,
		click: function(){
			if (mouseOver(this) && player.level < upgrades.shieldDuration*5){
				ctx.fillStyle = "white";
				ctx.font = "10pt Arial";
				ctx.fillText("Requires level " + upgrades.shieldDuration*5, this.x+20, this.y+10);
			}
			if (mouseClick(this) && player.upgradePoints >= 1 && player.level >= upgrades.shieldDuration*5){
				player.upgradePoints--;
				upgrades.shieldDuration++;
				shield.timerMax += 10;
				learnSound.currentTime=0;
				learnSound.play();
			}
		},
		draw: function(){
			if (player.level >= upgrades.shieldDuration*5 && player.upgradePoints > 0){
				if (mouseOver(this)){
					ctx.drawImage(plusButtonHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(plusButton, this.x-8, this.y-8);
				}
			}
			else if (player.upgradePoints > 0 || player.level < upgrades.shieldDuration*5){
				if (mouseOver(this)){
					ctx.drawImage(notifierHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(notifier, this.x-8, this.y-8);
				}
			}
		},
		run: function(){
			if (upgrades.shieldDuration < 5){
				this.click();
				this.draw();
			}
		},
	},
	plusButton2: {
		x: 573,
		y: 215,
		width: 16,
		height: 16,
		click: function(){
			if (mouseOver(this) && player.level < upgrades.shieldCooldown*5){
				ctx.fillStyle = "white";
				ctx.font = "10pt Arial";
				ctx.fillText("Requires level " + upgrades.shieldCooldown*5, this.x+20, this.y+10);
			}
			if (mouseClick(this) && player.upgradePoints >= 1 && player.level >= upgrades.shieldCooldown*5){
				player.upgradePoints--;
				upgrades.shieldCooldown++;
				shield.cooldownMax -= 30;
				learnSound.currentTime=0;
				learnSound.play();
			}
		},
		draw: function(){
			if (player.level >= upgrades.shieldCooldown*5 && player.upgradePoints > 0){
				if (mouseOver(this)){
					ctx.drawImage(plusButtonHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(plusButton, this.x-8, this.y-8);
				}
			}
			else if (player.upgradePoints > 0 || player.level < upgrades.shieldCooldown*5){
				if (mouseOver(this)){
					ctx.drawImage(notifierHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(notifier, this.x-8, this.y-8);
				}
			}
		},
		run: function(){
			if (upgrades.shieldCooldown < 5){
				this.click();
				this.draw();
			}
		},
	},
	plusButton3: {
		x: 178,
		y: 335,
		width: 16,
		height: 16,
		click: function(){
			if (mouseOver(this) && player.level < upgrades.itemDropRate*5){
				ctx.fillStyle = "white";
				ctx.font = "10pt Arial";
				ctx.fillText("Requires level " + upgrades.itemDropRate*5, this.x+20, this.y+10);
			}
			if (mouseClick(this) && player.upgradePoints >= 1 && player.level >= upgrades.itemDropRate*5){
				player.upgradePoints--;
				upgrades.itemDropRate++;
				learnSound.currentTime=0;
				learnSound.play();
			}
		},
		draw: function(){
			if (player.level >= upgrades.itemDropRate*5 && player.upgradePoints > 0){
				if (mouseOver(this)){
					ctx.drawImage(plusButtonHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(plusButton, this.x-8, this.y-8);
				}
			}
			else if (player.upgradePoints > 0 || player.level < upgrades.itemDropRate*5){
				if (mouseOver(this)){
					ctx.drawImage(notifierHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(notifier, this.x-8, this.y-8);
				}
			}
		},
		run: function(){
			if (upgrades.itemDropRate < 5){
				this.click();
				this.draw();
			}
		},
	},
	plusButton4: {
		x: 608,
		y: 335,
		width: 16,
		height: 16,
		click: function(){
			if (mouseOver(this) && player.level < upgrades.healthRegeneration*5){
				ctx.fillStyle = "white";
				ctx.font = "10pt Arial";
				ctx.fillText("Requires level " + upgrades.healthRegeneration*5, this.x+20, this.y+10);
			}
			if (mouseClick(this) && player.upgradePoints >= 1 && player.level >= upgrades.healthRegeneration*5){
				player.upgradePoints--;
				upgrades.healthRegeneration++;
				learnSound.currentTime=0;
				learnSound.play();
			}
		},
		draw: function(){
			if (player.level >= upgrades.healthRegeneration*5 && player.upgradePoints > 0){
				if (mouseOver(this)){
					ctx.drawImage(plusButtonHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(plusButton, this.x-8, this.y-8);
				}
			}
			else if (player.upgradePoints > 0 || player.level < upgrades.healthRegeneration*5){
				if (mouseOver(this)){
					ctx.drawImage(notifierHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(notifier, this.x-8, this.y-8);
				}
			}
		},
		run: function(){
			if (upgrades.healthRegeneration < 5){
				this.click();
				this.draw();
			}
		},
	},
	plusButton5: {
		x: 358,
		y: 455,
		width: 16,
		height: 16,
		click: function(){
			if (mouseClick(this) && player.upgradePoints >= 1){
				player.upgradePoints--;
				upgrades.weaponDamageMultiplier++;
				learnSound.currentTime=0;
				learnSound.play();
			}
		},
		draw: function(){
			if (player.upgradePoints > 0){
				if (mouseOver(this)){
					ctx.drawImage(plusButtonHighlight, this.x-8, this.y-8);
				}
				else{
					ctx.drawImage(plusButton, this.x-8, this.y-8);
				}
			}
		},
		run: function(){
			if (upgrades.weaponDamageMultiplier < 20){
				this.click();
				this.draw();
			}
		},
	},
	draw: function(){
		ctx.fillText("Shield Duration", 20, 230);
		if (this.shieldDuration == 5){
			ctx.drawImage(upgradeBarFull, 20, 250);
			ctx.drawImage(upgradeBarFull, 90, 250);
			ctx.drawImage(upgradeBarFull, 160, 250);
			ctx.drawImage(upgradeBarFull, 230, 250);
			ctx.drawImage(upgradeBarFull, 300, 250);
		}
		else if (this.shieldDuration == 4){
			ctx.drawImage(upgradeBarFull, 20, 250);
			ctx.drawImage(upgradeBarFull, 90, 250);
			ctx.drawImage(upgradeBarFull, 160, 250);
			ctx.drawImage(upgradeBarFull, 230, 250);
			ctx.drawImage(upgradeBarFrame, 300, 250);
		}
		else if (this.shieldDuration == 3){
			ctx.drawImage(upgradeBarFull, 20, 250);
			ctx.drawImage(upgradeBarFull, 90, 250);
			ctx.drawImage(upgradeBarFull, 160, 250);
			ctx.drawImage(upgradeBarFrame, 230, 250);
			ctx.drawImage(upgradeBarFrame, 300, 250);
		}
		else if (this.shieldDuration == 2){
			ctx.drawImage(upgradeBarFull, 20, 250);
			ctx.drawImage(upgradeBarFull, 90, 250);
			ctx.drawImage(upgradeBarFrame, 160, 250);
			ctx.drawImage(upgradeBarFrame, 230, 250);
			ctx.drawImage(upgradeBarFrame, 300, 250);
		}
		else if (this.shieldDuration == 1){
			ctx.drawImage(upgradeBarFull, 20, 250);
			ctx.drawImage(upgradeBarFrame, 90, 250);
			ctx.drawImage(upgradeBarFrame, 160, 250);
			ctx.drawImage(upgradeBarFrame, 230, 250);
			ctx.drawImage(upgradeBarFrame, 300, 250);
		}
		else{
			ctx.drawImage(upgradeBarFrame, 20, 250);
			ctx.drawImage(upgradeBarFrame, 90, 250);
			ctx.drawImage(upgradeBarFrame, 160, 250);
			ctx.drawImage(upgradeBarFrame, 230, 250);
			ctx.drawImage(upgradeBarFrame, 300, 250);
		}
		ctx.fillText("Shield Cooldown", 400, 230);
		if (this.shieldCooldown == 5){
			ctx.drawImage(upgradeBarFull, 400, 250);
			ctx.drawImage(upgradeBarFull, 470, 250);
			ctx.drawImage(upgradeBarFull, 540, 250);
			ctx.drawImage(upgradeBarFull, 610, 250);
			ctx.drawImage(upgradeBarFull, 680, 250);
		}
		else if (this.shieldCooldown == 4){
			ctx.drawImage(upgradeBarFull, 400, 250);
			ctx.drawImage(upgradeBarFull, 470, 250);
			ctx.drawImage(upgradeBarFull, 540, 250);
			ctx.drawImage(upgradeBarFull, 610, 250);
			ctx.drawImage(upgradeBarFrame, 680, 250);
		}
		else if (this.shieldCooldown == 3){
			ctx.drawImage(upgradeBarFull, 400, 250);
			ctx.drawImage(upgradeBarFull, 470, 250);
			ctx.drawImage(upgradeBarFull, 540, 250);
			ctx.drawImage(upgradeBarFrame, 610, 250);
			ctx.drawImage(upgradeBarFrame, 680, 250);
		}
		else if (this.shieldCooldown == 2){
			ctx.drawImage(upgradeBarFull, 400, 250);
			ctx.drawImage(upgradeBarFull, 470, 250);
			ctx.drawImage(upgradeBarFrame, 540, 250);
			ctx.drawImage(upgradeBarFrame, 610, 250);
			ctx.drawImage(upgradeBarFrame, 680, 250);
		}
		else if (this.shieldCooldown == 1){
			ctx.drawImage(upgradeBarFull, 400, 250);
			ctx.drawImage(upgradeBarFrame, 470, 250);
			ctx.drawImage(upgradeBarFrame, 540, 250);
			ctx.drawImage(upgradeBarFrame, 610, 250);
			ctx.drawImage(upgradeBarFrame, 680, 250);
		}
		else{
			ctx.drawImage(upgradeBarFrame, 400, 250);
			ctx.drawImage(upgradeBarFrame, 470, 250);
			ctx.drawImage(upgradeBarFrame, 540, 250);
			ctx.drawImage(upgradeBarFrame, 610, 250);
			ctx.drawImage(upgradeBarFrame, 680, 250);
		}
		ctx.fillText("Item Drop Rate", 20, 350);
		if (this.itemDropRate == 5){
			ctx.drawImage(upgradeBarFull, 20, 370);
			ctx.drawImage(upgradeBarFull, 90, 370);
			ctx.drawImage(upgradeBarFull, 160, 370);
			ctx.drawImage(upgradeBarFull, 230, 370);
			ctx.drawImage(upgradeBarFull, 300, 370);
		}
		else if (this.itemDropRate == 4){
			ctx.drawImage(upgradeBarFull, 20, 370);
			ctx.drawImage(upgradeBarFull, 90, 370);
			ctx.drawImage(upgradeBarFull, 160, 370);
			ctx.drawImage(upgradeBarFull, 230, 370);
			ctx.drawImage(upgradeBarFrame, 300, 370);
		}
		else if (this.itemDropRate == 3){
			ctx.drawImage(upgradeBarFull, 20, 370);
			ctx.drawImage(upgradeBarFull, 90, 370);
			ctx.drawImage(upgradeBarFull, 160, 370);
			ctx.drawImage(upgradeBarFrame, 230, 370);
			ctx.drawImage(upgradeBarFrame, 300, 370);
		}
		else if (this.itemDropRate == 2){
			ctx.drawImage(upgradeBarFull, 20, 370);
			ctx.drawImage(upgradeBarFull, 90, 370);
			ctx.drawImage(upgradeBarFrame, 160, 370);
			ctx.drawImage(upgradeBarFrame, 230, 370);
			ctx.drawImage(upgradeBarFrame, 300, 370);
		}
		else if (this.itemDropRate == 1){
			ctx.drawImage(upgradeBarFull, 20, 370);
			ctx.drawImage(upgradeBarFrame, 90, 370);
			ctx.drawImage(upgradeBarFrame, 160, 370);
			ctx.drawImage(upgradeBarFrame, 230, 370);
			ctx.drawImage(upgradeBarFrame, 300, 370);
		}
		else{
			ctx.drawImage(upgradeBarFrame, 20, 370);
			ctx.drawImage(upgradeBarFrame, 90, 370);
			ctx.drawImage(upgradeBarFrame, 160, 370);
			ctx.drawImage(upgradeBarFrame, 230, 370);
			ctx.drawImage(upgradeBarFrame, 300, 370);
		}
		ctx.fillText("Health Regeneration", 400, 350);
		if (this.healthRegeneration == 5){
			ctx.drawImage(upgradeBarFull, 400, 370);
			ctx.drawImage(upgradeBarFull, 470, 370);
			ctx.drawImage(upgradeBarFull, 540, 370);
			ctx.drawImage(upgradeBarFull, 610, 370);
			ctx.drawImage(upgradeBarFull, 680, 370);
		}
		else if (this.healthRegeneration == 4){
			ctx.drawImage(upgradeBarFull, 400, 370);
			ctx.drawImage(upgradeBarFull, 470, 370);
			ctx.drawImage(upgradeBarFull, 540, 370);
			ctx.drawImage(upgradeBarFull, 610, 370);
			ctx.drawImage(upgradeBarFrame, 680, 370);
		}
		else if (this.healthRegeneration == 3){
			ctx.drawImage(upgradeBarFull, 400, 370);
			ctx.drawImage(upgradeBarFull, 470, 370);
			ctx.drawImage(upgradeBarFull, 540, 370);
			ctx.drawImage(upgradeBarFrame, 610, 370);
			ctx.drawImage(upgradeBarFrame, 680, 370);
		}
		else if (this.healthRegeneration == 2){
			ctx.drawImage(upgradeBarFull, 400, 370);
			ctx.drawImage(upgradeBarFull, 470, 370);
			ctx.drawImage(upgradeBarFrame, 540, 370);
			ctx.drawImage(upgradeBarFrame, 610, 370);
			ctx.drawImage(upgradeBarFrame, 680, 370);
		}
		else if (this.healthRegeneration == 1){
			ctx.drawImage(upgradeBarFull, 400, 370);
			ctx.drawImage(upgradeBarFrame, 470, 370);
			ctx.drawImage(upgradeBarFrame, 540, 370);
			ctx.drawImage(upgradeBarFrame, 610, 370);
			ctx.drawImage(upgradeBarFrame, 680, 370);
		}
		else{
			ctx.drawImage(upgradeBarFrame, 400, 370);
			ctx.drawImage(upgradeBarFrame, 470, 370);
			ctx.drawImage(upgradeBarFrame, 540, 370);
			ctx.drawImage(upgradeBarFrame, 610, 370);
			ctx.drawImage(upgradeBarFrame, 680, 370);
		}
		ctx.fillText("Weapon Damage Multiplier (x" + (1+(upgrades.weaponDamageMultiplier/10)) + ")" , 30, 470);
		ctx.drawImage(upgradeBarFrame, 30, 490);
		ctx.drawImage(upgradeBarFrame, 100, 490);
		ctx.drawImage(upgradeBarFrame, 170, 490);
		ctx.drawImage(upgradeBarFrame, 240, 490);
		ctx.drawImage(upgradeBarFrame, 310, 490);
		ctx.drawImage(upgradeBarFrame, 380, 490);
		ctx.drawImage(upgradeBarFrame, 450, 490);
		ctx.drawImage(upgradeBarFrame, 520, 490);
		ctx.drawImage(upgradeBarFrame, 590, 490);
		ctx.drawImage(upgradeBarFrame, 660, 490);
		ctx.drawImage(upgradeBarFrame, 30, 540);
		ctx.drawImage(upgradeBarFrame, 100, 540);
		ctx.drawImage(upgradeBarFrame, 170, 540);
		ctx.drawImage(upgradeBarFrame, 240, 540);
		ctx.drawImage(upgradeBarFrame, 310, 540);
		ctx.drawImage(upgradeBarFrame, 380, 540);
		ctx.drawImage(upgradeBarFrame, 450, 540);
		ctx.drawImage(upgradeBarFrame, 520, 540);
		ctx.drawImage(upgradeBarFrame, 590, 540);
		ctx.drawImage(upgradeBarFrame, 660, 540);
		if (this.weaponDamageMultiplier >= 1){
			ctx.drawImage(upgradeBarFull, 30, 490);
		}
		if (this.weaponDamageMultiplier >= 2){
			ctx.drawImage(upgradeBarFull, 100, 490);
		}
		if (this.weaponDamageMultiplier >= 3){
			ctx.drawImage(upgradeBarFull, 170, 490);
		}
		if (this.weaponDamageMultiplier >= 4){
			ctx.drawImage(upgradeBarFull, 240, 490);
		}
		if (this.weaponDamageMultiplier >= 5){
			ctx.drawImage(upgradeBarFull, 310, 490);
		}
		if (this.weaponDamageMultiplier >= 6){
			ctx.drawImage(upgradeBarFull, 380, 490);
		}
		if (this.weaponDamageMultiplier >= 7){
			ctx.drawImage(upgradeBarFull, 450, 490);
		}
		if (this.weaponDamageMultiplier >= 8){
			ctx.drawImage(upgradeBarFull, 520, 490);
		}
		if (this.weaponDamageMultiplier >= 9){
			ctx.drawImage(upgradeBarFull, 590, 490);
		}
		if (this.weaponDamageMultiplier >= 10){
			ctx.drawImage(upgradeBarFull, 660, 490);
		}
		if (this.weaponDamageMultiplier >= 11){
			ctx.drawImage(upgradeBarFull, 30, 540);
		}
		if (this.weaponDamageMultiplier >= 12){
			ctx.drawImage(upgradeBarFull, 100, 540);
		}
		if (this.weaponDamageMultiplier >= 13){
			ctx.drawImage(upgradeBarFull, 170, 540);
		}
		if (this.weaponDamageMultiplier >= 14){
			ctx.drawImage(upgradeBarFull, 240, 540);
		}
		if (this.weaponDamageMultiplier >= 15){
			ctx.drawImage(upgradeBarFull, 310, 540);
		}
		if (this.weaponDamageMultiplier >= 16){
			ctx.drawImage(upgradeBarFull, 380, 540);
		}
		if (this.weaponDamageMultiplier >= 17){
			ctx.drawImage(upgradeBarFull, 450, 540);
		}
		if (this.weaponDamageMultiplier >= 18){
			ctx.drawImage(upgradeBarFull, 520, 540);
		}
		if (this.weaponDamageMultiplier >= 19){
			ctx.drawImage(upgradeBarFull, 590, 540);
		}
		if (this.weaponDamageMultiplier >= 20){
			ctx.drawImage(upgradeBarFull, 660, 540);
		}
	},
	run: function(){
		this.draw();
		this.plusButton1.run();
		this.plusButton2.run();
		this.plusButton3.run();
		this.plusButton4.run();
		this.plusButton5.run();
	},
};