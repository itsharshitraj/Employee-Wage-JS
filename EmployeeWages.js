
// UC-9: Use Daily Wage Map & Daily Hour Map with Arrow Functions

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
};

 // Function to calculate daily wage.

 const calculateDailyWage = (workHours) => workHours * WAGE_PER_HOUR;

let totalWorkHours = 0;
let totalWorkingDays = 0;
let dailyWageMap = new Map(); // Map to store day-wise wage
let dailyHourMap = new Map(); // Map to store day-wise work hours

// Loop until max working days (20) or max work hours (160) is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(employeeCheck);
    totalWorkHours += workHours;

    let dailyWage = calculateDailyWage(workHours);
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store day-wise wage in map
    dailyHourMap.set(totalWorkingDays, workHours);
}

// (a) Calculate Total Wage and Total Hours Worked using Arrow Functions
let totalWageFromMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
let totalHoursFromMap = Array.from(dailyHourMap.values()).reduce((total, hours) => total + hours, 0);
console.log(`Total Hours Worked: ${totalHoursFromMap}, Total Wage: $${totalWageFromMap}`);

// (b) Show Full Working Days, Part Working Days, and No Working Days using Arrow Functions
let fullWorkingDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => `Day ${day}`);
let partWorkingDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => `Day ${day}`);
let noWorkingDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === 0).map(([day]) => `Day ${day}`);

console.log("Full Working Days:", fullWorkingDays.join(", "));
console.log("Part Working Days:", partWorkingDays.join(", "));
console.log("No Working Days:", noWorkingDays.join(", "));