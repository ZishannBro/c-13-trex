var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var cactus1img, cactus2img, cactus3img, cactus4img, cactus5img, cactus6img

var newImage;

var score=0

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadAnimation("trex_collided.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");
  cactus1img = loadImage("obstacle1.png")
  cactus2img = loadImage("obstacle2.png")
  cactus3img = loadImage("obstacle3.png")
  cactus4img = loadImage("obstacle4.png")
  cactus5img = loadImage("obstacle5.png")
  cactus6img = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  console.log("Hello" + 5)

}

function draw() {
  background(180);
  text("Score:"+score,500,50)
score=score+Math.round(frameCount/60)

  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);

  //spawn the clouds
  spawnClouds();
  spawnObstacles()
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10, 60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;


    //assigning lifetime to the variable
    cloud.lifetime = 134

    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
  }
}
function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var cactus = createSprite(600, 165, 10, 40)
    cactus.velocityX = -6
    var rand = Math.round(random(1, 6))
    switch (rand) {
      case 1:
        cactus.addImage(cactus1img)
        break;
      case 2:
        cactus.addImage(cactus2img)
        break;
      case 3:
        cactus.addImage(cactus3img)
        break;
      case 4:
        cactus.addImage(cactus4img)
        break;
      case 5:
        cactus.addImage(cactus5img)
        break;
      case 6:
        cactus.addImage(cactus6img)

        break;


      default:
        break;
    }
cactus.scale=0.5
cactus.lifetime=300
  }
}
