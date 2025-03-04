// UC-1: Check Employee Presence

const IS_PRESENT = 1; // Constant to represent presence
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC-2: Calculate Daily Employee Wage

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;
let empCheck2 = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

switch (empCheck) {
    case IS_PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log(`Employee worked for ${empHours} hours and earned $${empWage} today.`);

