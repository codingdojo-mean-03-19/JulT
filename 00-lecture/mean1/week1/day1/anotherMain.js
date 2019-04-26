var myVar = 'this is a string';

myVar = 123124;

console.log(myVar);

var array = ['dog', 'cat', 'horse'];

array.push(myVar);

console.log(array);

for (var index = 0; index < array.length; index ++){
    console.log('element index is ' + index, array[index]);
}

for (var index in array){
    console.log('FOR IN loop iterates through the keys. For arrays, it"s the index ' + index);
}

for (var element of array){
    console.log('element is ' + element);
}

for(var element of array.entries()){
    console.log('.entries returns an iterable object. Element', element)
}
