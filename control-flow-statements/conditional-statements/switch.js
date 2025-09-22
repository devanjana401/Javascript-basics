//useful when comparing a single value against multiple exact matches
let day ="tuesday"
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Regular day");
        
        break;
}