//Primitve DataType and Non-Primitive DataType
//Call by value
//Call by reference

//#Primitive
// 7 TYPES= String, Number , Boolean, Null(Empty) , Undefined, Symbol(Unique),Bigint(Scientific Value)


// Reference Type(Non-Primitve)
//Types= Array, Objects, funtions

//JavaScript is Dynamically Typed Language This means that variable types are
//  determined at runtime,
//  and you do not need to explicitly declare the type
//  of a variable before using it. You can assign different types of values 
// to a variable during its lifetime.


const Fruits= ["Apple","Banana","Mango"]//array

let myObj={    //Objects
    name:"Yogesh",
    age: 21,
}

const myFunction=function(){      //Funtion
    console.log("Hello World!!");
}
 
const zero = null
console.log(typeof zero);


// DataTypes of the null is always OBJECT
// Bigint last ma n hunxa 
const Bigint= 100000000n

// There are 2 types of datatype
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )


// Stack and Heap memory in javascript
//stack(primitvie) and Heap(non-primitive)

// Primitive Types:
// 1. Stored in stack.

// 2. Passed or assigned by value (call by value).

// 3. Changes to copies don't affect the original.


// Reference Types:

// 1. Stored in heap; accessed via references (stored in stack).

// 2. Changing the value through another reference affects the original.
