// 30 minutes max

// 1. Write a function that accepts an array of student objects, 
//    shown below. Print all of the students'


let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

        //    Your console should look like the following when the function
        //    is called with the provided array.
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

for (var student of students){
    console.log('Name: ' + student.name + ', Cohort: ' + student.cohort);
}

// 2. Write a function that accepts an object of users divided into 
//    employees and managers, and display the number of characters per 
//    employee/manager's name, as shown below, and log the information 
//    to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
        //Your console should look like the following:
//  EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

for (var user in users){
    console.log(user.toUpperCase());
    for(i=0; i<users[user].length; i++){
        num = i+ 1;
        fName = users[user][i].first_name;
        lName = users[user][i].last_name;
        length = fName.length +lName.length;
        console.log(num +' - ' + lName + ', ' + fName + ' - ' + length);
    }
}