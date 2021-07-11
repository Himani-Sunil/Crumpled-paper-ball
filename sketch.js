
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var left;
var right;




function setup() {
  createCanvas(1300,400);
  engine = Engine.create();
  world = engine.world;
  
  ground= new GroundObj(width/2,370,width,20);
  left = new GroundObj(930,320,10,100);
  right = new GroundObj(1150,320,10,100);
  
 

  
  var options={
 	isStatic:false,
	restitution:0.3,
   	friction:0,
	density:1.2
  }
  ball = Bodies.circle(200,100,1,options)
  
  World.add(world,ball)

  //wall
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
 // Engine.run(engine);
}


function keyPressed(){
	
	if(keyCode === UP_ARROW){
	
		
		Matter.Body.applyForce(ball,{x: 0.02, y: 0},{x:0.05,y:0.10})
		//Matter.Body.applyForce(ball,{x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.05});
	
	}

	

}



function vForce(){
  

}
