const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;



function preload(){
   bg = loadImage("background.jpg");
   pin = loadImage("bowlingPin.png");
   alley = loadImage("bowlingAlley.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  pin = new Pin(displayWidth/2+50,displayHeight/2+170);
  pin2 = new Pin(displayWidth/2+60,displayHeight/2+165);
  pin3 = new Pin(displayWidth/2+70,displayHeight/2+160);
  pin4 = new Pin(displayWidth/2+80,displayHeight/2+155);
  pin5 = new Pin(displayWidth/2+40,displayHeight/2+165);
  pin6 = new Pin(displayWidth/2+30,displayHeight/2+160);
  pin7 = new Pin(displayWidth/2+20,displayHeight/2+155);
  pin8 = new Pin(displayWidth/2+30,displayHeight/2+155);

  ground1 = new Ground(displayWidth/2+50,displayHeight/2+197);
  ground2 = new Ground(displayWidth/2+60,displayHeight/2+192);
  ground3 = new Ground(displayWidth/2+70,displayHeight/2+187);
  ground4 = new Ground(displayWidth/2+80,displayHeight/2+182);
  ground5 = new Ground(displayWidth/2+40,displayHeight/2+192);
  ground6 = new Ground(displayWidth/2+30,displayHeight/2+187);
  ground7 = new Ground(displayWidth/2+20,displayHeight/2+182);
  ball = new Ball(displayWidth/2+50,displayHeight/2+370)
  
  attach = new Attach(ball.body,{x:displayWidth/2+50,y:displayHeight/2+270});


  

  game.getState();
  game.start();
}


function draw(){
  Engine.update(engine);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    game.play();
    pin.display ();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
    pin7.display();
    pin8.display();
    ball.display();
    attach.display();
    
  }
  
}
function mouseDragged(){
  
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
     
  
}


function mouseReleased(){
    attach.fly();
}