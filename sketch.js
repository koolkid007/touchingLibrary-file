var obstacle1, obstacle2, obstacle3, obstacle4;

function setup() {
  createCanvas(800,400);
  obstacle2 = createSprite(400, 200, 50, 50);
  obstacle1 = createSprite(30,100,10,10);
  obstacle3 = createSprite(100,100,25,25);
  obstacle4 = createSprite(200,200,15,15);
}

function draw() {
  background('lightblue');  
  
  obstacle1.x = mouseX;
  obstacle1.y = mouseY;
  obstacle1.debug = true;
  obstacle2.debug = true;

if(touch(obstacle1, obstacle2)) {
  obstacle2.shapeColor = 'red';
}

else {
  obstacle2.shapeColor = 'white';
  obstacle1.shapeColor = 'white';
}
  
  
  drawSprites();

}

