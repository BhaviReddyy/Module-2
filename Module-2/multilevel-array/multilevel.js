function formatAddresses(peopleArray) {
    return peopleArray.map((

        {
            name,
            address: {
                city,
                street: {
                    name: streetName
                }
            }
        }
    ) => {

        return `${name} lives in ${city} on ${streetName}`;
    });
}

// Example Input Data
const people = [{
        name: "Alice",
        address: {
            city: "New York",
            street: {
                name: "Broadway",
                number: 123
            }
        }
    },
    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 456
            }
        }
    }
];


const result = formatAddresses(people);

console.log("Formatted Output using Multi-Level Destructuring:");
console.log(result);