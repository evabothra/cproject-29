class Slingshot{
 constructor(bodyA, pointB){
     var options = 
     { bodyA: bodyA, 
        pointB: pointB, 
        stiffness: 0.04, 
        length: 1 
    } 
    this.sling = Constraint.create(options); 
    this.pointB=pointB; 
    World.add(world, this.sling);
    slingShot = new Slingshot(this.ball,{x:100,y:200});

        }

        fly(){
            this.sling.bodyA = null;
        }
}