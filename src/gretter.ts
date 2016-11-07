class Student {
    firstName: string;
    lastName: string;

    constructor(fiestName: string, lastName: string) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }

    greeter(tips: string) {
        return "Hello，您好，" + this.firstName + " " + this.lastName + '，' + tips;
    }
}

var user = new Student("程", "仁");
var tips = '您是某某的某某吗？';
document.body.innerHTML = user.greeter(tips);