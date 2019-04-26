//using callback example:

function each(array, callback){
    for(let index=0; index<array.length; index++){
        callback(array[index], index);
    }
}

const stringArray = ['1','2','3','4','5','6'];

each(stringArray, function(element, index){
    //introducing string interpolation available in ES6 
    console.log(`element: ${ element} and index: ${index}`);
    //same as concatenating
    //console.log('element: ' + element + ' and index: ' + index);

});

each(stringArray, listItem);

function listItem(item){
    console.log(item);
}

function map(array, callback){
    const results =[];
    for(let index=0; index<array.length; index++){
        results.push(callback(array[index], index));
    }

    return results
}

let results = map(stringArray, function(element, index){
    return parseInt(element, 10);
});