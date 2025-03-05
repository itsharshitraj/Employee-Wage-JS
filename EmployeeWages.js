
// UC-6: Store Daily Wage Along with Total Wage in an Array

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HOURS = 160;


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

 // Function to calculate daily wage.
 function calculateDailyWage(workHours) {
    return workHours * WAGE_PER_HOUR;
}

let totalWorkHours = 0;
let totalWorkingDays = 0;
let dailyWageArray = [];

// Loop until max working days (20) or max work hours (160) is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 3);
    totalWorkHours += getWorkHours(employeeCheck);
    let workHours = getWorkHours(employeeCheck);
    totalWorkHours += workHours;

    let dailyWage = calculateDailyWage(workHours);
    dailyWageArray.push(dailyWage); // Store daily wage in array
}


// Calculate total wage for the month

let totalMonthlyWage = totalWorkHours * WAGE_PER_HOUR;


console.log(`Total working days: ${totalWorkingDays}`);
console.log(`Total work hours: ${totalWorkHours}`);
console.log(`Total monthly wage: $${totalMonthlyWage}`);
console.log(`Daily Wages: ${dailyWageArray.join(", ")}`);