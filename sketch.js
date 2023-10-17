// let mover;
let balls=[];

function setup() {
  createCanvas(400, 400);
  // mover = new Mover();
  for(let i = 0; i<20; i++){
    b = new Mover();
    balls.push(b);
  }
  
}

function draw() {
  background(220);
  for(let b of balls){
  for(let i = 0; i<10; i++){
  b.update();
  b.display();
  }
  }
}



class Mover{
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.acc = createVector();
    this.vel = createVector();
  }
  
  update(){
    let mouse = createVector(mouseX,mouseY);
    let dir = p5.Vector.sub(mouse,this.pos);
    dir.setMag(0.2);
    
    this.acc=dir;
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.pos.add(this.vel);
  }
  
  display(){
    noStroke();
    circle(this.pos.x, this.pos.y, 5);
  }
}