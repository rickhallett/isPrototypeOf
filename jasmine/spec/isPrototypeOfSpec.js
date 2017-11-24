describe('Project isPrototypeOf Tests', function() {

//===============================================================================================================
/* --- Test Setup --- */
//===============================================================================================================

//setup beforeEach variables for global access
var canine, dog, myDog, empty;

//before each test, create prototype chain:  Object.prototype -> canine -> dog -> myDog
beforeEach(function() {
  canine = {
    bark: function() {
      console.log('bark');
    }
  };
  
  dog = Object.create(canine);
  dog.fetch = function() {
    console.log('fetch');
  };
  
  myDog = Object.create(dog);
  empty = Object.create(null);
});

//===============================================================================================================
/* --- Tests --- */
//===============================================================================================================

  it('It should return true if prototypeObject is in the prototype chain of testObject.', function(){
    // These two lines are equivalent.
    var nativeReturnsTrue = dog.isPrototypeOf(myDog);  // native function returns true
    var testedReturnsTrue = isPrototypeOf(dog, myDog);

    expect(nativeReturnsTrue).toBe(testedReturnsTrue);
  });

  it('It should return false if prototypeObject is not in the prototype chain of testObject.', function(){
    // These two lines, similarly should return the same thing.
    var nativeReturnsFalse = dog.isPrototypeOf(empty);  // native function returns false
    var testedReturnsFalse = isPrototypeOf(dog, empty);

    expect(nativeReturnsFalse).toBe(testedReturnsFalse);
  });

  it('Returns true when checking for the presence of the default prototype object (Object.prototype)', function(){
    // This should work too.
    var nativeReturnsTrue = Object.prototype.isPrototypeOf(myDog);  // native function returns true
    var testedReturnsTrue = isPrototypeOf(Object.prototype, myDog);
    
    expect(nativeReturnsTrue).toBe(testedReturnsTrue);
  });

  it('Returns true for any number of valid prototype links', function(){
    var nativeReturnsTrue = canine.isPrototypeOf(myDog);
    var testedReturnsTrue = isPrototypeOf(canine, myDog);

    expect(nativeReturnsTrue).toBe(testedReturnsTrue);
  });

  it('It should throw TypeError if prototypeObject or testObject is undefined or null', function() {
    try {
      isPrototypeOf(null, empty);
    } catch (e) {
      expect(e instanceof TypeError).toBeTruthy();
    }

    try {
      isPrototypeOf(null, empty);
    } catch (e) {
      expect(e instanceof TypeError).toBeTruthy();
    }

    
  });

});