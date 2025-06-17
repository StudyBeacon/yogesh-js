// const tinderUser = new Object() this is singleton object
const tinderUser = {}//this is non singleton objects

tinderUser.id ="123abc"
tinderUser.name ="Yogesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser ={
    email: "yogesh@youtube.com",
    fullname:{
        userfullname:{
            firstname:"Yogesh",
            lastname:"Rai"
        }
        
    },
    Address:{
        UserAddress:{
            address1:"Damak",
            address2:"Dharan",
        }
    }
    
};

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.Address.UserAddress.address1);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
