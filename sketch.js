const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var ball;
var sling;
var polygon_img;
function preload(){
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(2000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(700,300,250,10);
  stand2 = new Stand(1100,200,200,10);
 
  //level one
  block1 = new Block(600,275,30,40);
  console.log(block1);
  block2 = new Block(630,275,30,40);
  block3 = new Block(660,275,30,40);
  block4 = new Block(690,275,30,40);
  block5 = new Block(720,275,30,40);
  block6 = new Block(750,275,30,40);
  block7 = new Block(780,275,30,40);
  //level two
  block8 = new Block(630,235,30,40);
  block9 = new Block(660,235,30,40);
  block10 = new Block(690,235,30,40);
  block11 = new Block(720,235,30,40);
  block12 = new Block(750,235,30,40);
  //level three
  block13 = new Block(660,195,30,40);
  block14 = new Block(690,195,30,40);
  block15 = new Block(720,195,30,40);
  //top
  block16 = new Block(690,155,30,40);

  //tower 2 level 1
  block17 = new Block(1020,180,30,40);
  block18 = new Block(1050,180,30,40);
  block19 = new Block(1080,180,30,40);
  block20 = new Block(1110,180,30,40);
  block21 = new Block(1140,180,30,40);
  block22 = new Block(1170,180,30,40);
  // tower 2 level 2
  block23 = new Block(1050,140,30,40);
  block24 = new Block(1080,140,30,40);
  block25 = new Block(1110,140,30,40);
  block26 = new Block(1140,140,30,40);
  //tower 2 level 3
  block27= new Block(1080,100,30,40);
  block28 = new Block(1110,100,30,40);
  //tower2 top level
  block29 = new Block(1095,60,30,40);
  

   ball=Bodies.circle(50,200,20);
   World.add(world,ball)
  

   sling= new Sling (ball,{x:250,y:150})
 

  

}
function draw() {
  background("white"); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  //filling colour for first level of tower 1
  fill("skyblue");
  block1.display();
  block3.display();
  block5.display();
  block7.display();
  fill("blue");
  block2.display();
  block4.display();
  block6.display();
  //fillilng colour for second level of tower 1
  fill("pink");
  block8.display();
  block10.display();
  block12.display();
  fill("purple");
  block9.display();
  block11.display();
  //filling color for third level of tower 1
  fill("turquoise");
  block13.display();
  block15.display();
  fill("blue");
  block14.display();
  fill("darkgreen");
  block16.display();

  fill("blue");
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block24.display();
  block25.display();
 
  fill("red");
  block23.display();
  block26.display();
  block17.display();
  block22.display();
  block27.display();
  block28.display();
  block29.display();
  sling.display();
  //ball.display();
  
  imageMode(CENTER)
  image(polygon_img, ball.position.x, ball.position.y,40,40);
 

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
