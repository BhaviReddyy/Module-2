function mergeProfile(profile, updates) {
    const mergedProfile = {
        ...profile,
        ...updates,
        address: {
            ...profile.address,
            ...updates.address
        }
    };

    return mergedProfile;
}
const profile = {
    name: "Charlie",
    age: 29,
    address: {
        city: "San Francisco",
        zipcode: "94101"
    }
};

const updates = {
    age: 30,
    address: {
        zipcode: "94109",
        country: "USA"
    }
};
const mergedResult = mergeProfile(profile, updates);

console.log("Original Profile:", profile);
console.log("Updates:", updates);
console.log("\nMerged Result:");
console.log(mergedResult);
console.log("\nVerification:");
console.log(`Name: ${mergedResult.name}`);
console.log(`Age: ${mergedResult.age}`);
console.log(`City: ${mergedResult.address.city}`);
console.log(`Zipcode: ${mergedResult.address.zipcode}`);
console.log(`Country: ${mergedResult.address.country}`);