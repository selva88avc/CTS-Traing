var Faculty = /** @class */ (function () {
    function Faculty() {
    }
    return Faculty;
}());
var Mentor = /** @class */ (function () {
    function Mentor() {
        this.facname = "Wilson";
    }
    Mentor.prototype.showQualification = function () {
        console.log(' Faculty ' + this.facname);
    };
    return Mentor;
}());
var mentor = new Mentor();
mentor.showQualification();
var Student = /** @class */ (function () {
    function Student(sid, sname) {
        this.studetnid = sid;
        this.studentname = sname;
    }
    Student.prototype.displayDetails = function () {
        console.log(" student id is ".concat(this.studetnid, "  and name ").concat(this.studentname));
    };
    return Student;
}());
var personobj = new Student(100, "Sachin");
personobj.displayDetails();
