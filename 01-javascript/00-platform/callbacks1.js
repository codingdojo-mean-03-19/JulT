function makePasta(pasta, makeSauce){
    console.log('Boiling water');
    console.log('Putting '+ pasta + ' pasta in the water');
   
    var sauce = makeSauce();
    console.log("Mixing sauce!");
    console.log('pasta is done!');
    return pasta + " Pasta! with" + sauce + ' sauce! Tada!';
}

function makePesto(){
    console.log("Making Pesto");
    return "pesto";
}

function makeAlfredo(){
    console.log('Making Alfredo');
    return "Alfredo";
}

console.log(makePasta("Penne", makeAlfredo));