class Box {

    constructor (x,y,width,height){
    var options = {
     isStatic : false , 
     restitution:0.4 ,
     density:0.4 ,
     friction:1   
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height;
    World.add (myworld,this.body)
    }
     display (){
      var pos = this.body.position
    angleMode (RADIANS)
    push ()
    translate (pos.x,pos.y)
    rotate(this.body.angle)
      rectMode (CENTER)   
    rect (0,0,this.width,this.height)
    pop ()
    
     }
    
    }
    