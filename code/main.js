/*
 Copyright (C) 2013 David Gedarovich <dave.gedarovich@gmail.com>
 Glass Knuckle Games <http://www.glassknuckle.com>
*/

/*------------------------------------------------ Setup ----------------------------------------------*/
// Canvas variables
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
canvas.tabIndex = 1;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
// Global variables
var FPS = 30;
var keyTimer = 0;
var keysDown = {};
var debugMode = false;
var gameState = "loading";
var lastLoop = new Date;
var thisLoop = new Date;
// Key Listeners
addEventListener("keydown", function (e) {keysDown[e.keyCode] = true;
											if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 8 || e.keyCode == 32 || e.keyCode == 13){
												e.preventDefault();}}, false);
addEventListener("keyup", function (e) {delete keysDown[e.keyCode];}, false);
// Mouse listeners
canvas.addEventListener("mousedown", getPosition, false);
canvas.addEventListener("mousemove", getPositionHover, false);
// Mouse variables
var clickX = new Number();
var clickY = new Number();
var hoverX = new Number();
var hoverY = new Number();
// For preloading
imagesLoaded = 0;
// 117 total images, 100 loaded is sufficient
imageThreshold = 100;
var imageLoad = function(){
	imagesLoaded++;
};

/*------------------------------------------------ Images ----------------------------------------------*/
// Load first as they are used in the loading screen
var pauseBG = new Image();
pauseBG.src = "graphics/ui/pauseBG.png";
pauseBG.onLoad=imageLoad();
var glassKnuckleLogo = new Image();
glassKnuckleLogo.src = "graphics/ui/glassKnuckleLogo.png";
glassKnuckleLogo.onLoad=imageLoad();
// Units
var playerShip = new Image();
playerShip.src = "graphics/units/playerShip.png";
playerShip.onLoad=imageLoad();
var playerShipLeft = new Image();
playerShipLeft.src = "graphics/units/playerShipLeft.png";
playerShipLeft.onLoad=imageLoad();
var playerShipRight = new Image();
playerShipRight.src = "graphics/units/playerShipRight.png";
playerShipRight.onLoad=imageLoad();
var chargerImg = new Image();
chargerImg.src = "graphics/units/charger.png";
chargerImg.onLoad=imageLoad();
var sliderImg = new Image();
sliderImg.src = "graphics/units/slider.png";
sliderImg.onLoad=imageLoad();
var shooterImg = new Image();
shooterImg.src = "graphics/units/shooter.png";
shooterImg.onLoad=imageLoad();
var spreaderImg = new Image();
spreaderImg.src = "graphics/units/spreader.png";
spreaderImg.onLoad=imageLoad();
var tankImg = new Image();
tankImg.src = "graphics/units/tank.png";
tankImg.onLoad=imageLoad();
var sprayerImg = new Image();
sprayerImg.src = "graphics/units/sprayer.png";
sprayerImg.onLoad=imageLoad();
var sliderShooterImg = new Image();
sliderShooterImg.src = "graphics/units/sliderShooter.png";
sliderShooterImg.onLoad=imageLoad();
var clusterMineImg = new Image();
clusterMineImg.src = "graphics/units/clusterMine.png";
clusterMineImg.onLoad=imageLoad();
var zipperImg = new Image();
zipperImg.src = "graphics/units/zipper.png";
zipperImg.onLoad=imageLoad();
var zapperImg = new Image();
zapperImg.src = "graphics/units/zapper.png";
zapperImg.onLoad=imageLoad();
var clusterBombImg = new Image();
clusterBombImg.src = "graphics/units/clusterBomb.png";
clusterBombImg.onLoad=imageLoad();
var gunnerImg = new Image();
gunnerImg.src = "graphics/units/gunner.png";
gunnerImg.onLoad=imageLoad();
var speedShooterImg = new Image();
speedShooterImg.src = "graphics/units/speedShooter.png";
speedShooterImg.onLoad=imageLoad();
var superTankImg = new Image();
superTankImg.src = "graphics/units/superTank.png";
superTankImg.onLoad=imageLoad();
var armadaShooterImg = new Image();
armadaShooterImg.src = "graphics/units/armadaShooter.png";
armadaShooterImg.onLoad=imageLoad();
var armadaDefenderImg = new Image();
armadaDefenderImg.src = "graphics/units/armadaDefender.png";
armadaDefenderImg.onLoad=imageLoad();
var armadaCoreImg = new Image();
armadaCoreImg.src = "graphics/units/armadaCore.png";
armadaCoreImg.onLoad=imageLoad();
var whiteCrossImg = new Image();
whiteCrossImg.src = "graphics/units/whiteCross.png";
whiteCrossImg.onLoad=imageLoad();
var redWingImg = new Image();
redWingImg.src = "graphics/units/redWing.png";
redWingImg.onLoad=imageLoad();
var cannonImg = new Image();
cannonImg.src = "graphics/units/cannon.png";
cannonImg.onLoad=imageLoad();
var spikeImg = new Image();
spikeImg.src = "graphics/units/spike.png";
spikeImg.onLoad=imageLoad();
var bugBotImg = new Image();
bugBotImg.src = "graphics/units/bugBot.png";
bugBotImg.onLoad=imageLoad();
var destructorSheet = new Image();
destructorSheet.src = "graphics/units/destructorSheet.png";
destructorSheet.onLoad=imageLoad();
// Weapons
var bulletImg = new Image();
bulletImg.src = "graphics/weapons/bullet.png";
bulletImg.onLoad=imageLoad();
var homingBulletImg = new Image();
homingBulletImg.src = "graphics/weapons/homingBullet.png";
homingBulletImg.onLoad=imageLoad();
var boomerangSheet = new Image();
boomerangSheet.src = "graphics/weapons/boomerangSheet.png";
boomerangSheet.onLoad=imageLoad();
var spinnerSheet = new Image();
spinnerSheet.src = "graphics/weapons/spinnerSheet.png";
spinnerSheet.onLoad=imageLoad();
var bouncerSheet = new Image();
bouncerSheet.src = "graphics/weapons/bouncerSheet.png";
bouncerSheet.onLoad=imageLoad();
var clusterImg = new Image();
clusterImg.src = "graphics/weapons/cluster.png";
clusterImg.onLoad=imageLoad();
var enemyBulletImg = new Image();
enemyBulletImg.src = "graphics/weapons/enemyBullet.png";
enemyBulletImg.onLoad=imageLoad();
var shieldImg = new Image();
shieldImg.src = "graphics/weapons/shield.png";
shieldImg.onLoad=imageLoad();
var shieldFlash = new Image();
shieldFlash.src = "graphics/weapons/shieldFlash.png";
shieldFlash.onLoad=imageLoad();
var bulletParticleSheet = new Image();
bulletParticleSheet.src = "graphics/weapons/bulletParticleSheet.png";
bulletParticleSheet.onLoad=imageLoad();
var homingBulletParticleSheet = new Image();
homingBulletParticleSheet.src = "graphics/weapons/homingBulletParticleSheet.png";
homingBulletParticleSheet.onLoad=imageLoad();
var enemyBulletParticleSheet = new Image();
enemyBulletParticleSheet.src = "graphics/weapons/enemyBulletParticleSheet.png";
enemyBulletParticleSheet.onLoad=imageLoad();
var deathParticleSheet1 = new Image();
deathParticleSheet1.src = "graphics/weapons/deathParticleSheet1.png";
deathParticleSheet1.onLoad=imageLoad();
var deathParticleSheet2 = new Image();
deathParticleSheet2.src = "graphics/weapons/deathParticleSheet2.png";
deathParticleSheet2.onLoad=imageLoad();
var deathParticleSheet3 = new Image();
deathParticleSheet3.src = "graphics/weapons/deathParticleSheet3.png";
deathParticleSheet3.onLoad=imageLoad();
var deathParticleSheet4 = new Image();
deathParticleSheet4.src = "graphics/weapons/deathParticleSheet4.png";
deathParticleSheet4.onLoad=imageLoad();
// UI
var titleImg = new Image();
titleImg.src = "graphics/ui/title.png";
titleImg.onLoad=imageLoad();
var uiMainBar = new Image();
uiMainBar.src = "graphics/ui/uiMainBar.png";
uiMainBar.onLoad=imageLoad();
var uiBarBG = new Image();
uiBarBG.src = "graphics/ui/uiBarBG.png";
uiBarBG.onLoad=imageLoad();
var uiBarFrame = new Image();
uiBarFrame.src = "graphics/ui/uiBarFrame.png";
uiBarFrame.onLoad=imageLoad();
var healthBar = new Image();
healthBar.src = "graphics/ui/healthBar.png";
healthBar.onLoad=imageLoad();
var healthBar2 = new Image();
healthBar2.src = "graphics/ui/healthBar2.png";
healthBar2.onLoad=imageLoad();
var healthBarGlow = new Image();
healthBarGlow.src = "graphics/ui/healthBarGlow.png";
healthBarGlow.onLoad=imageLoad();
var shieldBar = new Image();
shieldBar.src = "graphics/ui/shieldBar.png";
shieldBar.onLoad=imageLoad();
var shieldBar2 = new Image();
shieldBar2.src = "graphics/ui/shieldBar2.png";
shieldBar2.onLoad=imageLoad();
var shieldBarGlow = new Image();
shieldBarGlow.src = "graphics/ui/shieldBarGlow.png";
shieldBarGlow.onLoad=imageLoad();
var expBar = new Image();
expBar.src = "graphics/ui/expBar.png";
expBar.onLoad=imageLoad();
var expBar1 = new Image();
expBar1.src = "graphics/ui/expBar1.png";
expBar1.onLoad=imageLoad();
var expBar2 = new Image();
expBar2.src = "graphics/ui/expBar2.png";
expBar2.onLoad=imageLoad();
var expBar3 = new Image();
expBar3.src = "graphics/ui/expBar3.png";
expBar3.onLoad=imageLoad();
var expBar4 = new Image();
expBar4.src = "graphics/ui/expBar4.png";
expBar4.onLoad=imageLoad();
var expBar5 = new Image();
expBar5.src = "graphics/ui/expBar5.png";
expBar5.onLoad=imageLoad();
var expBar6 = new Image();
expBar6.src = "graphics/ui/expBar6.png";
expBar6.onLoad=imageLoad();
var expBar7 = new Image();
expBar7.src = "graphics/ui/expBar7.png";
expBar7.onLoad=imageLoad();
var expBar8 = new Image();
expBar8.src = "graphics/ui/expBar8.png";
expBar8.onLoad=imageLoad();
var expBar9 = new Image();
expBar9.src = "graphics/ui/expBar9.png";
expBar9.onLoad=imageLoad();
var pauseButtonImg = new Image();
pauseButtonImg.src = "graphics/ui/pauseButton.png";
pauseButtonImg.onLoad=imageLoad();
var gameOverBG = new Image();
gameOverBG.src = "graphics/ui/gameOverBG.png";
gameOverBG.onLoad=imageLoad();
var selector = new Image();
selector.src = "graphics/ui/selector.png";
selector.onLoad=imageLoad();
var notifier = new Image();
notifier.src = "graphics/ui/notifier.png";
notifier.onLoad=imageLoad();
var notifierHighlight = new Image();
notifierHighlight.src = "graphics/ui/notifierHighlight.png";
notifierHighlight.onLoad=imageLoad();
var plusButton = new Image();
plusButton.src = "graphics/ui/plusButton.png";
plusButton.onLoad=imageLoad();
var plusButtonHighlight = new Image();
plusButtonHighlight.src = "graphics/ui/plusButtonHighlight.png";
plusButtonHighlight.onLoad=imageLoad();
var octagonTeal = new Image();
octagonTeal.src = "graphics/ui/octagonTeal.png";
octagonTeal.onLoad=imageLoad();
var octagonDark = new Image();
octagonDark.src = "graphics/ui/octagonDark.png";
octagonDark.onLoad=imageLoad();
var octagonGreen = new Image();
octagonGreen.src = "graphics/ui/octagonGreen.png";
octagonGreen.onLoad=imageLoad();
var octagonYellow = new Image();
octagonYellow.src = "graphics/ui/octagonYellow.png";
octagonYellow.onLoad=imageLoad();
var octagonOrange = new Image();
octagonOrange.src = "graphics/ui/octagonOrange.png";
octagonOrange.onLoad=imageLoad();
var octagonRed = new Image();
octagonRed.src = "graphics/ui/octagonRed.png";
octagonRed.onLoad=imageLoad();
var hexLineMedium = new Image();
hexLineMedium.src = "graphics/ui/hexLineMedium.png";
hexLineMedium.onLoad=imageLoad();
var hexLineLong = new Image();
hexLineLong.src = "graphics/ui/hexLineLong.png";
hexLineLong.onLoad=imageLoad();
var hexLineExtraLong = new Image();
hexLineExtraLong.src = "graphics/ui/hexLineExtraLong.png";
hexLineExtraLong.onLoad=imageLoad();
var levelSideBar = new Image();
levelSideBar.src = "graphics/ui/levelSideBar.png";
levelSideBar.onLoad=imageLoad();
var levelCompleteBG = new Image();
levelCompleteBG.src = "graphics/ui/levelCompleteBG.png";
levelCompleteBG.onLoad=imageLoad();
var upgradeBarFrame = new Image();
upgradeBarFrame.src = "graphics/ui/upgradeBarFrame.png";
upgradeBarFrame.onLoad=imageLoad();
var upgradeBarFull = new Image();
upgradeBarFull.src = "graphics/ui/upgradeBarFull.png";
upgradeBarFull.onLoad=imageLoad();
var damagedOverlay = new Image();
damagedOverlay.src = "graphics/ui/damagedOverlay.png";
damagedOverlay.onLoad=imageLoad();
var shieldOverlay = new Image();
shieldOverlay.src = "graphics/ui/shieldOverlay.png";
shieldOverlay.onLoad=imageLoad();
// Backgrounds
var spaceBG = new Image();
spaceBG.src = "graphics/backgrounds/spaceBG.png";
spaceBG.onLoad=imageLoad();
var jungleBG = new Image();
jungleBG.src = "graphics/backgrounds/jungleBG.png";
jungleBG.onLoad=imageLoad();
var caveBG = new Image();
caveBG.src = "graphics/backgrounds/caveBG.png";
caveBG.onLoad=imageLoad();
var desertBG = new Image();
desertBG.src = "graphics/backgrounds/desertBG.png";
desertBG.onLoad=imageLoad();
var lavaBG = new Image();
lavaBG.src = "graphics/backgrounds/lavaBG.png";
lavaBG.onLoad=imageLoad();
var darkBG = new Image();
darkBG.src = "graphics/backgrounds/darkBG.png";
darkBG.onLoad=imageLoad();
var levelTransition = new Image();
levelTransition.src = "graphics/backgrounds/levelTransition.png";
levelTransition.onLoad=imageLoad();
// Pickups
var purpleCube = new Image();
purpleCube.src = "graphics/pickups/purpleCube.png";
purpleCube.onLoad=imageLoad();
var blueCube = new Image();
blueCube.src = "graphics/pickups/blueCube.png";
blueCube.onLoad=imageLoad();
var redCube = new Image();
redCube.src = "graphics/pickups/redCube.png";
redCube.onLoad=imageLoad();
var greenCube = new Image();
greenCube.src = "graphics/pickups/greenCube.png";
greenCube.onLoad=imageLoad();
var orangeCube = new Image();
orangeCube.src = "graphics/pickups/orangeCube.png";
orangeCube.onLoad=imageLoad();
var tealCube = new Image();
tealCube.src = "graphics/pickups/tealCube.png";
tealCube.onLoad=imageLoad();
var pinkCube = new Image();
pinkCube.src = "graphics/pickups/pinkCube.png";
pinkCube.onLoad=imageLoad();
var yellowCube = new Image();
yellowCube.src = "graphics/pickups/yellowCube.png";
yellowCube.onLoad=imageLoad();
var purpleArrow = new Image();
purpleArrow.src = "graphics/pickups/purpleArrow.png";
purpleArrow.onLoad=imageLoad();
var blueArrow = new Image();
blueArrow.src = "graphics/pickups/blueArrow.png";
blueArrow.onLoad=imageLoad();
var redArrow = new Image();
redArrow.src = "graphics/pickups/redArrow.png";
redArrow.onLoad=imageLoad();
var greenArrow = new Image();
greenArrow.src = "graphics/pickups/greenArrow.png";
greenArrow.onLoad=imageLoad();
var orangeArrow = new Image();
orangeArrow.src = "graphics/pickups/orangeArrow.png";
orangeArrow.onLoad=imageLoad();
var tealArrow = new Image();
tealArrow.src = "graphics/pickups/tealArrow.png";
tealArrow.onLoad=imageLoad();
var pinkArrow = new Image();
pinkArrow.src = "graphics/pickups/pinkArrow.png";
pinkArrow.onLoad=imageLoad();
var yellowArrow = new Image();
yellowArrow.src = "graphics/pickups/yellowArrow.png";
yellowArrow.onLoad=imageLoad();
var purpleArrowTiny = new Image();
purpleArrowTiny.src = "graphics/pickups/purpleArrowTiny.png";
purpleArrowTiny.onLoad=imageLoad();
var blueArrowTiny = new Image();
blueArrowTiny.src = "graphics/pickups/blueArrowTiny.png";
blueArrowTiny.onLoad=imageLoad();
var redArrowTiny = new Image();
redArrowTiny.src = "graphics/pickups/redArrowTiny.png";
redArrowTiny.onLoad=imageLoad();
var greenArrowTiny = new Image();
greenArrowTiny.src = "graphics/pickups/greenArrowTiny.png";
greenArrowTiny.onLoad=imageLoad();
var orangeArrowTiny = new Image();
orangeArrowTiny.src = "graphics/pickups/orangeArrowTiny.png";
orangeArrowTiny.onLoad=imageLoad();
var tealArrowTiny = new Image();
tealArrowTiny.src = "graphics/pickups/tealArrowTiny.png";
tealArrowTiny.onLoad=imageLoad();
var pinkArrowTiny = new Image();
pinkArrowTiny.src = "graphics/pickups/pinkArrowTiny.png";
pinkArrowTiny.onLoad=imageLoad();
var yellowArrowTiny = new Image();
yellowArrowTiny.src = "graphics/pickups/yellowArrowTiny.png";
yellowArrowTiny.onLoad=imageLoad();

