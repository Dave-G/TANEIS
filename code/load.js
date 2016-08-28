/*------------------------------------------------ Load ----------------------------------------------*/
// Load saved game variables
load = {
	loadGame: function(){
		// Player
		player.level = $.jStorage.get("playerLevel");
		if(!player.level){
			player.level = 1;
			$.jStorage.set("playerLevel",1);
		}
		player.exp = $.jStorage.get("playerExp");
		if(!player.exp){
			player.exp = 0;
			$.jStorage.set("playerExp",0);
		}
		player.upgradePoints = $.jStorage.get("playerUpgradePoints");
		if(!player.upgradePoints){
			player.upgradePoints = 0;
			$.jStorage.set("playerUpgradePoints",0);
		}
		player.handicap = $.jStorage.get("playerHandicap");
		if(!player.handicap){
			player.handicap = 0;
			$.jStorage.set("playerHandicap",0);
		}
		// Upgrades
		upgrades.shieldDuration = $.jStorage.get("upgradesShieldDuration");
		if(!upgrades.shieldDuration){
			upgrades.shieldDuration = 0;
			$.jStorage.set("upgradesShieldDuration",0);
		}
		upgrades.shieldCooldown = $.jStorage.get("upgradesShieldCooldown");
		if(!upgrades.shieldCooldown){
			upgrades.shieldCooldown = 0;
			$.jStorage.set("upgradesShieldCooldown",0);
		}
		upgrades.itemDropRate = $.jStorage.get("upgradesItemDropRate");
		if(!upgrades.itemDropRate){
			upgrades.itemDropRate = 0;
			$.jStorage.set("upgradesItemDropRate",0);
		}
		upgrades.healthRegeneration = $.jStorage.get("upgradesHealthRegeneration");
		if(!upgrades.healthRegeneration){
			upgrades.healthRegeneration = 0;
			$.jStorage.set("upgradesHealthRegeneration",0);
		}
		upgrades.weaponDamageMultiplier = $.jStorage.get("upgradesWeaponDamageMultiplier");
		if(!upgrades.weaponDamageMultiplier){
			upgrades.weaponDamageMultiplier = 0;
			$.jStorage.set("upgradesWeaponDamageMultiplier",0);
		}
		// Options
		var menusParticlesOn = $.jStorage.get("menusParticlesOn");
		if(!menusParticlesOn){
			menus.particlesOn = true;
			$.jStorage.set("menusParticlesOn",0);
		}
		else if(menusParticlesOn == 1){
			menus.particlesOn = false;
		}
		var menusAutoShootOn = $.jStorage.get("menusAutoShootOn");
		if(!menusAutoShootOn){
			menus.autoShootOn = true;
			$.jStorage.set("menusParticlesOn",0);
		}
		else if(menusAutoShootOn == 1){
			menus.autoShootOn = false;
		}
		var menusSoundOn = $.jStorage.get("menusSoundOn");
		if(!menusSoundOn){
			menus.soundOn = true;
			$.jStorage.set("menusSoundOn",0);
		}
		else if(menusSoundOn == 1){
			menus.soundOn = false;
		}
		var menusTextAnimationsOn = $.jStorage.get("menusTextAnimationsOn");
		if(!menusTextAnimationsOn){
			menus.textAnimationsOn = true;
			$.jStorage.set("menusTextAnimationsOn",0);
		}
		else if(menusTextAnimationsOn == 1){
			menus.textAnimationsOn = false;
		}
		// Hyper Mode
		var hyperUnlocked = $.jStorage.get("hyperUnlocked");
		if(!hyperUnlocked){
			hyper.unlocked = false;
			$.jStorage.set("hyperUnlocked",0);
		}
		else if(hyperUnlocked == 1){
			hyper.unlocked = true;
		}
		hyper.easyHighScore = $.jStorage.get("hyperEasyHighScore");
		if(!hyper.easyHighScore){
			hyper.easyHighScore = 0;
			$.jStorage.set("hyperEasyHighScore",0);
		}
		hyper.normalHighScore = $.jStorage.get("hyperNormalHighScore");
		if(!hyper.normalHighScore){
			hyper.normalHighScore = 0;
			$.jStorage.set("hyperNormalHighScore",0);
		}
		hyper.hardHighScore = $.jStorage.get("hyperHardHighScore");
		if(!hyper.hardHighScore){
			hyper.hardHighScore = 0;
			$.jStorage.set("hyperHardHighScore",0);
		}
		hyper.insaneHighScore = $.jStorage.get("hyperInsaneHighScore");
		if(!hyper.insaneHighScore){
			hyper.insaneHighScore = 0;
			$.jStorage.set("hyperInsaneHighScore",0);
		}
		// Scores
		levels.levelScoreArray[0] = $.jStorage.get("levelsLevelScoreArray0");
		if(!levels.levelScoreArray[0]){
			levels.levelScoreArray[0] = 0;
			$.jStorage.set("levelsLevelScoreArray0",0);
		}
		levels.levelScoreArray[1] = $.jStorage.get("levelsLevelScoreArray1");
		if(!levels.levelScoreArray[1]){
			levels.levelScoreArray[1] = 0;
			$.jStorage.set("levelsLevelScoreArray1",0);
		}
		levels.levelScoreArray[2] = $.jStorage.get("levelsLevelScoreArray2");
		if(!levels.levelScoreArray[2]){
			levels.levelScoreArray[2] = 0;
			$.jStorage.set("levelsLevelScoreArray2",0);
		}
		levels.levelScoreArray[3] = $.jStorage.get("levelsLevelScoreArray3");
		if(!levels.levelScoreArray[3]){
			levels.levelScoreArray[3] = 0;
			$.jStorage.set("levelsLevelScoreArray3",0);
		}
		levels.levelScoreArray[4] = $.jStorage.get("levelsLevelScoreArray4");
		if(!levels.levelScoreArray[4]){
			levels.levelScoreArray[4] = 0;
			$.jStorage.set("levelsLevelScoreArray4",0);
		}
		levels.levelScoreArray[5] = $.jStorage.get("levelsLevelScoreArray5");
		if(!levels.levelScoreArray[5]){
			levels.levelScoreArray[5] = 0;
			$.jStorage.set("levelsLevelScoreArray5",0);
		}
		levels.levelScoreArray[6] = $.jStorage.get("levelsLevelScoreArray6");
		if(!levels.levelScoreArray[6]){
			levels.levelScoreArray[6] = 0;
			$.jStorage.set("levelsLevelScoreArray6",0);
		}
		levels.levelScoreArray[7] = $.jStorage.get("levelsLevelScoreArray7");
		if(!levels.levelScoreArray[7]){
			levels.levelScoreArray[7] = 0;
			$.jStorage.set("levelsLevelScoreArray7",0);
		}
		levels.levelScoreArray[8] = $.jStorage.get("levelsLevelScoreArray8");
		if(!levels.levelScoreArray[8]){
			levels.levelScoreArray[8] = 0;
			$.jStorage.set("levelsLevelScoreArray8",0);
		}
		levels.levelScoreArray[9] = $.jStorage.get("levelsLevelScoreArray9");
		if(!levels.levelScoreArray[9]){
			levels.levelScoreArray[9] = 0;
			$.jStorage.set("levelsLevelScoreArray9",0);
		}
		levels.levelScoreArray[10] = $.jStorage.get("levelsLevelScoreArray10");
		if(!levels.levelScoreArray[10]){
			levels.levelScoreArray[10] = 0;
			$.jStorage.set("levelsLevelScoreArray10",0);
		}
		levels.levelScoreArray[11] = $.jStorage.get("levelsLevelScoreArray11");
		if(!levels.levelScoreArray[11]){
			levels.levelScoreArray[11] = 0;
			$.jStorage.set("levelsLevelScoreArray11",0);
		}
		levels.levelScoreArray[12] = $.jStorage.get("levelsLevelScoreArray12");
		if(!levels.levelScoreArray[12]){
			levels.levelScoreArray[12] = 0;
			$.jStorage.set("levelsLevelScoreArray12",0);
		}
		levels.levelScoreArray[13] = $.jStorage.get("levelsLevelScoreArray13");
		if(!levels.levelScoreArray[13]){
			levels.levelScoreArray[13] = 0;
			$.jStorage.set("levelsLevelScoreArray13",0);
		}
		levels.levelScoreArray[14] = $.jStorage.get("levelsLevelScoreArray14");
		if(!levels.levelScoreArray[14]){
			levels.levelScoreArray[14] = 0;
			$.jStorage.set("levelsLevelScoreArray14",0);
		}
		levels.levelScoreArray[15] = $.jStorage.get("levelsLevelScoreArray15");
		if(!levels.levelScoreArray[15]){
			levels.levelScoreArray[15] = 0;
			$.jStorage.set("levelsLevelScoreArray15",0);
		}
		levels.levelScoreArray[16] = $.jStorage.get("levelsLevelScoreArray16");
		if(!levels.levelScoreArray[16]){
			levels.levelScoreArray[16] = 0;
			$.jStorage.set("levelsLevelScoreArray16",0);
		}
		levels.levelScoreArray[17] = $.jStorage.get("levelsLevelScoreArray17");
		if(!levels.levelScoreArray[17]){
			levels.levelScoreArray[17] = 0;
			$.jStorage.set("levelsLevelScoreArray17",0);
		}
		levels.levelScoreArray[18] = $.jStorage.get("levelsLevelScoreArray18");
		if(!levels.levelScoreArray[18]){
			levels.levelScoreArray[18] = 0;
			$.jStorage.set("levelsLevelScoreArray18",0);
		}
		levels.levelScoreArray[19] = $.jStorage.get("levelsLevelScoreArray19");
		if(!levels.levelScoreArray[19]){
			levels.levelScoreArray[19] = 0;
			$.jStorage.set("levelsLevelScoreArray19",0);
		}
		levels.levelScoreArray[20] = $.jStorage.get("levelsLevelScoreArray20");
		if(!levels.levelScoreArray[20]){
			levels.levelScoreArray[20] = 0;
			$.jStorage.set("levelsLevelScoreArray20",0);
		}
		levels.levelScoreArray[21] = $.jStorage.get("levelsLevelScoreArray21");
		if(!levels.levelScoreArray[21]){
			levels.levelScoreArray[21] = 0;
			$.jStorage.set("levelsLevelScoreArray21",0);
		}
		levels.levelScoreArray[22] = $.jStorage.get("levelsLevelScoreArray22");
		if(!levels.levelScoreArray[22]){
			levels.levelScoreArray[22] = 0;
			$.jStorage.set("levelsLevelScoreArray22",0);
		}
		levels.levelScoreArray[23] = $.jStorage.get("levelsLevelScoreArray23");
		if(!levels.levelScoreArray[23]){
			levels.levelScoreArray[23] = 0;
			$.jStorage.set("levelsLevelScoreArray23",0);
		}
		levels.levelScoreArray[24] = $.jStorage.get("levelsLevelScoreArray24");
		if(!levels.levelScoreArray[24]){
			levels.levelScoreArray[24] = 0;
			$.jStorage.set("levelsLevelScoreArray24",0);
		}
		levels.levelScoreArray[25] = $.jStorage.get("levelsLevelScoreArray25");
		if(!levels.levelScoreArray[25]){
			levels.levelScoreArray[25] = 0;
			$.jStorage.set("levelsLevelScoreArray25",0);
		}
		levels.levelScoreArray[26] = $.jStorage.get("levelsLevelScoreArray26");
		if(!levels.levelScoreArray[26]){
			levels.levelScoreArray[26] = 0;
			$.jStorage.set("levelsLevelScoreArray26",0);
		}
		levels.levelScoreArray[27] = $.jStorage.get("levelsLevelScoreArray27");
		if(!levels.levelScoreArray[27]){
			levels.levelScoreArray[27] = 0;
			$.jStorage.set("levelsLevelScoreArray27",0);
		}
		levels.levelScoreArray[28] = $.jStorage.get("levelsLevelScoreArray28");
		if(!levels.levelScoreArray[28]){
			levels.levelScoreArray[28] = 0;
			$.jStorage.set("levelsLevelScoreArray28",0);
		}
		levels.levelScoreArray[29] = $.jStorage.get("levelsLevelScoreArray29");
		if(!levels.levelScoreArray[29]){
			levels.levelScoreArray[29] = 0;
			$.jStorage.set("levelsLevelScoreArray29",0);
		}
		levels.levelScoreArray[30] = $.jStorage.get("levelsLevelScoreArray30");
		if(!levels.levelScoreArray[30]){
			levels.levelScoreArray[30] = 0;
			$.jStorage.set("levelsLevelScoreArray30",0);
		}
		levels.levelScoreArray[31] = $.jStorage.get("levelsLevelScoreArray31");
		if(!levels.levelScoreArray[31]){
			levels.levelScoreArray[31] = 0;
			$.jStorage.set("levelsLevelScoreArray31",0);
		}
		levels.levelScoreArray[32] = $.jStorage.get("levelsLevelScoreArray32");
		if(!levels.levelScoreArray[32]){
			levels.levelScoreArray[32] = 0;
			$.jStorage.set("levelsLevelScoreArray32",0);
		}
		levels.levelScoreArray[33] = $.jStorage.get("levelsLevelScoreArray33");
		if(!levels.levelScoreArray[33]){
			levels.levelScoreArray[33] = 0;
			$.jStorage.set("levelsLevelScoreArray3",0);
		}
		levels.levelScoreArray[34] = $.jStorage.get("levelsLevelScoreArray34");
		if(!levels.levelScoreArray[34]){
			levels.levelScoreArray[34] = 0;
			$.jStorage.set("levelsLevelScoreArray3",0);
		}
		levels.levelScoreArray[35] = $.jStorage.get("levelsLevelScoreArray35");
		if(!levels.levelScoreArray[35]){
			levels.levelScoreArray[35] = 0;
			$.jStorage.set("levelsLevelScoreArray35",0);
		}
		levels.levelScoreArray[36] = $.jStorage.get("levelsLevelScoreArray36");
		if(!levels.levelScoreArray[36]){
			levels.levelScoreArray[36] = 0;
			$.jStorage.set("levelsLevelScoreArray36",0);
		}
		// Zones
		var levelsZone2Unlocked = $.jStorage.get("levelsZone2Unlocked");
		if(!levelsZone2Unlocked){
			levels.zone2Unlocked = false;
			$.jStorage.set("levelsZone2Unlocked",0);
		}
		else if(levelsZone2Unlocked == 1){
			levels.zone2Unlocked = true;
		}
		var levelsZone3Unlocked = $.jStorage.get("levelsZone3Unlocked");
		if(!levelsZone3Unlocked){
			levels.zone3Unlocked = false;
			$.jStorage.set("levelsZone3Unlocked",0);
		}
		else if(levelsZone3Unlocked == 1){
			levels.zone3Unlocked = true;
		}
		var levelsZone4Unlocked = $.jStorage.get("levelsZone4Unlocked");
		if(!levelsZone4Unlocked){
			levels.zone4Unlocked = false;
			$.jStorage.set("levelsZone4Unlocked",0);
		}
		else if(levelsZone4Unlocked == 1){
			levels.zone4Unlocked = true;
		}
		var levelsZone5Unlocked = $.jStorage.get("levelsZone5Unlocked");
		if(!levelsZone5Unlocked){
			levels.zone5Unlocked = false;
			$.jStorage.set("levelsZone5Unlocked",0);
		}
		else if(levelsZone5Unlocked == 1){
			levels.zone5Unlocked = true;
		}
		var levelsZone6Unlocked = $.jStorage.get("levelsZone6Unlocked");
		if(!levelsZone6Unlocked){
			levels.zone6Unlocked = false;
			$.jStorage.set("levelsZone6Unlocked",0);
		}
		else if(levelsZone6Unlocked == 1){
			levels.zone6Unlocked = true;
		}
		// Levels
		var levelsLevel0Unlocked = $.jStorage.get("levelsLevel0Unlocked");
		if(!levelsLevel0Unlocked){
			levels.levelUnlockArray[0] = false;
			$.jStorage.set("levelsLevel0Unlocked",0);
		}
		else if(levelsLevel0Unlocked == 1){
			levels.levelUnlockArray[0] = true;
		}
		// Level 1 is always unlocked
		var levelsLevel1Unlocked = $.jStorage.get("levelsLevel1Unlocked");
		if(!levelsLevel1Unlocked){
			levels.levelUnlockArray[1] = true;
			$.jStorage.set("levelsLevel1Unlocked",1);
		}
		else if(levelsLevel1Unlocked == 1){
			levels.levelUnlockArray[1] = true;
		}
		var levelsLevel2Unlocked = $.jStorage.get("levelsLevel2Unlocked");
		if(!levelsLevel2Unlocked){
			levels.levelUnlockArray[2] = false;
			$.jStorage.set("levelsLevel2Unlocked",0);
		}
		else if(levelsLevel2Unlocked == 1){
			levels.levelUnlockArray[2] = true;
		}
		var levelsLevel3Unlocked = $.jStorage.get("levelsLevel3Unlocked");
		if(!levelsLevel3Unlocked){
			levels.levelUnlockArray[3] = false;
			$.jStorage.set("levelsLevel3Unlocked",0);
		}
		else if(levelsLevel3Unlocked == 1){
			levels.levelUnlockArray[3] = true;
		}
		var levelsLevel4Unlocked = $.jStorage.get("levelsLevel4Unlocked");
		if(!levelsLevel4Unlocked){
			levels.levelUnlockArray[4] = false;
			$.jStorage.set("levelsLevel4Unlocked",0);
		}
		else if(levelsLevel4Unlocked == 1){
			levels.levelUnlockArray[4] = true;
		}
		var levelsLevel5Unlocked = $.jStorage.get("levelsLevel5Unlocked");
		if(!levelsLevel5Unlocked){
			levels.levelUnlockArray[5] = false;
			$.jStorage.set("levelsLevel5Unlocked",0);
		}
		else if(levelsLevel5Unlocked == 1){
			levels.levelUnlockArray[5] = true;
		}
		var levelsLevel6Unlocked = $.jStorage.get("levelsLevel6Unlocked");
		if(!levelsLevel6Unlocked){
			levels.levelUnlockArray[6] = false;
			$.jStorage.set("levelsLevel6Unlocked",0);
		}
		else if(levelsLevel6Unlocked == 1){
			levels.levelUnlockArray[6] = true;
		}
		var levelsLevel7Unlocked = $.jStorage.get("levelsLevel7Unlocked");
		if(!levelsLevel7Unlocked){
			levels.levelUnlockArray[7] = false;
			$.jStorage.set("levelsLevel7Unlocked",0);
		}
		else if(levelsLevel7Unlocked == 1){
			levels.levelUnlockArray[7] = true;
		}
		var levelsLevel8Unlocked = $.jStorage.get("levelsLevel8Unlocked");
		if(!levelsLevel8Unlocked){
			levels.levelUnlockArray[8] = false;
			$.jStorage.set("levelsLevel8Unlocked",0);
		}
		else if(levelsLevel8Unlocked == 1){
			levels.levelUnlockArray[8] = true;
		}
		var levelsLevel9Unlocked = $.jStorage.get("levelsLevel9Unlocked");
		if(!levelsLevel9Unlocked){
			levels.levelUnlockArray[9] = false;
			$.jStorage.set("levelsLevel9Unlocked",0);
		}
		else if(levelsLevel9Unlocked == 1){
			levels.levelUnlockArray[9] = true;
		}
		var levelsLevel10Unlocked = $.jStorage.get("levelsLevel10Unlocked");
		if(!levelsLevel10Unlocked){
			levels.levelUnlockArray[10] = false;
			$.jStorage.set("levelsLevel10Unlocked",0);
		}
		else if(levelsLevel10Unlocked == 1){
			levels.levelUnlockArray[10] = true;
		}
		var levelsLevel11Unlocked = $.jStorage.get("levelsLevel11Unlocked");
		if(!levelsLevel11Unlocked){
			levels.levelUnlockArray[11] = false;
			$.jStorage.set("levelsLevel11Unlocked",0);
		}
		else if(levelsLevel11Unlocked == 1){
			levels.levelUnlockArray[11] = true;
		}
		var levelsLevel12Unlocked = $.jStorage.get("levelsLevel12Unlocked");
		if(!levelsLevel12Unlocked){
			levels.levelUnlockArray[12] = false;
			$.jStorage.set("levelsLevel12Unlocked",0);
		}
		else if(levelsLevel12Unlocked == 1){
			levels.levelUnlockArray[12] = true;
		}
		var levelsLevel13Unlocked = $.jStorage.get("levelsLevel13Unlocked");
		if(!levelsLevel13Unlocked){
			levels.levelUnlockArray[13] = false;
			$.jStorage.set("levelsLevel13Unlocked",0);
		}
		else if(levelsLevel13Unlocked == 1){
			levels.levelUnlockArray[13] = true;
		}
		var levelsLevel14Unlocked = $.jStorage.get("levelsLevel14Unlocked");
		if(!levelsLevel14Unlocked){
			levels.levelUnlockArray[14] = false;
			$.jStorage.set("levelsLevel14Unlocked",0);
		}
		else if(levelsLevel14Unlocked == 1){
			levels.levelUnlockArray[14] = true;
		}
		var levelsLevel15Unlocked = $.jStorage.get("levelsLevel15Unlocked");
		if(!levelsLevel15Unlocked){
			levels.levelUnlockArray[15] = false;
			$.jStorage.set("levelsLevel15Unlocked",0);
		}
		else if(levelsLevel15Unlocked == 1){
			levels.levelUnlockArray[15] = true;
		}
		var levelsLevel16Unlocked = $.jStorage.get("levelsLevel16Unlocked");
		if(!levelsLevel16Unlocked){
			levels.levelUnlockArray[16] = false;
			$.jStorage.set("levelsLevel16Unlocked",0);
		}
		else if(levelsLevel16Unlocked == 1){
			levels.levelUnlockArray[16] = true;
		}
		var levelsLevel17Unlocked = $.jStorage.get("levelsLevel17Unlocked");
		if(!levelsLevel17Unlocked){
			levels.levelUnlockArray[17] = false;
			$.jStorage.set("levelsLevel17Unlocked",0);
		}
		else if(levelsLevel17Unlocked == 1){
			levels.levelUnlockArray[17] = true;
		}
		var levelsLevel18Unlocked = $.jStorage.get("levelsLevel18Unlocked");
		if(!levelsLevel18Unlocked){
			levels.levelUnlockArray[18] = false;
			$.jStorage.set("levelsLevel18Unlocked",0);
		}
		else if(levelsLevel18Unlocked == 1){
			levels.levelUnlockArray[18] = true;
		}
		var levelsLevel19Unlocked = $.jStorage.get("levelsLevel19Unlocked");
		if(!levelsLevel19Unlocked){
			levels.levelUnlockArray[19] = false;
			$.jStorage.set("levelsLevel19Unlocked",0);
		}
		else if(levelsLevel19Unlocked == 1){
			levels.levelUnlockArray[19] = true;
		}
		var levelsLevel20Unlocked = $.jStorage.get("levelsLevel20Unlocked");
		if(!levelsLevel20Unlocked){
			levels.levelUnlockArray[20] = false;
			$.jStorage.set("levelsLevel20Unlocked",0);
		}
		else if(levelsLevel20Unlocked == 1){
			levels.levelUnlockArray[20] = true;
		}
		var levelsLevel21Unlocked = $.jStorage.get("levelsLevel21Unlocked");
		if(!levelsLevel21Unlocked){
			levels.levelUnlockArray[21] = false;
			$.jStorage.set("levelsLevel21Unlocked",0);
		}
		else if(levelsLevel21Unlocked == 1){
			levels.levelUnlockArray[21] = true;
		}
		var levelsLevel22Unlocked = $.jStorage.get("levelsLevel22Unlocked");
		if(!levelsLevel22Unlocked){
			levels.levelUnlockArray[22] = false;
			$.jStorage.set("levelsLevel22Unlocked",0);
		}
		else if(levelsLevel22Unlocked == 1){
			levels.levelUnlockArray[22] = true;
		}
		var levelsLevel23Unlocked = $.jStorage.get("levelsLevel23Unlocked");
		if(!levelsLevel23Unlocked){
			levels.levelUnlockArray[23] = false;
			$.jStorage.set("levelsLevel23Unlocked",0);
		}
		else if(levelsLevel23Unlocked == 1){
			levels.levelUnlockArray[23] = true;
		}
		var levelsLevel24Unlocked = $.jStorage.get("levelsLevel24Unlocked");
		if(!levelsLevel24Unlocked){
			levels.levelUnlockArray[24] = false;
			$.jStorage.set("levelsLevel24Unlocked",0);
		}
		else if(levelsLevel24Unlocked == 1){
			levels.levelUnlockArray[24] = true;
		}
		var levelsLevel25Unlocked = $.jStorage.get("levelsLevel25Unlocked");
		if(!levelsLevel25Unlocked){
			levels.levelUnlockArray[25] = false;
			$.jStorage.set("levelsLevel25Unlocked",0);
		}
		else if(levelsLevel25Unlocked == 1){
			levels.levelUnlockArray[25] = true;
		}
		var levelsLevel26Unlocked = $.jStorage.get("levelsLevel26Unlocked");
		if(!levelsLevel26Unlocked){
			levels.levelUnlockArray[26] = false;
			$.jStorage.set("levelsLevel26Unlocked",0);
		}
		else if(levelsLevel26Unlocked == 1){
			levels.levelUnlockArray[26] = true;
		}
		var levelsLevel27Unlocked = $.jStorage.get("levelsLevel27Unlocked");
		if(!levelsLevel27Unlocked){
			levels.levelUnlockArray[27] = false;
			$.jStorage.set("levelsLevel27Unlocked",0);
		}
		else if(levelsLevel27Unlocked == 1){
			levels.levelUnlockArray[27] = true;
		}
		var levelsLevel28Unlocked = $.jStorage.get("levelsLevel28Unlocked");
		if(!levelsLevel28Unlocked){
			levels.levelUnlockArray[28] = false;
			$.jStorage.set("levelsLevel28Unlocked",0);
		}
		else if(levelsLevel28Unlocked == 1){
			levels.levelUnlockArray[28] = true;
		}
		var levelsLevel29Unlocked = $.jStorage.get("levelsLevel29Unlocked");
		if(!levelsLevel29Unlocked){
			levels.levelUnlockArray[29] = false;
			$.jStorage.set("levelsLevel29Unlocked",0);
		}
		else if(levelsLevel29Unlocked == 1){
			levels.levelUnlockArray[29] = true;
		}
		var levelsLevel30Unlocked = $.jStorage.get("levelsLevel30Unlocked");
		if(!levelsLevel30Unlocked){
			levels.levelUnlockArray[30] = false;
			$.jStorage.set("levelsLevel30Unlocked",0);
		}
		else if(levelsLevel30Unlocked == 1){
			levels.levelUnlockArray[30] = true;
		}
		var levelsLevel31Unlocked = $.jStorage.get("levelsLevel31Unlocked");
		if(!levelsLevel31Unlocked){
			levels.levelUnlockArray[31] = false;
			$.jStorage.set("levelsLevel31Unlocked",0);
		}
		else if(levelsLevel31Unlocked == 1){
			levels.levelUnlockArray[31] = true;
		}
		var levelsLevel32Unlocked = $.jStorage.get("levelsLevel32Unlocked");
		if(!levelsLevel32Unlocked){
			levels.levelUnlockArray[32] = false;
			$.jStorage.set("levelsLevel32Unlocked",0);
		}
		else if(levelsLevel32Unlocked == 1){
			levels.levelUnlockArray[32] = true;
		}
		var levelsLevel33Unlocked = $.jStorage.get("levelsLevel33Unlocked");
		if(!levelsLevel33Unlocked){
			levels.levelUnlockArray[33] = false;
			$.jStorage.set("levelsLevel33Unlocked",0);
		}
		else if(levelsLevel33Unlocked == 1){
			levels.levelUnlockArray[33] = true;
		}
		var levelsLevel34Unlocked = $.jStorage.get("levelsLevel34Unlocked");
		if(!levelsLevel34Unlocked){
			levels.levelUnlockArray[34] = false;
			$.jStorage.set("levelsLevel34Unlocked",0);
		}
		else if(levelsLevel34Unlocked == 1){
			levels.levelUnlockArray[34] = true;
		}
		var levelsLevel35Unlocked = $.jStorage.get("levelsLevel35Unlocked");
		if(!levelsLevel35Unlocked){
			levels.levelUnlockArray[35] = false;
			$.jStorage.set("levelsLevel35Unlocked",0);
		}
		else if(levelsLevel35Unlocked == 1){
			levels.levelUnlockArray[35] = true;
		}
		var levelsLevel36Unlocked = $.jStorage.get("levelsLevel36Unlocked");
		if(!levelsLevel36Unlocked){
			levels.levelUnlockArray[36] = false;
			$.jStorage.set("levelsLevel36Unlocked",0);
		}
		else if(levelsLevel36Unlocked == 1){
			levels.levelUnlockArray[36] = true;
		}
		// Load complete if the game has enough images - fade to main menu
		if(imagesLoaded >= imageThreshold){
			transitions.createFade(1, 15, "black", "mainmenu");
		}
		else{
			ctx.drawImage(pauseBG, 0, 0);
			ctx.drawImage(glassKnuckleLogo, 280, 0);
			ctx.font = "24pt Arial";
			ctx.fillStyle = "white";
			ctx.fillText("LOADING", 330, 280);
			ctx.fillStyle = "black";
			ctx.fillRect(210, 300, 400, 50);
			ctx.fillStyle = "gray";
			ctx.fillRect(215, 305, 390, 40);
			ctx.fillStyle = "green";
			ctx.fillRect(215, 305, 390*(imagesLoaded/imageThreshold), 40);
			// Clicking on the logo goes to Glass Knuckle
			if (clickX >= 280 && clickX <= 524 && clickY >= 0 && clickY <= 244){
				window.open("http://www.glassknuckle.com", '_blank');
			}
		}
	}
};