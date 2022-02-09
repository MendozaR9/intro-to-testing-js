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

//Test for sayHello function
describe("sayHello", function (){
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });

    it("should return a string when called", function (){
       expect(typeof sayHello()).toBe("string");
    });

    it('should return a string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return a string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return a string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    it('should return a string "Hello, World!" when executed', function (){
        expect(sayHello(true)).toBe("Hello, World!");
    });

    it('should return a string "Hello, World!" when input is true', function (){
        expect(sayHello(false)).toBe("Hello, World!");
    });

    it('should return a string "Hello, World!" when input is false', function (){
        expect(sayHello()).toBe("Hello, World!");
    });
})

//Test a function called isFive
describe("isFive", function (){
   it("it should be a define function", function (){
       expect(typeof isFive).toBe("function");
   });

    it('it should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });

    it('it should return True if number is 5 ', function () {
        expect(isFive(5)).toBe(true);
    });

    it('it should return False if number is not 5', function () {
        expect(isFive(3)).toBe(false);

    });

    it("should return True if string of '5' is 5", function () {
        expect(isFive("5")).toBe(true);
    });
});

//Test a function isEven
describe("isEven", function (){
   it("it should be define function", function (){
       expect(typeof isEven).toBe("function" );
   });

    it('should should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });

    it('should return True for 2', function () {
        expect(isEven(2)).toBe(true);
    });

    it('should return True for -4', function () {
        expect(isEven(-4)).toBe(true);
    });

    it("should return False for 3", function (){
        expect(isEven(3)).toBe(false);
    })

    it('should return False for "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });

    it('should return true if string of "8" is even', function () {
        expect(isEven("8")).toBe(true);
    });

    it('should return false for Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });

    it('should return false if input is true', function () {
        expect(isEven(true)).toBe(false);
    });

    it('should return false if input is false', function () {
        expect(isEven(false)).toBe(false);
    });

    it('should return false if undefine', function () {
        expect(isEven()).toBe(false);
    });
});

//Test isVowel function
describe("isVowel", function (){
    it('should be define a function', function () {
        expect(typeof isVowel).toBe("function");
    });

    it('should should return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });

    it('should return true for "a"', function () {
        expect(isVowel("a")).toBe(true);
    });

    it('should return true for "A"', function () {
        expect(isVowel("A")).toBe(true);
    });

    it('should return false for "y"', function (){
        expect(isVowel("y")).toBe(false);
    })

    it('should return false for 4', function () {
        expect(isVowel(4)).toBe(false);
    });

    it('should return false if input is true', function () {
        expect(isVowel(true)).toBe(false);
    });

    it('should return false if input is false', function () {
        expect(isVowel(false)).toBe(false);
    });

    it('should return false for "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });

    it('should return false for undefine', function () {
        expect(isVowel()).toBe(false);
    });
})

//Test function add
describe("add", function (){
    it('should be define a function', function () {
        expect(typeof add).toBe("function");
    });

    it('should add 2 + 3 and return 5', function () {
        expect(add(2,3)).toBe(5);
    });

    it('should add -3 + -9 and return -12', function () {
        expect(add(-3,-9)).toBe(-12);
    });

    it('should add "5" + 6 and return 11', function () {
        expect(add("5", 6)).toBe(11);
    });

    it('should add "-4" + "10" and return 6', function () {
        expect(add("-4", "10")).toBe(6);
    });

    it('should add "banana" + "split" and return NaN', function () {
        expect(add("banana", "split")).toBe(isNaN());
    });

    it('should add 2 + "apples" and return NaN', function () {
        expect(add(2, "apple")).toBe(isNaN());
    });

    it('If no argument is passed it should return NaN', function () {
        expect(add()).toBe(isNaN());
    });
})