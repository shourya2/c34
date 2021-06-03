class Ball {

    constructor (x,y,radius ){
    var options = {
     isStatic : false , 
     restitution:0.4 ,
     density:1 ,
        
    }
    this.body = Bodies.circle(x, y, radius, options)
    this.radius = radius
    
    World.add (myworld,this.body)
    }
     display (){
      var pos = this.body.position
    
    push ()
    translate (pos.x,pos.y)
    rotate(this.body.angle)
      ellipseMode (RADIUS)   
    ellipse (0,0,this.radius,this.radius)
    pop ()
    
     }
    
    }