
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var box1; 
var box2;
var box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    paper= new Paper(200,200,20,20) 
	//Create the Bodies Here.
   ground= new Ground(200,700,2000,20) 
   box1= new Box(500,610,20,100);
   box2 = new Box(700,610,20,100)
   box3 = new Box(600,650,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
 
  drawSprites();
 
}
function keyPresssed(){
if(keyCode===UP_ARROW)
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}


