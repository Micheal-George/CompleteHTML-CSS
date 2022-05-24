//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scope=[{
    point1:"Scope in JavaScript refers to the accessibility or visibility of variables. ",
    point2:"Global scope- variables that you declare outside of functions to the global execution context. ",
    point3:"Local scope-Variables that you declare inside a function are local to that function. ",
    point4:"Block scope-Variables that you declare inside a block {} using let or const are limited only to that block.",
    point5:"A variable declared outside a function, becomes GLOBAL."
},
]
localStorage.setItem("scope",JSON.stringify(scope))

var hoisting=[{
    point1:"Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.",
    point2:"There are wo type of hoisting",
    point3:"Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script.",
    point4:"In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.",
    point5:"Function Hoisting-A function can be called before declaring it."
}]
localStorage.setItem("hoisting",JSON.stringify(hoisting))

var constructor_functions=[{
    point1:" for creating many objects of the same type.The way to create an object type, is to use an object constructor function.",
    point2:"Objects of the same type are created by calling the constructor function with the new keyword",
    point3:"this keyword refers to an object",
    point4:"In a function, this refers to the global object",
    point5:"In a function, in strict mode, this is undefined"
}]
localStorage.setItem("constructor_functions",JSON.stringify(constructor_functions))

var prototype=[{
    point1:"A blueprint",
    point2:"An original object from which a new object is created",
    point3:" inheritance is the concept of one thing gaining the properties or behaviors of something else",
    point4:"Prototype method available on the constructor function",
    point5:"Everything in Js is object"
}]
localStorage.setItem("prototype",JSON.stringify(prototype))

    localStorage.setItem("cart",JSON.stringify(cartData))