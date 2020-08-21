var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side3Sprite;
var side2Sprite;
var side1Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1Sprite=createSprite(400, 640, 300,20);
	side1Sprite.scale=0.5;
	side1Sprite.shapeColor="red";

	
	side2Sprite=createSprite(300, 600, 20,100);
	side2Sprite.scale=0.5;
	side2Sprite.shapeColor="red";

	
	side3Sprite=createSprite(500, 600, 20,100);
	side3Sprite.scale=0.5;
	side3Sprite.shapeColor="red";

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);

	side1 = Bodies.rectangle(400 , 640 , 300,20 , {restitution:0.5, isStatic:true});
	World.add(world, side1);
  
	side2 = Bodies.rectangle(330 , 620 ,20 ,100, {restitution:0.5, isStatic:true});
	World.add(world, side2);

	side3 = Bodies.rectangle(470 , 620 , 20 ,100, {restitution:0.5, isStatic:true});
	World.add(world, side3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 keyPressed();


	side1Sprite.x= side1.position.x 
	side1Sprite.y= side1.position.y 

	side2Sprite.x= side2.position.x 
  	side2Sprite.y= side2.position.y 

  	side3Sprite.x= side3.position.x 
 	side3Sprite.y= side3.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic( packageBody, false);
  }
}