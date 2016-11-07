/**
 * 基础类型
 */
var Student = (function () {
    function Student(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function (tips) {
        return "Hello，您好，" + this.firstName + " " + this.lastName + '，' + tips;
    };
    return Student;
}());
var user = new Student("程", "仁");
var tips = '您是某某的某某吗？';
document.body.innerHTML = user.greeter(tips);
// boolean
var isDone = false;
// number
var isNum = 1;
// string
var str = 'acrens';
// template
var firstname = "acrens";
var age = 24;
var tpl = "Hello, my name is " + name + ".\nI'l be " + (age + 1) + " years oldnext month.";
// array
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// Tuple
var x;
x = ['acrens', 1];
// x = [1, 'acrens']; Error
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var c1 = Color.Blue;
// any
var notSure = 4;
notSure = 'acrens sorry!';
notSure = true;
// 空值
function warnUser() {
    console.log('acrens i love you');
}
// Null 和 Undefined
// 1、两者各自有自己的类型分别叫做 undefined 和 null
// 2、默认情况下 null 和 undefined 是所有类型的子类型，即可以赋值给任意类型
//# sourceMappingURL=base-type.js.map