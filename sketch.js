//name spacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;

function setup() {
  var canvas = createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,30);
  box1 = new Box(300,300,50,50);
  box2 = new Box(325,250,50,80);
}

function draw() {
  background("lightblue"); 
  Engine.update(engine);
   
  ground.display();
  box1.display();
  box2.display();
  
}