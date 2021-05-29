class Iron{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
            'friction':3,
            'density':30
        }
    
    this.x = x;
    this.y = y;
    this.r = 10;
    this.body=Bodies.circle(this.x,this.y,10,options);
    World.add(world,this.body);
    }
    
    display(){
        var ironpos = this.body.position;
        push()
        translate(ironpos.x,ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("grey");
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop() }
    }   
