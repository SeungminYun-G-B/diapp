// let mover;
let balls = [];
let speed = 10;

function setup() {
  createCanvas(550, 550);
  // mover = new Mover();
  for(let i = 0; i < 20; i++){
    let b = new Mover(0,0);
    balls.push(b)
  }
}

function draw() {
  background(70);
  
  
  for(let b of balls){
    for(let i = 0; i<speed; i++){
  b.update();
  b.display();
  b.checkEdge();
  }
  }
  if(keyIsDown(LEFT_ARROW)){
      speed -= 0.1;
    }
  if(speed<=0){
    speed=0.1;
  }
    if(keyIsDown(RIGHT_ARROW)){
      speed += 0.1;
    }
  
}



class Mover{
  constructor(){
    this.pos = createVector(random(width),random(height));
    this.vel = createVector();
    this.acc = createVector();
    
    this.lim = 5;
    
    this.c =color(random(75,150),random(200,255),random(150,200),random(70,100));
    this.size = random(5,10);
    this.mult = random(0.1,0.25);
  }
  
  update(){
    let mouse = createVector(mouseX,mouseY);
    let dir = p5.Vector.sub(mouse,this.pos);
    dir.setMag(this.mult);
    
    this.acc = dir;
    this.vel.add(this.acc);
    this.vel.limit(this.lim);
    this.pos.add(this.vel);
    
    if(keyIsDown(UP_ARROW)){
      this.mult += 0.001;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.mult -= 0.001;
    }
    
  }
  
  
    checkEdge(){
    if(this.pos.x<=0 || this.pos.x>=width){
      this.vel.x*= -1;
    }
    if(this.pos.y<=0 || this.pos.y>=height){
      this.vel.y*=-1;
    }
    if(this.pos.x<0){
      this.pos.x = 0;
    }
    if(this.pos.x>width){
      this.pos.x = width;
    }
    if(this.pos.y<0){
      this.pos.y = 0;
    }
    if(this.pos.y>height){
      this.pos.y = height;
    }
  }
  
  display(){
    noStroke();
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.size);
  }
  
  

}