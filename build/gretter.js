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
//# sourceMappingURL=gretter.js.map