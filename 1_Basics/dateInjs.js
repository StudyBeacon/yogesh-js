//Dates
let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let createdDate = new Date(2003,5,23,5,3)
// let createdDate = new Date(2003,5,25,5,3)
// let createdDate = new Date("2023-05-04")
let createdDate = new Date("01-02-3456")
// console.log(createdDate);
// console.log(createdDate.toString());
console.log(createdDate.toLocaleString());


let timeStamp = Date.now()


// console.log(timeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})