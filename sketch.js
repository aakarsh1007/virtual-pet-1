//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;

function preload(){
   //load images here
  loadImage = "sprites/dog.png";
  loadImage = "sprites/happydog.png";
}

function setup() {
	createCanvas(500,500);
  dog = (250,250,30,30);
 dog.addImage = (dog);
}

function draw() {  
 background(46,139,87);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage = (happydog);

 foodStock = database.ref('Food');
 foodStock.on("value",readStock);
 }
 

  drawSprites();
  //add styles here
   text("Food Stock",200,200);
   textSize(40);
   fill("black");
   stroke(5);
}
  function readStock(){
    foodS = data.val();
  }
  function writeStock(x){
    
     if(x<=0){
       x=0;
       database.ref('/').update({
        Food:x
      })
     }
     else{
       x=x-1;
     }
   
  }



