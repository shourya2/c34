class Rope {

constructor (body,point){
var options = {
length : 250,
stiffness : 1.2 ,
bodyA : body,
pointB : point 
}
this.Rope = Constraint.create(options)
World.add (myworld,this.Rope)
}
display (){
var point1 = this.Rope.bodyA.position
var point2  = this.Rope.pointB   
line (point1.x,point1.y,point2.x,point2.y)
}

}