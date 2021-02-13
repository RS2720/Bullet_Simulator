var bullet,wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1000,400);

  bullet = createSprite(200, 200, 50,25);
  wall = createSprite(800,200,thickness,200);


  bullet.velocityX = 50;
  
  speed = random(200,300);
  weight = random(30,50);
  thickness = random(20,100)
}

function draw() {
  background("black");  
  
  bullet.shapeColor = color("white");


  if(wall.x-bullet.x < (bullet.width + wall.width)/2) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage<10){
      bullet.shapeColor = color("green");
      wall.shapeColor = color("white");
    }
 if(damage>10){
      bullet.shapeColor = color("red");
      wall.shapeColor = color("white");
    }
  }

  drawSprites();
}