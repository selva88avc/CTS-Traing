interface iPerson
{
    displayDetails() : void
}

class Student implements iPerson
{
    public studetnid : number
    public studentname : string

    constructor(sid : number,sname : string) {
        this.studetnid=sid
        this.studentname=sname
        
    }

    displayDetails(): void {
        console.log(` student id is ${this.studetnid}  and name ${this.studentname}`)

    }
    
}

let personobj:iPerson = new Student(100,"Sachin")
personobj.displayDetails()

class Faculty
{
    facname : string
}
interface imentor extends Faculty
{
    addr : string;
    showQualification();
} 

class Mentor implements imentor
{
    facname: string = "Wilson";
    addr: string = "CP"
    showQualification() {
      console.log( ' Faculty ' + this.facname )
    }
}

let mentor:imentor =new Mentor();
mentor.showQualification()




