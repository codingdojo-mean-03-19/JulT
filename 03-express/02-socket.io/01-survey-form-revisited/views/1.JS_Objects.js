// Write a function that accepts an array of student objects,
// as shown below. Print all of the students' names and their cohorts.
let students = [
    {name: 'Remy', cohor: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Osmund', cohort:'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

function printArrayObjects(arrayPass){
    for (let eachArray in arrayPass){
        console.log(arrayPass[eachArray]['name']);
    }
}