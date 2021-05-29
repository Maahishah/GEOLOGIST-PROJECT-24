const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, stone;
var iron1, iron2, iron3, iron4,iron5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,200,60);
    stone = new Stone (500,200,70);
    iron1 =  new Iron(600,200,10);
    iron2 = new Iron(600,200);
    iron3 = new Iron(600,200);
    iron4 = new Iron(600,200);
    iron5 = new Iron(600,200);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
}