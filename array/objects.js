//Singleton


// Object.create={}


//Objects Literal
const jsuser= {
    name:"yogesh",
    "fullname":"Yogesh Rai",
    age:21,
    location:"Dharan",
    email: "yogeshrai@google.com", 
    isLoggedIn:false,
    lastLoginDays: ["Monday","Tuesday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])

console.log(jsuser.name);
console.log(jsuser["fullname"]);


jsuser.email = "yogesh@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email= "yogesh@tiktok.com"

console.log(jsuser);


jsuser.greeting = function(){
    console.log("Hello JS user");
    
}
jsuser.greeting2 = function(){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());