/*------------------------------------------------ Sounds ----------------------------------------------*/
var clickSound = document.getElementsByTagName("audio")[0];
var explode1Sound = document.getElementsByTagName("audio")[1];
var explode2Sound = document.getElementsByTagName("audio")[2];
var explode3Sound = document.getElementsByTagName("audio")[3];
var explode4Sound = document.getElementsByTagName("audio")[4];
var explodeBossSound = document.getElementsByTagName("audio")[5];
var failureSound = document.getElementsByTagName("audio")[6];
var learnSound = document.getElementsByTagName("audio")[7];
var pickup1Sound = document.getElementsByTagName("audio")[8];
var pickup2Sound = document.getElementsByTagName("audio")[9];
var shieldSound = document.getElementsByTagName("audio")[10];
var startSound = document.getElementsByTagName("audio")[11];
var victorySound = document.getElementsByTagName("audio")[12];
var caveBGM = document.getElementsByTagName("audio")[13];
var desertBGM = document.getElementsByTagName("audio")[14];
var hyperBGM = document.getElementsByTagName("audio")[15];
var jungleBGM = document.getElementsByTagName("audio")[16];
var lavaBGM = document.getElementsByTagName("audio")[17];
var menuBGM = document.getElementsByTagName("audio")[18];
var spaceBGM = document.getElementsByTagName("audio")[19];
var hurtSound = document.getElementsByTagName("audio")[20];

