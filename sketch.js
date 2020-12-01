var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1500, 400);
 
  thickness =random(22,83);
  speed =random(223,321);
  weight = random(30,52);
  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor = "green";
  bullet = createSprite(200,200,20,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "blue";
  


}

function draw() {
  background(220);
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }

    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  }

  console.log(wall.position.x);
  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}