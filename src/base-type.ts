/**
 * 基础类型
 */
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


// boolean
let isDone: boolean = false;

// number
let isNum: number = 1;

// string
let str: string = 'acrens';

// template
let firstname: string = `acrens`;
let age: number = 24;
let tpl: string = `Hello, my name is ${ name }.
I'l be ${ age + 1 } years oldnext month.`;

// array
let arr1: number[] = [1, 2, 3];
var arr2: Array<number> = [1, 2, 3];

// Tuple
var x: [string, number];
x = ['acrens', 1];
// x = [1, 'acrens']; Error

// enum
enum Color { Red, Blue, Green };
let c1: Color = Color.Blue;

// any
let notSure: any = 4;
notSure = 'acrens sorry!';
notSure = true;

// 空值
function warnUser(): void {
    console.log('acrens i love you');
}

// Null 和 Undefined
// 1、两者各自有自己的类型分别叫做 undefined 和 null
// 2、默认情况下 null 和 undefined 是所有类型的子类型，即可以赋值给任意类型

