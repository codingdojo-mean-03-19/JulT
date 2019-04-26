// function counter() {
//     var count = 0;
//     function childScope(){
//         count +=1;
//         return count;
//     }
//     return childScope;
// }
// counter = counter();
// console.log(counter());
// // => 1
// console.log(counter());
// // => 2
// // console.log(counter());
// // // => 3
// // console.log(counter());
// // // => 4

function personMaker(name, items){
    const person = { name: name};
    person.items = items;
    return person;
}

const person1 = personMaker('Bob', ['gold', 'crackers', 'lint']);
const person2 = personMaker('Sally', ['phone', 'money', 'cat']);
console.log('person', person1);
console.log('person', person2);
//let's create a function that's gonna interact with these
//it's gonna have the ability to choose an item from the array of items
function take(item, target){
    if(!target || !Array.isArray(target.items)){
        throw new Error('target must have items array');
    }
    for (let index=0; index<target.items.length; index++){
        console.log('index. ', index, target.items[index]);
        if(item === target.items[index]){
            console.log('found item at index ', item, index)

            return true;
        }
    }

    return false;
}
take('gold', person1);


