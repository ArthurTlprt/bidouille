class Particule {
  constructor(x0, y0, vx0, vy0, color) {
    this.x = x0;
    this.y = y0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0.2;
    this.ay = 0.1;
    this.tetha = 0;
    this.color = color;
  }
  update(){
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    //this.x = 500 + 100 * Math.cos(this.tetha+=0.01);
    //this.y = 300 + 100 * Math.sin(this.tetha+=0.01);
    console.log('this.tetha', this.tetha);
  }
  display(context, canvas){
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = this.color;
    context.arc(this.x, this.y, 10, 0, 2*Math.PI, true);
    context.fill();
  }
}
