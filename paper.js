class paper{
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
            
        }
            this.x=x;
		    this.y=y;
		    this.paperWidth=20;
		    this.paperHeight=20;

            this.body = Bodies.rectangle(this.x, this.y, 100,100, options)
		
		    this.image=loadImage("paper.png");
        
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop()

    }
}