// Reset all sounds
var resetSounds = function(){
	clickSound.pause();
	clickSound.currentTime = 0;
	explode1Sound.pause();
	explode1Sound.currentTime = 0;
	explode2Sound.pause();
	explode2Sound.currentTime = 0;
	explode3Sound.pause();
	explode3Sound.currentTime = 0;
	explode4Sound.pause();
	explode4Sound.currentTime = 0;
	explodeBossSound.pause();
	explodeBossSound.currentTime = 0;
	failureSound.pause();
	failureSound.currentTime = 0;
	learnSound.pause();
	learnSound.currentTime = 0;
	pickup1Sound.pause();
	pickup1Sound.currentTime = 0;
	pickup2Sound.pause();
	pickup2Sound.currentTime = 0;
	shieldSound.pause();
	shieldSound.currentTime = 0;
	startSound.pause();
	startSound.currentTime = 0;
	victorySound.pause();
	victorySound.currentTime = 0;
	caveBGM.pause();
	caveBGM.currentTime = 0;
	desertBGM.pause();
	desertBGM.currentTime = 0;
	hyperBGM.pause();
	hyperBGM.currentTime = 0;
	jungleBGM.pause();
	jungleBGM.currentTime = 0;
	lavaBGM.pause();
	lavaBGM.currentTime = 0;
	menuBGM.pause();
	menuBGM.currentTime = 0;
	spaceBGM.pause();
	spaceBGM.currentTime = 0;
	hurtSound.pause();
	hurtSound.currentTime = 0;
};

