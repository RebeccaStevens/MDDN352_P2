Polymer({
	publish: {
		x: {
	      value: 0,
	      reflect: true
	    },
	    y: {
	      value: 0,
	      reflect: true
	    },
	    vel_x: 0,
	    vel_y: 0,
	    accel_x: 0,
	    accel_y: 0,
	    friction: 0
	},
	ready: function(){
		
	},
	setFriction: function(val){
		this.friction = val;
	},
	animate: function(time_step){
		if(this.friction == 0) {
			this.x += this.vel_x * time_step + 0.5 * this.accel_x * time_step * time_step;
			this.y += this.vel_y * time_step + 0.5 * this.accel_y * time_step * time_step;
			this.vel_x = this.vel_x + this.accel_x * time_step;
			this.vel_y = this.vel_y + this.accel_y * time_step;
		}
		else {
			this.x += this.accel_x * time_step / this.friction + (this.vel_x - this.accel_x / this.friction) * (1 - Math.exp(-this.friction * time_step)) / this.friction
			this.y += this.accel_y * time_step / this.friction + (this.vel_y - this.accel_y / this.friction) * (1 - Math.exp(-this.friction * time_step)) / this.friction
			this.vel_x = this.accel_x / this.friction + (this.vel_x - this.accel_x / this.friction) * Math.exp(-this.friction * time_step);
			this.vel_y = this.accel_y / this.friction + (this.vel_y - this.accel_y / this.friction) * Math.exp(-this.friction * time_step);
			if(Math.abs(this.vel_x) < 0.0000000000001){
				this.vel_x = 0;
			}
			if(Math.abs(this.vel_y) < 0.0000000000001){
				this.vel_y = 0;
			}
		}
	}
});