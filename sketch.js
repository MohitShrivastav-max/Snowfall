var snowflake,snowflakeImg
var bgImg

function preload() {
  snowflakeImg = loadImage("snow5.webp");
  snowfalke2Img = loadImage("snow4.webp");
  bgImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%50===0){
  snowflake = createSprite(random(100,800), 0, 10, 50);
  snowflake.velocityX = -5;
  snowflake.velocityY = 20;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
function createSnowflake2(){
  if(frameCount%80===0){
    snowflake2 = createSprite(random(0,500), 0, 100, 200);
    snowflake2.velocityX = -5;
    snowflake2.velocityY = 15;
    snowflake2.addImage(snowflakeImg2);
    snowflake2.scale = 0.5;
    } 
}