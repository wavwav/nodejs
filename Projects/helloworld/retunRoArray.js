var Ro = /** @class */ (function () {
    function Ro(name) {
        var _this = this;
        this.notRoArray = function () {
            var array = [];
            array.push(_this.name);
            return array;
        };
        this.roArray = function () {
            var array = [];
            array.push(_this.name);
            var returnArray = array;
            return returnArray;
        };
        this.name = name;
    }
    return Ro;
}());
var test = new Ro("test");
//console.log(test);
console.log(test.notRoArray().unshift("aa"));
console.log(test.roArray());
var array = test.notRoArray().unshift("aa");
console.log(array);
test.roArray();