// Plays background music
var backgroundMusic = function(){
	if (menus.soundOn){
		// play menu bgm
		if (gameState == "mainmenu" || gameState == "options" || gameState == "credits" || gameState == "levelselect" ||
			gameState == "hypermenu" || gameState == "shop"){
			menuBGM.play();
		}
		// play bgm for each level
		else if (gameState == "play"){
			menuBGM.pause();
			if (levels.currentZone == 1 || levels.currentZone == 6){
				spaceBGM.play();
			}
			else if (levels.currentZone == 2){
				jungleBGM.play();
			}
			else if (levels.currentZone == 3){
				caveBGM.play();
			}
			else if (levels.currentZone == 4){
				desertBGM.play();
			}
			else if (levels.currentZone == 5){
				lavaBGM.play();
			}
			else if (levels.currentZone == -1){
				hyperBGM.play();
			}
		}
	}
};

// Random explosion sound
var randomExplosionSound = function(){
	if (menus.soundOn){
		var randomSound = randomInt(1,4);
		if (randomSound == 1){
			explode1Sound.currentTime=0;
			explode1Sound.play();
		}
		else if (randomSound == 2){
			explode2Sound.currentTime=0;
			explode2Sound.play();
		}
		else if (randomSound == 3){
			explode3Sound.currentTime=0;
			explode3Sound.play();
		}
		else if (randomSound == 4){
			explode4Sound.currentTime=0;
			explode4Sound.play();
		}
	}
};

