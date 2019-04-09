
/////////////////////// ARRAY //////////////////////////////////////////
var myVar = 'this is a string';
myVar= 1231242;

console.log(myVar);

var array = ['dog', 'cat', 'horse'];

array.push(myVar);
console.log(array[1]);         //will display cat. To access a certain item, just give the index in a [].
console.log(array);


for(var index=0; index<array.length; index++){
    console.log('index is:' + index);
}


for(var element in array){
    console.log('FOR IN loop gives the index: ' + element) //FOR IN loop iterates over keys of an object 
}

//If you still wanna use the FOR IN loop, and still wanna see the items in the array object, you can do this:
for (var index in array){
    console.log('using FOR IN loop (array[index]): ' + array[index]);
}

//FOR OF loop gives you the element at that position
for (var element of array){
    console.log('using FOR OF loop, element is: '+ element);
}

//what if you wanted to also have the index, as well as the element using the FOR OF loop
for (var element of array.entries()){
    console.log('not concatinating. Using FOR OF loop with .entries(): ', element);
}

for(var [index, element] of array.entries()){
    console.log('element is with destructure ', element, index)
}

/////////////////////   OBJECT  //////////////////////////////////
// if there was an array like this, it's hard to understand what each values stand for 
//         var person =['brown', 'blue', 5.6, 34]; 

// so let's use key value pair to store these values. Key value pair is called an object in JS
var person = {
    hair:'brown',
    eyes: 'blue',
    height: 5.6,
    age: 34
};

person.weight = 178; 
// or can also do 
// person['weight'] = 178;

console.log(person);

// to get the KEYS:
for (var prop in person){
    console.log('prop is: ', prop);
}

// to get both the KEY and VALUE:
for (var key in person){
    console.log('key and value', key, person[key]);
}

////////////////// FUNCTIONS ///////////////////////////////////
function myFunc(){
    console.log('running function');
}
myFunc();
// hoisting - JS interpreters look for all functions and variable declarations first
//            and move them to the top of the scope, making that function and variable
//            available everywhere

// let - if you don't want the variable available everywhere, use this key word. It confines the variable to a small scope/wihin {}
// const - can't reassign variables with this keyword. 