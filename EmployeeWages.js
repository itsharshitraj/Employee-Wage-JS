
// UC-8: Store Day-Wise Wage Using a Map and Compute Total Wage

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours based on employee type.
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
let dailyWageMap = new Map(); // Map to store day-wise wage

// Loop until max working days (20) or max work hours (160) is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(employeeCheck);
    totalWorkHours += workHours;

    let dailyWage = calculateDailyWage(workHours);
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store day-wise wage in map
}

// Compute total wage using Map
let totalWageFromMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);

console.log("Day-wise Wage:", dailyWageMap);
console.log(`Total Wage computed from Map: $${totalWageFromMap}`);