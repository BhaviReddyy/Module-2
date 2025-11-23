//Q8. INBUILT HOF
let nums = [10, 3, 7, 20, 13, 21];
let squares = nums.map(num => num * num);
console.log("squares:", squares);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let primes = nums.filter(isPrime);
console.log("Prime numbers", primes);
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("sum:", sum);
let descending = [...nums].sort((a, b) => b - a);
console.log("Descending:", descending);

//Q9.CALLBACK FUNCTION
function displayCar() {
    console.log("This is a car");
}

function displayTruck() {
    console.log("This is a Truck")
}

function displayBike() {
    console.log("This is a Bike")
}

function vehicleInfo(vehicleCategory, callbackFn) {
    console.log("vehicle category:", vehiclecategory);
    callbackFn();
}
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);