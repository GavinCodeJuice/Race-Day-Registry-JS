let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age= 25;

if(early && age > 18){
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Your race will begin at 9:30 am, your Race number is: ${raceNumber}`)
}
else if (!early && age > 18 ) {
    console.log(`Your race will begin at 11:00 AM, your Race number is: ${raceNumber}.`)
  }
  else if (age < 18){
    console.log(`Your race will begin at 12:30 PM, your Race number is: ${raceNumber}.`)
  }
  else {
    console.log('Please approach the Registration Desk, Thank you');
  }