/*------------------------------------------------ Mouse ----------------------------------------------*/
// Click position
function getPosition(event){
    var targ;
    if (!event){
        event = window.event;
	}
    if (event.target){
        targ = event.target;
	}
    else if (event.srcElement){
        targ = event.srcElement;
	}
    if (targ.nodeType == 3){ // defeat Safari bug
        targ = targ.parentNode;
	}
    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
	clickX = event.pageX - $(targ).offset().left;
    clickY = event.pageY - $(targ).offset().top;
};

// Hover position
function getPositionHover(event){
    var targ;
    if (!event){
        event = window.event;
	}
    if (event.target){
        targ = event.target;
	}
    else if (event.srcElement){
        targ = event.srcElement;
	}
    if (targ.nodeType == 3){ // defeat Safari bug
        targ = targ.parentNode;
	}
    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
	hoverX = event.pageX - $(targ).offset().left;
    hoverY = event.pageY - $(targ).offset().top;
};

// Check if the mouse is over this
var mouseOver = function(obj){
	return (hoverX >= obj.x && hoverX <= obj.x + obj.width && hoverY >= obj.y && hoverY <= obj.y + obj.height);
};

// Check if the mouse clicked this
var mouseClick = function(obj){
	return (clickX >= obj.x && clickX <= obj.x + obj.width && clickY >= obj.y && clickY <= obj.y + obj.height);
};

