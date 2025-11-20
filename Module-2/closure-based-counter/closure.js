function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log("Current count:", count);
        },

        decrement: function() {
            count--;
            console.log("Current count:", count);
        },

        getCount: function() {
            console.log("Current count:", count);
        }
    };
}
console.log("=== Counter Example ===");
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log("=== Multiple Counters Example ===");
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();

counter2.increment();
counter2.decrement();