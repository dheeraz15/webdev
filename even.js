// let number = prompt("Enter a number:");
// if (number % 2 === 0) {
//     console.log(`${number} is even.`);
// } else {
//     console.log(`${number} is odd.`);
// }


// day = "Sunday";


// let x = '5';
// if (x === 5) {
//     console.log("Inside if");
// }

// if (month == "September" || day == "Sunday" ){
// console.log ("Class Day");
// }
// else {
// console.log ("The class is off!")
// }

let day1 = prompt("Enter a day: ");
let day = day1.toLowerCase();
if(day == "saturday") {
    console.log("Holiday");
}
else if (day == "sunday" || day == "wednesday") {
    console.log("Web Dev Class Day");
}
else {
    console.log("other class");
}



for (let i=2; i<=10; i++) {
    if (i % 2 == 0){
        output = i
    }
    console.log(`2 * ${i} = ${output}`);
}