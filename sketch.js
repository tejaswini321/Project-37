var database;
var dog, dogImg, happyDog, dog1;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;
var form,game,bedroom,button;
var gameState = "Start";


function preload()
{
  dog1 = loadImage("running.png");
}


function setup() {

  createCanvas(800, 500);

    dog = createSprite(400, 280);
    dog.scale = 0.3;

    foodObj = new Food();
    game = new Game();
    
 
}

function draw() {  
  background(rgb(28,167,115));

  foodObj.display();
  game.display();

  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed : 12 AM",350,30);
   }else{
     text("Last Fed : "+ lastFed + " AM", 350,30);
   }
   
  drawSprites();

  fill("black");
  textSize(15);
  text("feed the dog till the end to continue the routine",50,490);

 

}
function mousePressed(){
  gameState = "Play";
}
function feedDog(){
  if(foodS > 0){
      foodS--;
      foodObj.updateFoodStock(foodS);
      lastFed = hour();
      foodObj.updatelastFed(lastFed);
  }
}