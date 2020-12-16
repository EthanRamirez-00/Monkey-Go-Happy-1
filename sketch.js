
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //monkey
  monkey = createSprite(50,250,20,50);
  monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1
  
  //ground
  ground = createSprite(200,270,400,20);
  
  //banana
  bananaGroup = new Group();
  
  //obstacle
  obstacleGroup = new Group();
}


function draw() {
background("white");
  //jumping
  if(keyDown("space") && monkey.y>=50) {
    monkey.velocityY = -15;
  }
      //Gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.8
//ground
    monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)) // monkey touches any obstacle
    {
      gameState=END;
        }
  spawnBananas();
  spawnObstacle();
  drawSprites();
}
//banana
function spawnBananas() {
  //spawn bananas 
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
     banana.addImage(bananaImage)
     banana.y = Math.round(random(130,160))
     banana.scale = 0.05;
     banana.velocityX = -4;
    
    //adjust the depth
     banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
     banana.lifetime=200;
    
    bananaGroup.add(banana);
    }
}
function spawnObstacle() {
  //spawn bananas 
  if (frameCount % 60 === 0) {
     obstacle = createSprite(600,240,40,10);
     obstacle.addImage(obstacleImage)
     obstacle.scale = 0.1;
     obstacle.velocityX = -4;
    
    //adjust the depth
     obstacle.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
     obstacle.lifetime=200;
    
    bananaGroup.add(banana);
    }
}




