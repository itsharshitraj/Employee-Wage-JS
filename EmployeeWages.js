// UC-1: Check Employee Presence

const IS_PRESENT = 1; // Constant to represent presence
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
