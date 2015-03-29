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
	    accel_y: 0
	},
	ready: function(){
		
	},
	animate: function(time_step, friction){
		if(friction == 0) {
			this.x += this.vel_x * time_step + 0.5 * this.accel_x * time_step * time_step;
			this.y += this.vel_y * time_step + 0.5 * this.accel_y * time_step * time_step;
			this.vel_x = this.vel_x + this.accel_x * time_step;
			this.vel_y = this.vel_y + this.accel_y * time_step;
		}
		else {
			this.x += this.accel_x * time_step / friction + (this.vel_x - this.accel_x / friction) * (1 - Math.exp(-friction * time_step)) / friction
			this.y += this.accel_y * time_step / friction + (this.vel_y - this.accel_y / friction) * (1 - Math.exp(-friction * time_step)) / friction
			this.vel_x = this.accel_x / friction + (this.vel_x - this.accel_x / friction) * Math.exp(-friction * time_step);
			this.vel_y = this.accel_y / friction + (this.vel_y - this.accel_y / friction) * Math.exp(-friction * time_step);
			if(this.vel_x < 0.0000000000001){
				this.vel_x = 0;
			}
			if(this.vel_y < 0.0000000000001){
				this.vel_y = 0;
			}
		}
	}
});