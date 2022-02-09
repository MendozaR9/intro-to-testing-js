// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function
function sayHello(name){
   if (typeof name !== "string" || !isNaN(name)){
       return "Hello, World!";
   } else{
        return "Hello, " + name +"!";
    }

}

//isFive function
function  isFive(number){
    return number == 5;
}

//isEven function
function isEven(number){
    return parseInt(number) % 2 === 0;
}

//isVowel function
function isVowel(vowel){
    return vowel === "a" || vowel === "A";
}

//add function
function add(num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        return isNaN();
    }else{
    return parseInt(num1) + parseInt(num2);
    }
}