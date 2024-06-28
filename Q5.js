function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000); // Simulating fetching data with a delay of 1 second
    });
}
function processData(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Processed data: ".concat(data));
        }, 500); // Simulating processing data with a delay of 0.5 seconds
    });
}
function executeSequentially() {
    // Step 1: Fetch data
    return fetchData()
        .then(function (data) {
        console.log(data); // Output: "Data fetched successfully!"
        // Step 2: Process data
        return processData(data);
    })
        .then(function (processedData) {
        console.log(processedData); // Output: "Processed data: Data fetched successfully!"
        // Return the final result if needed
        return processedData;
    })
        .catch(function (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error to propagate it further if necessary
    });
}
// Example usage:
executeSequentially()
    .then(function (finalResult) {
    console.log('Final result:', finalResult); // Output: "Final result: Processed data: Data fetched successfully!"
})
    .catch(function (error) {
    console.error('Error in final result:', error);
});