/*------------------------------------------------ General Functions ----------------------------------------------*/
// Random integer between (and including) two values
var randomInt = function(min,max){
	return (Math.round(min + Math.random()*(max - min)));
};

// Two objects colliding
var collision = function(a,b){
	return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
	);
};

// Check if an object goes off-screen
var offScreen = function(obj){
	return ((obj.y < 0 - obj.height || obj.y > canvas.height) || (obj.x < 0 - obj.width || obj.x > canvas.width));
};

// Key functions that work across gamestates
var generalKeys = function(){
	//P - pause/unpause
	if (80 in keysDown && keyTimer == 0){
		if (gameState == "play"){
			gameState = "pause";
			keyTimer = 15;
		}
		else if (gameState == "pause"){
			gameState = "play";
			keyTimer = 15;
		}
	}
	if (keyTimer > 0){
		keyTimer--;
	}
};

// Reset mouse click location
var resetClick = function(){
	clickX = 0;
	clickY = 0;
};

// Display values for various objects
var debug = function(){
	if (debugMode){
		ctx.fillStyle = "white";
		ctx.font = "10pt Arial";
		ctx.fillText("Debug Mode: " + debugMode, 10, 12);
		ctx.fillText("Weapons on screen: " + weapons.weaponArray.length, 10, 26);
		ctx.fillText("Enemies on screen: " + enemies.enemyArray.length, 10, 40);
		ctx.fillText("Enemy weapons on screen: " + enemyWeapons.enemyWeaponArray.length, 10, 54);
		ctx.fillText("Particles on screen: " + particles.particleArray.length, 10, 68);
		ctx.fillText("Markers on screen: " + ui.markerArray.length, 10, 82);
		ctx.fillText("FPS: " + Math.round(1000/(thisLoop-lastLoop)), 10, 96);
	}
};

// Reset all necessary game variables
var resetAll = function(){
	player.reset();
	shield.reset();
	enemies.reset();
	weapons.reset();
	enemyWeapons.reset();
	particles.reset();
	pickups.reset();
	ui.reset();
	levels.reset();
	bosses.reset();
	hyper.reset();
	save.saveGame();
	resetSounds();
	gameState = "mainmenu";
};

