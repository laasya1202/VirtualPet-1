//Create variables here
var dog, dogimg, happyDog;
var foodS, foodStock;
var database;
function preload()
{
	//load images here
  dogimg = loadImage("Dog.png")
  happyDog = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(700, 600);
  database = firebase.database();
  dog = createSprite(550, 400, 10, 10)
  dog.addImage(dogimg);
  dog.scale = 0.2;
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  textSize(20);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
  stroke("white");
  textSize(20);
text("Food Remaining = " + foodS, 200, 100)
}

function readStock(data){
  foodS=data.val();
  
}

function writeStock(x){

  if(x<=0){
x=0
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}

