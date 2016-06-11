class Particule {
  constructor(x0, y0, vx0, vy0, color) {
    this.x = x0;
    this.y = y0;
    this.vx = vx0;
    this.vy = vy0;
    this.color = color;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
  }
  display(context, canvas){
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle=this.color;
    context.arc(this.x, this.y, 10, 0, 2*Math.PI, true);
    context.fill();
  }
}
