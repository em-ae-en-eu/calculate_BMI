

let weight = parseFloat(prompt('Enter your weight in KG'));
let height = parseInt(prompt('Enter your height in cm'));


let heightInMeter = height / 100;

function calculate_BMI() {
    //bmi = weight in kg / height x height

    let bmi = weight / (heightInMeter*heightInMeter);
    console.log('Your BMI is ' + bmi);


    /*
    Below 18.5 — Underweight
    18.5 – 24.9 — Normal
    25 – 29.9 — Overweight
    30 and above — Obese */

    if(bmi < 18.5){
        console.log('might wanna increase calory intake');
    }else if(bmi < 24.9){
        console.log(' WEIGHT IS NORMAL'); 
    }else if(bmi < 29.9){
        console.log("YOU'RE FAT"); 
    }else {
        console.log('Eat a Salad bruh'); 
    }

}

calculate_BMI();



// loop that asked user to enter number greater than 100. 


let num;

while(true){

    num =  prompt("Enter a number greater than 100");

    if(num === null || num === ''){
        console.log("Try again"); break;
    }else if(num >100){
        console.log('The number is greater than 100'); break;
    }else{
        console.log('Try again');
    }

}


