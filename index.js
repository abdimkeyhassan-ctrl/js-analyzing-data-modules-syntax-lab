// Import datejs (already included in package.json)
require('datejs');

// combineUsers function
function combineUsers(...args) {
    // Step 2: Initialize return object
    const combinedObject = {
        users: []
    };

    // Step 3 & 4: Loop through args and merge arrays using the spread operator
    for (let arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    // Step 5: Get today's date and format it (M/d/yyyy)
    const today = new Date();
    combinedObject.merge_date = today.toString("M/d/yyyy");

    // Step 7: Return the final object
    return combinedObject;
}

// Example usage (optional)
const result = combineUsers(
    ["john", "sarah"],
    ["mike", "anna"],
    ["xavi", "leo"]
);

console.log(result);



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};