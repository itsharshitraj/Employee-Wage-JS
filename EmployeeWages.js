
// UC-11: Perform Object Operations Using Arrow Functions
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
let employeeDailyData = []; // Array to store objects with day, hours worked, and wage earned

// Loop until max working days (20) or max work hours (160) is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(employeeCheck);
    totalWorkHours += workHours;

    let dailyWage = calculateDailyWage(workHours);

    // Store details in an object and push to array
    employeeDailyData.push({
        day: totalWorkingDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });
}


// (a) Calculate Total Wage and Total Hours Worked using Arrow Functions
let totalWage = employeeDailyData.reduce((total, dayData) => total + dayData.wageEarned, 0);
let totalHours = employeeDailyData.reduce((total, dayData) => total + dayData.hoursWorked, 0);
console.log(`Total Hours Worked: ${totalHours}, Total Wage: $${totalWage}`);

// (b) Show Full Working Days using forEach
console.log("Full Working Days:");
employeeDailyData.forEach(dayData => {
    if (dayData.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${dayData.day}`);
    }
});

// (c) Show Part Working Days using Map (Reducing to String Array)
let partWorkingDays = employeeDailyData
    .filter(dayData => dayData.hoursWorked === PART_TIME_HOURS)
    .map(dayData => `Day ${dayData.day}`);
console.log("Part Working Days:", partWorkingDays.join(", "));

// (d) Show No Working Days using Map
let noWorkingDays = employeeDailyData
    .filter(dayData => dayData.hoursWorked === 0)
    .map(dayData => `Day ${dayData.day}`);
console.log("No Working Days:", noWorkingDays.join(", "));