/*------------------------------------------------ Drawing ----------------------------------------------*/
// Clear the canvas
var clearCanvas = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Draw background
var drawBG = function(){
	if (gameState == "play"){
		// Zone -1 is Hyper Mode
		if (levels.currentZone == -1){
			hyper.backgrounds();
		}
		else if (levels.currentZone == 1){
			ctx.drawImage(spaceBG, 0, levels.levelProgress);
		}
		else if (levels.currentZone == 2){
			ctx.drawImage(jungleBG, 0, levels.levelProgress);
		}
		else if (levels.currentZone == 3){
			ctx.drawImage(caveBG, 0, levels.levelProgress);
		}
		else if (levels.currentZone == 4){
			ctx.drawImage(desertBG, 0, levels.levelProgress);
		}
		else if (levels.currentZone == 5){
			ctx.drawImage(lavaBG, 0, levels.levelProgress);
		}
		else if (levels.currentZone == 6){
			ctx.drawImage(darkBG, 0, levels.levelProgress);
		}
	}
	else{
		ctx.fillStyle = "#31312e";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
};

// Draw pause menu
var drawPause = function(){
	ctx.drawImage(pauseBG, 0, 0);
	ctx.fillStyle = "white";
	ctx.font = "24pt Arial";
	ctx.fillText("Game Paused", 300, 100);
	ctx.font = "20pt Arial";
	if (levels.currentZone == -1){
		ctx.fillText("Hyper Mode: " + hyper.currentMode, 320, 150);
		if (hyper.currentMode == "easy"){
			ctx.fillText("High Score: " + hyper.easyHighScore, 320, 180);
		}
		else if (hyper.currentMode == "normal"){
			ctx.fillText("High Score: " + hyper.normalHighScore, 320, 180);
		}
		else if (hyper.currentMode == "hard"){
			ctx.fillText("High Score: " + hyper.hardHighScore, 320, 180);
		}
		else if (hyper.currentMode == "insane"){
			ctx.fillText("High Score: " + hyper.insaneHighScore, 320, 180);
		}
	}
	else{
		ctx.fillText("Zone: " + levels.currentZone, 320, 150);
		ctx.fillText("Level: " + levels.currentLevel, 320, 180);
		ctx.fillText("High Score: "+ levels.levelScoreArray[levels.currentLevel], 320, 210);
	}
	ctx.font = "14pt Arial";
	ctx.fillText("Health", 10, 525);
	ctx.fillText("Shield", 165, 525);
	ctx.fillText("Experience", 325, 525);
};

// Draw Game Over screen
var drawGameOver = function(){
	ctx.drawImage(gameOverBG, 0, 0);
	ctx.fillStyle = "white";
	ctx.font = "24pt Arial";
	ctx.fillText("Game Over", 300, 100);
	ctx.font = "20pt Arial";
	if (levels.currentZone == -1){
		ctx.fillText("Hyper Mode: " + hyper.currentMode, 320, 150);
		if (hyper.currentMode == "easy"){
			if (hyper.easyHighScore == player.score){
				ctx.fillText("High Score: " + player.tempScore, 320, 210);
				if (player.tempScore == player.score && player.score != 0){
					ctx.fillStyle = "gold";
					ctx.fillText("New High Score!", 320, 270);
				}
			}
			else{
				ctx.fillText("High Score: " + hyper.easyHighScore, 320, 210);
			}
		}
		else if (hyper.currentMode == "normal"){
			if (hyper.normalHighScore == player.score){
				ctx.fillText("High Score: " + player.tempScore, 320, 210);
				if (player.tempScore == player.score && player.score != 0){
					ctx.fillStyle = "gold";
					ctx.fillText("New High Score!", 320, 270);
				}
			}
			else{
				ctx.fillText("High Score: " + hyper.normalHighScore, 320, 210);
			}
		}
		else if (hyper.currentMode == "hard"){
			if (hyper.hardHighScore == player.score){
				ctx.fillText("High Score: " + player.tempScore, 320, 210);
				if (player.tempScore == player.score && player.score != 0){
					ctx.fillStyle = "gold";
					ctx.fillText("New High Score!", 320, 270);
				}
			}
			else{
				ctx.fillText("High Score: " + hyper.hardHighScore, 320, 210);
			}
		}
		else if (hyper.currentMode == "insane"){
			if (hyper.insaneHighScore == player.score){
				ctx.fillText("High Score: " + player.tempScore, 320, 210);
				if (player.tempScore == player.score && player.score != 0){
					ctx.fillStyle = "gold";
					ctx.fillText("New High Score!", 320, 270);
				}
			}
			else{
				ctx.fillText("High Score: " + hyper.insaneHighScore, 320, 210);
			}
		}
		ctx.fillStyle = "white";
		ctx.fillText("Final Score: " + player.tempScore, 320, 240);
	}
	else{
		ctx.fillText("Zone: " + levels.currentZone, 320, 150);
		ctx.fillText("Level: " + levels.currentLevel, 320, 180);
		ctx.fillText("Final Score: " + player.tempScore, 320, 240);
		if (levels.levelScoreArray[levels.currentLevel] == player.score){
			ctx.fillText("High Score: " + player.tempScore, 320, 210);
			if (player.tempScore == player.score && player.score != 0){
				ctx.fillStyle = "gold";
				ctx.fillText("New High Score!", 320, 270);
			}
		}
		else{
			ctx.fillText("High Score: " + levels.levelScoreArray[levels.currentLevel], 320, 210);
		}
	}
	if (player.tempScore < player.score){
		player.tempScore += Math.ceil(player.score/60);
	}
	if (player.tempScore > player.score){
		player.tempScore = player.score;
	}
};

// Draw Level Complete screen
var drawLevelComplete = function(){
	ctx.drawImage(levelCompleteBG, 0, 0);
	ctx.fillStyle = "white";
	ctx.font = "24pt Arial";
	ctx.fillText("Level Complete", 300, 100);
	ctx.font = "20pt Arial";
	ctx.fillText("Zone: " + levels.currentZone, 320, 150);
	ctx.fillText("Level: " + levels.currentLevel, 320, 180);
	ctx.fillText("Final Score: " + player.tempScore, 320, 240);
	if (levels.levelScoreArray[levels.currentLevel] == player.score){
		ctx.fillText("High Score: " + player.tempScore, 320, 210);
		if (player.tempScore == player.score && player.score != 0){
			ctx.fillStyle = "gold";
			ctx.fillText("New High Score!", 320, 270);
		}
	}
	else{
		ctx.fillText("High Score: " + levels.levelScoreArray[levels.currentLevel], 320, 210);
	}
	if (player.tempScore < player.score){
		player.tempScore += Math.ceil(player.score/60);
	}
	if (player.tempScore > player.score){
		player.tempScore = player.score;
	}
};

/*------------------------------------------------ Execution ----------------------------------------------*/
// Run Everything
setInterval(function(){
	// For checking FPS
	thisLoop = new Date;
	// Game loading
	if (gameState == "loading"){
		clearCanvas();
		load.loadGame();
	}
	// Game playing
	else if (gameState == "play"){
		clearCanvas();
		drawBG();
		levels.run();
		pickups.run();
		weapons.run();
		enemyWeapons.run();
		player.run();
		enemies.run();
		bosses.run();
		shield.run();
		particles.run();
		ui.run();
	}
	// Game paused
	else if (gameState == "pause"){
		clearCanvas();
		drawPause();
		ui.run();
	}
	// Game over
	else if (gameState == "gameover"){
		clearCanvas();
		levels.checkHighScore();
		drawGameOver();
		ui.mainMenuButton.run();
		ui.notifierIcon.run();
	}
	// Level Complete
	else if (gameState == "levelcomplete"){
		clearCanvas();
		levels.checkHighScore();
		drawLevelComplete();
		ui.mainMenuButton.run();
		ui.notifierIcon.run();
		ui.nextLevelButton.run();
	}
	// Level Select
	else if (gameState == "levelselect"){
		clearCanvas();
		ctx.drawImage(pauseBG, 0, 0);
		levels.run();
		ui.mainMenuButton2.run();
	}
	// Main Menu
	else if (gameState == "mainmenu"){
		clearCanvas();
		menus.run();
	}
	// Options Menu
	else if (gameState == "options"){
		clearCanvas();
		menus.run();
		ui.mainMenuButton2.run();
	}
	// Shop Menu
	else if (gameState == "shop"){
		clearCanvas();
		menus.run();
		upgrades.run();
		ui.mainMenuButton2.run();
	}
	// Hyper Menu
	else if (gameState == "hypermenu"){
		clearCanvas();
		menus.run();
		hyper.run();
		ui.mainMenuButton2.run();
	}
	// Credits Menu
	else if (gameState == "credits"){
		clearCanvas();
		menus.run();
		ui.mainMenuButton2.run();
	}
	// Transitions
	else if (gameState == "transition"){
		transitions.run();
	}
	// General functions
	backgroundMusic();
	generalKeys();
	resetClick();
	lastLoop = thisLoop;
}, 1000/FPS);
