// function personConstructor(name, age){
//     var person = {};
//     person.name = name;
//     person.age = age;
//     person.greet = function(){
//         console.log("Hello my name is " + person.name + ' and I am ' + person.age + " years old!");
//     }
//     return person;
// }

// var steve = personConstructor("Steve", 27);
// steve.greet();

// var emily = personConstructor("Emily", 33);
// emily.greet = function (){
//     console.log("I am the greatest ever!");
// }
// emily.greet();

////////////this and new always go together. If you use this in constructor, must use new//////

function personMaker(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello my name is " + this.name + " and I'm " + this.age + " years old!");
    }
}

var newEmily = new personMaker("newEmily", 33);
newEmily.greet = function(){
    console.log("My name is " + this.name + ".I'm cool");
}
newEmily.greet();