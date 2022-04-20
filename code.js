// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(input === undefined) {
        return "Hello, World!";
    } else if( typeof input == 'boolean'){
        return "Hello, World!";
    }
    else if( typeof input == 'number'){
        return "Hello, number";
    }
    else if( input == null){
        return "Hello, null";
    }
    else if( input == ''){
        return "Hello, blank";
    }
    else if( typeof input !== 'string'){
        return "Hello, unknown";
    }
    else {
        return 'Hello, '+ input +'!';
    }
}

function isFive(input){
    if (input ===5){
        return true;
    }
    return false;
}

function isEven(input){
    if(!isNaN(parseFloat(input))){
        return input%2 === 0;
    }
    return false;
}

