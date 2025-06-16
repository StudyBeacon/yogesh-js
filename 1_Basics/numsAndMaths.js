// const name = "Nimesh"
// const sex = 'Male'

// console.log(`Hey my name is ${name} and my sex is ${sex}`);


const score=400

const bankBalance = new Number(10000)

// console.log(`Current Bank balance is Rs.${bankBalance}`);
console.log(bankBalance);

console.log(bankBalance.toString().length);
console.log(bankBalance.toFixed(3));

const otherNumber = 100.899
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-10));

console.log(Math.round(4.4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));//Highest Value if 4.2 then it consider 5
console.log(Math.floor(4.4));//Lowest Value if 4.4 then it consider 4 only

console.log(Math.min(1,9,5,6,7));
console.log(Math.max(1,9,5,6,7));

console.log(Math.random())//Gives Values between 0.1-1
console.log(Math.floor(Math.random()*10) +1);//using floor gives us lowest value byroundoff ex if 0.1 occur then using floor() 
                                            // it may gives us value 0 so
                                            // and  math.random gen value from 0.1-1 then *10 gives us values which may form 1-10 and 
                                            // add 1 because sometime may get value below 1 so adding 1 gives us value form 1-10.


const min =10
const max =20
console.log();
console.log(Math.floor(Math.random()*(max-min + 1))+min)//Here we used max-min so that our value only occur between the maximum and minimum
                                                       //value we actully want.
                                                       // And we used floor to avoid 0 value occur because floor roundoff the lowest value
                                                       // that means if values like 0.1,0.2 occur it gives us 0 value so we used +1 to avoid that problem
                                                       //and at last we added min value because we want our value to place in exact range we want
                                                       // if dont our min value is 10 and sometime our value might come between 1-10 which we dont
                                                       //want

