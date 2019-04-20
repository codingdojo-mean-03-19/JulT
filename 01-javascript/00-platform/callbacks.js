// var a =2;
// var b = function(){ console.log("Something"); };
// function doSomething(x){
//     console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);
/////////////////////////////////////////////////////////////////////////////
//if the data type of the argument is a function, invoke that function.
// function doSomething(possibleCallback){
//     if (typeof(possibleCallback) === 'function'){
//         console.log('possibleCallback is a callback!');
//         possibleCallback();
//     }else {
//         console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
// }
// doSomething(function myCallback(){ 
//     console.log('yes, I ama callback!');
// })
// doSomething('String');
//////////////////////////////////////////////////////////////////////////////
// function makePasta(pasta, makeSauce){
//     console.log('Boiling water');
//     console.log('Putting ' + pasta + 'pasta in the water');
//     console.log('Pasta is done!');
//     return pasta + 'Pasta! Voila!';
// }
// makePasta('Penne');
// makePasta('Farfalle');
//We need to modify our makePasta recipe so when it is passed a sauce it can make it!
function makePasta(pasta, makeSauce){
    console.log('Boiling water!');
    console.log('Putting ' + pasta + ' pasta in the water');
    //create a variable for sauce!
    var sauce = makeSauce();
    console.log("Mixin sauce");
    console.log("Pasta is done!")
    return passta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto(){
    console.log("Making Persto!");
    return "pesto";
}
function makeAlfredo(){
    console.log("Making Alfredo!");
    return "Alfredo";
}
//we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
//notice the lack of paranthesis after makePesto.
//it's because we want to pass the FUNCTION, not execute it and pass a return value
console.log(makePasta("Farfalle", makeAlfredo));