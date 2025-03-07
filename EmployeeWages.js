
// UC-7: Perform Various Operations Using Array Helper Functions

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
let dailyWageMap = new Map(); // Store day-wise wage

// Loop until max working days (20) or max work hours (160) is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(employeeCheck);
    totalWorkHours += workHours;

    let dailyWage = calculateDailyWage(workHours);
    dailyWageArray.push(dailyWage); // Store daily wage in array
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store day-wise wage in map
}


// a. Calculate Total Wage using reduce
let totalWage = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log(`Total Wage using reduce: $${totalWage}`);

// b. Show Day along with Daily Wage using map
let dailyWageWithDay = Array.from(dailyWageMap.entries()).map(([day, wage]) => `Day ${day}: $${wage}`);
console.log("Daily Wage with Day:", dailyWageWithDay.join(" | "));

// c. Show Days when Full-Time Wage (160) was earned using filter
let fullTimeWageDays = Array.from(dailyWageMap.entries())
    .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(([day, wage]) => `Day ${day}`);
console.log("Days when Full Time Wage was earned:", fullTimeWageDays.join(", "));

// d. Find First Occurrence of Full-Time Wage using find
let firstFullTimeWageDay = Array.from(dailyWageMap.entries())
    .find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`First occurrence of Full-Time Wage: Day ${firstFullTimeWageDay[0]}`);

// e. Check if Every Element of Full-Time Wage Array is truly holding Full-Time Wage using every
let isEveryFullTimeWage = fullTimeWageDays.every(day => dailyWageMap.get(parseInt(day.split(" ")[1])) === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Does every Full-Time Wage Entry hold the correct wage? ${isEveryFullTimeWage}`);

// f. Check if there is any Part-Time Wage using some
let hasPartTimeWage = dailyWageArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Is there any Part-Time Wage? ${hasPartTimeWage}`);

// g. Find the number of days the Employee Worked using filter
let numOfDaysWorked = Array.from(dailyWageMap.values()).filter(wage => wage > 0).length;
console.log(`Total Number of Days Employee Worked: ${numOfDaysWorked}`);




