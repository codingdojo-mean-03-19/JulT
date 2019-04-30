//console.log(this);  //this always refers to its parent object

// function Person(name, age) {
//     var privateVariable = "This variable is private";
//     var privateMethod = function () {
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log("Hello my name is " + this.name + " and I'm " + this.age + " years old.");
//     }
// }

// var eliza = new Person("Eliza", 48);
// console.log(eliza.privateVariable); //will log undefined!
// // can't access our private methods from outside the Constructor.

//////////to use private variables and methods ....//////////
function Person(name, age){
    var self = this;    //avoiding loosing this in private methods 
    var privateVariable = "This is private variable";
    var privateMethod = function(){
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I'm, ${this.age} years old`);
        console.log("Also my provateVariable says: "+privateVariable);
        privateMethod();
    }
}

var joe = new Person("Joe", 23);
joe.greet();