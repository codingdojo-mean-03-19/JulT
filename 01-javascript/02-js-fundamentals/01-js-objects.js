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

//2ndSOLUTION//////////////////////////
// Write a function that accepts an array of student objects, as shown below.
// Print all of the students' names and their cohorts.

// const students = [
//         { name: 'Remy', cohort: 'Jan' },
//         { name: 'Genevieve', cohort: 'March' },
//         { name: 'Chuck', cohort: 'Jan' },
//         { name: 'Osmund', cohort: 'June' },
//         { name: 'Nikki', cohort: 'June' },
//         { name: 'Boris', cohort: 'June' },
//       ];
      
//       function printStudentsBasic(students) {
//         for (let index = 0; index < students.length; index++) {
//           console.log(
//             'Name: ' + students[index].name + ', Cohort: ' + students[index].cohort
//           );
//         }
      
//         console.log('finished basic');
//       }
      
//       printStudentsBasic(students);
      
//       function printStudentsIntermediate(students) {
//         for (const student of students) {
//           console.log(`Name: ${student.name}, Cohort: ${student.cohort}`);
//         }
//         console.log('finished intermediate');
//       }
      
//       printStudentsIntermediate(students);
      
//       function printStudentsAdvanced(students) {
//         students.forEach(printObject);
      
//         console.log('finished advanced');
//       }
      
//       function printObject(object) {
//         const result = Object.entries(object)
//           .reduce(
//             (memo, [key, value]) => (memo += `${capitalize(key)}: ${value}, `),
//             ''
//           )
//           .trim()
//           .slice(0, -1);
      
//         console.log(result);
//       }
      
//       function capitalize(word) {
//         return word.charAt(0).toUpperCase() + word.substr(1);
//       }
      
//       printStudentsAdvanced(students);
      
//       // Write a function that accepts an object of users divided into employees and managers,
//       // as shown below, and logs the information to the console.
      
//       const users = {
//         employees: [
//           { firstName: 'Miguel', lastName: 'Jones' },
//           { firstName: 'Ernie', lastName: 'Bertson' },
//           { firstName: 'Nora', lastName: 'Lu' },
//           { firstName: 'Sally', lastName: 'Barkyoumb' },
//         ],
//         managers: [
//           { firstName: 'Lillian', lastName: 'Chambers' },
//           { firstName: 'Gordon', lastName: 'Poe' },
//         ],
//       };
      
//       function printUsersBasic(users) {
//         for (const employeeType in users) {
//           console.log(employeeType.toUpperCase());
      
//           for (let index = 0; index < users[employeeType].length; index++) {
//             console.log(
//               (index + 1).toString() +
//                 ' - ' +
//                 users[employeeType][index].lastName.toUpperCase() +
//                 ', ' +
//                 users[employeeType][index].firstName.toUpperCase() +
//                 ' - ' +
//                 (users[employeeType][index].firstName.length +
//                   users[employeeType][index].lastName.length)
//             );
//           }
//         }
      
//         console.log('finished basic');
//       }
      
//       printUsersBasic(users);
      
//       function printUsersIntermediate(users) {
//         for (const employeeType in users) {
//           console.log(employeeType.toUpperCase());
      
//           for (const [index, user] of users[employeeType].entries()) {
//             const firstName = user.firstName.toUpperCase();
//             const lastName = user.lastName.toUpperCase();
//             const length = firstName.length + lastName.length;
      
//             console.log(`${index + 1} - ${lastName}, ${firstName} - ${length}`);
//           }
//         }
      
//         console.log('finished intermediate');
//       }
      
//       printUsersIntermediate(users);
      
//       // be aware this is purposefully and unnecessiarily complex
//       function printUsersAdvanced(users) {
//         Object.keys(users)
//           .map(employeeType => {
//             return employeeTypes(employeeType, users[employeeType]);
//           })
//           .forEach(callback => callback());
      
//         console.log('finished advanced');
//       }
      
//       function employeeTypes(type, employees) {
//         return function() {
//           console.log(type.toUpperCase());
      
//           employees.forEach(printEmployee);
//         };
//       }
      
//       function printEmployee(user, index) {
//         const { firstName, lastName } = upcaseValues(user);
//         const length = add(firstName.length, lastName.length);
//         console.log(`${index + 1} - ${lastName}, ${firstName} - ${length}`);
//       }
      
//       function upcaseValues(object) {
//         return Object.entries(object).reduce((memo, [key, value]) => {
//           return {
//             ...memo,
//             [key]: value.toUpperCase(),
//           };
//         }, Object.create(null));
//       }
      
//       function add(num1, num2) {
//         return num1 + num2;
//       }
      
//       printUsersAdvanced(users);