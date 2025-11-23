//Q1. SPREAD OPERATOR(ARRAY)
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let arr3 = [...arr1, ...arr2];
console.log("Q1:", arr3);

//Q2. SPREAD OPERATOR(OBJECT)
let person = { name: 'Bhavya', age: 22 };
let extra = { city: 'Benguluru', role: 'Engineer' };
let newPerson = {...person, ...extra };
console.log("Q2:", newPerson);

//Q3.REST OPERATOR(FUNCTION PARAMETERS)
function sumAll(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Q3:", sumAll(1, 2, 3, 4));

//Q4.REST OPERATOR (ARRAY DESTRUCTING)
let numbers = [10, 20, 30, 40, 50];
let [first, second, ...remaining] = numbers;
console.log("Q4.", first, second, remaining);

//Q5.NESTED OBJECT DESTRUCTURING
let user = {
    name: "Bhavya",
    address: {
        city: "Hyderabad",
        Pin: 500001,
        geo: { lat: 11.22, lng: 77.33 }
    }
};
let {
    address: {
        city,
        geo: { lat, lng }
    }
} = user;
console.log("Q5:", city, lat, lng);

//Q6.ARROW FUNCTION
let multiply = (a, b) => a * b;
console.log("Q6:", multiply(5, 6));

//Q7. OPTIONAL CHAINING
let emp = {
    name: "Bhavya",
    details: {
        department: "IT",
        profile: { role: "Developer" }
    }
};
let role = emp ? .details ? .profile ? .role;
console.log("Q7:", role);