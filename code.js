// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function
function sayHello(name){
    if (name === true){
        return "Hello, World!";
    }else if (name === false){
      return "Hello, World!";
    }else  if( name === undefined){
        return "Hello, World!"
    }
    else{
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