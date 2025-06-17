const boysName =["Ram","Shyam","Hari"]
const girlsName=["Sita","Gita","Radha"]

// boysName.push(girlsName)


// const allName= boysName.concat(girlsName)
// console.log(allName);

//Spread
const allName = [...boysName,...girlsName]
console.log(allName);


const newArray =[1,2,3,[4,5,6],7,[1,2[3,4,5[6,7]]]]
const usuableArray = newArray.flat(Infinity)

console.log(usuableArray);




console.log(Array.isArray("Yogesh"))
console.log(Array.from("Yogesh"))
console.log(Array.from({name:"Yogesh"}))  //Interesting




let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1 ,score2 ,score3));
