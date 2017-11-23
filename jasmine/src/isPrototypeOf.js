/*!
 * "The Beasts of Watch And Code"
 * isPrototypeOf v0.0.1
 * Copyright 2017 whitefires0 / Rick Hallett
 *
 * Freely distributable under the creative commons license.
 *
 * Full details and documentation:
 * http://
 */
//===============================================================================================================
	/* --- Project Specification --- */
//===============================================================================================================

/*In AccountingJS 8 and 9, you learned about JavaScript's prototype system. This challenge builds on those videos.

Write a function, isPrototypeOf, that works just like Object.prototype.isPrototypeOf. Since your solution will be called as a function rather than a method, the way you use it will be slightly different, but the outcome should be the same.

Obviously, don't use Object.prototype.isPrototypeOf in your solution, but feel free to use other methods on Object.prototype.

var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);

// These two lines are equivalent.
dog.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(dog, myDog); // your function does the same

// These two lines, similarly should return the same thing.
dog.isPrototypeOf(empty);  // native function returns false
isPrototypeOf(dog, empty); // your function does the same

// This should work too.
Object.prototype.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(Object.prototype, myDog); // your function does the same

// Also make sure that your function will work for any number of prototype links.
isPrototypeOf(canine, myDog) // true
As usual, post your solutions below and good luck! And write tests first!*/
    
    
//=============================================================================================================
    /* --- Project Implementation --- */
//=============================================================================================================

/*
Notes/ideas
0) Rewatch Gordons videos. Read up documentation on prototypes. Make notes. This is exposing brain to more information prior to the attempt
1) Write tests first
2) Sketch out all ideas
3) Above all, do not attempt problem/solution precognition - methodically try out any potential solutions and progressively refine. As soon as walls are hit, look to documentation/code for options.
4) Don't be afraid to implement other aspects of solutions - understanding is the most important thing

- use __proto__ (substitute for getPrototypeOf - not fully supported) as a property to access passed in object.prototype by name
- new, function.prototype

- Point where I fist got stuck: wondering how to check existance of prototype when length of prototype link is unknown
    e.g. myDog.__proto__.__proto__ === canine
*/

//test 1 = dog, myDog
function isPrototypeOf(testedPrototype, testedObject) {

    if(Object.prototype === testedObject.__proto__.__proto__.__proto__) {
        return true;
    }
   
    if(testedPrototype === testedObject.__proto__) {
        return true;
    } else {
        return false;
    }
};
