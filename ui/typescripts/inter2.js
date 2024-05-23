var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(etype, speed) {
        this.engineType = etype;
        this.speed = speed;
        console.log("inside parent");
    }
    Engine.prototype.display = function () {
        console.log("Engine type " + this.engineType);
    };
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(etype, speed, cname) {
        var _this = _super.call(this, etype, speed) || this;
        _this.carName = cname;
        return _this;
    }
    Car.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" car name is " + this.carName);
    };
    return Car;
}(Engine));
var engine = new Car("Diesol", "150km", "BMW");
engine.display();
