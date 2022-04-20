// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(input === undefined) {
        return "Hello, World!";
    } else if( typeof input == 'boolean'){
        return "Hello, World!";
    } else if( typeof input !== 'string'){
        return "Hello, unknown";
    }
    else {
        return 'Hello, '+ input +'!';
    }
}

