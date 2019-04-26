const numArray = [99,23,253,288];
function square(array){
    const results=[];

    for(let index=0;index<array.length; index++){
        const sqr = array[index] * array[index];
        console.log('looping ', index, array[index], sqr);
        results.push(sqr);
    }
    return results;
}

function add(array){
    const results =[];
    for(let index =0; index<array.length; index++){
        const added = array[index] + array[index];
        console.log('looping ', index, array[index], added);

        results.push(added);
    }
    return results;
}
console.log(square(numArray));
console.log(add(numArray));