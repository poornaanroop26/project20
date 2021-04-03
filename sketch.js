var mouse,mouseImage1, mouseImage2, mouseImage3;
var cat,catImage1,catImage2,catImage3;
var garden;

function preload() {
    //load the images here
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3=loadAnimation("images/mouse4.png");
    
    catImage1=loadAnimation("images/cat1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");

    garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here

    cat=createSprite(900, 600);
    cat.addAnimation("sleepingCat",catImage1);
    cat.addAnimation("runningCat",catImage2);
    cat.addAnimation("lastcatImage",catImage3);
    cat.scale=0.15;
     
    mouse=createSprite(200,600);
    mouse.addAnimation("standingMouse", mouseImage1);
    mouse.addAnimation("teasingMouse",mouseImage2);
    mouse.addAnimation("lastmouseImage",mouseImage3);
    mouse.scale=0.15;
    
     
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 - cat.width/2){
        cat.velocityX = 0
        cat.changeAnimation("lastcatImage");
        cat.x = 300;

        mouse.changeAnimation("lastmouseImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){

        cat.velocityX = -5;
        cat.changeAnimation("runningCat");
        mouse.frameDelay = 25;
        mouse.changeAnimation("teasingMouse");

    }

}
