const username = "User";
const course = "Web Development";

console.log(`Hello ${username}, welcome to the ${course}!`);

const name = "Sam";
const age = 21;

const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

console.log(student);
student.greet();

const getFullName = (first, last) => `${first} ${last}`;

const fullName = getFullName("Bhavya", "Reddy");
console.log(`Full Name: ${fullName}`);