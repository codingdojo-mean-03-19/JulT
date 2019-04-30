var MyObjConstructor = function(name){
    var myPrivateVar = "Hello";
    this.name = name;
    this.method = funtion(){
        console.log("I'm a method");
    };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);