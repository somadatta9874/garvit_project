class Ball{
    constructor(x,y){
        var options ={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        

        this.image = loadImage("bowlingBall1.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       
        var angle = this.body.angle;
        push();
        translate (pos.x,pos.y);
        rotate(angle);
        imageMode (CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop ();      
    }
}