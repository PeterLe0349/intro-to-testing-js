// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello',function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World! when executed with no input', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello,World! when input is true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello,World! when input is false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean with any input', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return a boolean true with input 5', function() {
        expect(isFive(5)).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean with any input', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true with input 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true with input -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return  false with input 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false with input banana', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true with input "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false with input infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false with a boolean', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false with a boolean', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false with undefined', function() {
        expect(isEven(undefined)).toBe(false);
    });
})

describe('isVowel', function(){
    it('should be a defined function', function() {
       expect(typeof isVowel).toBe('function') ;
    });
    it('should return a boolean with any input', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should be true with input "a"', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should be false with input "y"', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should be false with input 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should be false with input true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should be false with input false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should be false with input "banana"', function() {
        expect(isVowel('banana')).toBe(false);
    });
    it('should be false with input ""', function() {
        expect(isVowel('')).toBe(false);
    });
    it('should be false with input undefined', function() {
        expect(isVowel()).toBe(false);
    });
})

