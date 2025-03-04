// UC-1: Check Employee Presence

const IS_PRESENT = 1; // Constant to represent presence
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}


// UC-4: Calculate Monthly Employee Wage (Assuming 20 Working Days)
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;

/*let empHours = 0;
let empCheck2 = Math.floor(Math.random() * 3); // Generates 0, 1, or 2*/

function getWorkHours(employeeCheck) {
switch (employeeCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
     
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
        
    default:
       return 0;
}
}
let totalWorkHours = 0;

// Loop through 20 working days
for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
    let employeeCheck = Math.floor(Math.random() * 3);
    totalWorkHours += getWorkHours(employeeCheck);
}
// Calculate total wage for the month
let monthlyWage = totalWorkHours * WAGE_PER_HOUR;
// Generate Employee Type (0 - Absent, 1 - Part-time, 2 - Full-time)
let employeeCheck = Math.floor(Math.random() * 3);
let empHours = getWorkHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log(`Total work hours in a month: ${totalWorkHours}`);
console.log(`Total monthly wage: $${monthlyWage}`);
console.log(`Employee worked for ${empHours} hours and earned $${empWage} today.`);

