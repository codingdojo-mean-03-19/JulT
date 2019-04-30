//object and inheritance

function Person(name){
    this.name = name;
}
 Person.prototype.sayHello = function(){
     console.log(`Hello, my name is ${this.name}`);
 }

 const person = new Person('Person');

 console.log(person);
 person.sayHello();