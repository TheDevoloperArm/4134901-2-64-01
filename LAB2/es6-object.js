let person = {
    firstName : "Arm",
    lastName : "Sidamat",
    age : 22,
    sex : "male",

    fullname : function () {
        return this.firstName + " " + this.lastName;
    },
};
console.log(person);

const p = person;
p.age = 10;
console.log(p);

person.age = 20;
console.log(person.age); //value
console.log(person.fullname); //property
console.log(person.fullname()); //return

//destructuring
const { firstName, lastName, age, sex} = person;
console.log(firstName);
console.log(s);

//string
const S1 = "Hello World !!";
const S2 = "My Name is ";
const Rname = "Arm";
let conCat = S1 + S2 + Rname;
console.log(conCat);
//`backtick
conCat =  ` i
            love
            it. ${S2} ${Rname}
        `;
console.log(conCat);

//spread Op (...)
const A1 = [2, 3, 4];
const A2 = [5, 6, 7];
let comArr = [A1, A2];
console.log(comArr);

comArr = [...A1, ...A2];
console.log(comArr);

sum = (...nubers) => {
    let total = 0;
    for (value of nubers) total += value;
    return total;
};

console.log(sum(comArr));