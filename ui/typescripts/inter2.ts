class Engine

{
    engineType : string;
    speed:string;
    constructor(etype ,speed) {
        this.engineType=etype
        this.speed=speed
        console.log("inside parent")
    }
    display()  : void
    {
        console.log( "Engine type " + this.engineType)
    }
}

class Car extends Engine
{
    carName : string;
    constructor(etype,speed,cname)
    {
        super(etype,speed)
   
        this.carName=cname
    }
    display(): void {
        super.display()
        console.log(" car name is " + this.carName)
    }
}

let engine : Engine =new Car("Diesol","150km","BMW");

engine.display()
