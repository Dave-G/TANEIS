/*------------------------------------------------ Transitions ----------------------------------------------*/
var transitions = {
	timer: 0,
	timerMax: 60,
	color: "black",
	finalGameState: "play",
	createFade: function(timer, timerMax, color, finalGameState){
		gameState = "transition";
		this.timer = timer;
		this.timerMax = timerMax;
		this.color = color;
		this.finalGameState = finalGameState;
	},
	draw: function(){
		ctx.globalAlpha = (this.timer/this.timerMax);
		ctx.fillStyle = this.color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 1;
	},
	run: function(){
		if (this.timer == this.timerMax){
			this.timer = 0;
			gameState = this.finalGameState;
		}
		else if (this.timer > 0){
			this.timer++;
			this.draw();
		}
	},
};