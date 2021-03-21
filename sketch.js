var score=0



function preload(){

bgimg=loadImage("background0.png")
 arrowimg=loadImage("arrow0.png")
  bowimg=loadImage("bow0.png")
  red_img=loadImage("red_balloon0.png")
   pink_img=loadImage("pink_balloon0.png")
   green_img=loadImage("green_balloon0.png")
   blue_img=loadImage("blue_balloon0.png")
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(300,300,600,600)
  bg.addImage(bgimg)
  bg.scale=2.3
  
  bow=createSprite(580,300,20,50)
  bow.addImage(bowimg)
}

function draw() {
background("black")
 bg.velocityX=-1
  if(bg.x<150)
  {
    bg.x=bg.width/2
  }
  bow.y=World.mouseY
  if (keyDown("space")) {
    createArrow();
    
  }
  var select_balloon = Math.round(random(1,4));

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redballoon();
    } else if (select_balloon == 2) {
      greenballoon();
    } else if (select_balloon == 3) {
      blueballoon();
    } else {
      pinkballoon();
    }
  }
  drawSprites();
  fill("white")
  text("score="+score,400,50)
  
}
function redballoon(){
  
  red=createSprite(0,Math.round(random(20,570)),10,10)
  red.addImage(red_img)
  red.velocityX=3
  red.lifetime=150
  red.scale=0.1 
}

function blueballoon(){  blue=createSprite(0,Math.round(random(20,570)),10,10)
  blue.addImage(blue_img)
  blue.velocityX=3
  blue.lifetime=150
  blue.scale=0.1 
}

function greenballoon(){  green=createSprite(0,Math.round(random(20,570)),10,10)
  green.addImage(green_img)
  green.velocityX=3
  green.lifetime=150
  green.scale=0.1 
}
function pinkballoon(){  pink=createSprite(0,Math.round(random(20,570)),10,10)
  pink.addImage(pink_img)
  pink.velocityX=3
 pink.lifetime=150
  pink.scale=0.9 
}
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowimg);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}




