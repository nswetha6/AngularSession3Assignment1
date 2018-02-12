// Problem statement :

// Create a Class with name ‘Greeter’ in the greeter.ts and define Constructor and one
// ‘greet()’ method which will return some greeting message, then create a
// greeter.html, add compiled file into this HTML like(greeter.js). The output should
// display as greeting message.

class Greeter{
    constructor(public message:string){
        this.message=message;
       
        console.log("inside constructor  -->"+this.message);
    }
    greet() {
    console.log("inside greet method");
        return "greeting message from greet method";
       
    }
}

var g1= new Greeter("Greeting message");

var y = g1.greet();
console.log(y);
document.getElementById("greetId").innerHTML= y;


