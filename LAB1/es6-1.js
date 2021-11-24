var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10

var x = 10;
//Here x is 10
{
    const x = 2;
    //Here x is 2
}
//Here x is 10

//ES5
var x = function (x, y) {
    return x * y;
};

//ES6
const x = (x, y) => x * y;

const cars = ["Saab", "Volvo", "BMW"];
const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
const cars = new Array("Volvo","BMW");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruits = fruits.pop();
fruits.push("Kiwi");
fruits.shift();
fruits.unshift("Lemon");

const citrus = fruits.slice(1, 3);
fruits.splice(2, 0, "Lemon", "Kiwi");
