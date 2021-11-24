//array
const cars = ["Toyota", "Kubota", "Mazda"];
const planes = [];
planes[4] = "F16";
planes[1] = "Boing 747";
console.log(cars);
console.log(planes);
const cities = new Array("Buriram", 31000);
console.log(cities[1]);

/// Array Method
let Acar = cars.pop();
console.log(Acar);
cars.push("Honda");
console.log(Acar);
cars.shift();
console.log(Acar);
cars.unshift("Tata");
console.log(Acar);

const jpCars = cars.slice(1, 3);
console.log(jpCars);
cars.splice(1, 1, "Subaru", "Lexus");
console.log(cars);

const mixArr = cars.concat(planes);
console.log(mixString);
const mixString = mixArr.toString();
console.log(mixString);

//ตรวจสอบค่า Array
for (let value of mixArr) {
  console.log(value);
}

console.log(mixArr.length);
for (let index of mixArr.keys()) {
  console.log(index);
}

//เพิ่มค่า Array
let text = "";
mixArr.forEach(conString);
console.log(text);

function conString(value, index, array) {
  text += value + "<br>";
}

//เพิ่มค่าตัวเลขและตรวจสอบ
const numbs = [10, 20, 15, 5, 2];
const numb2 = numbs.map(multi2);

function multi2(value, index, array) {
  return value * 3;
}

const over10 = numb2.filter(over19fn);

function over10fn(value) {
  return value > 15;
}

let sum = numbs.reduce(addNumbs);
console.log(sum);

function addNumbs(total, value) {
  return total + value;
}

let over10 = numbs.every(over10fn);
console.log(over10);

function over10fn(value) {
  return value > 10;
}

let someOver10 = numbs.some(over10fn);
console.log(somOver10);

let first = numbs.find(over10fn);
console.log(first);

let firstIndex = numbs.findIndex(over10fn);
console.log(firstIndex);

const alphabet = "ABCDEF";
let arrAlph = Array.from(alphabet);
console.log(arrAlph);
