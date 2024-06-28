function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000); // Simulating fetching data with a delay of 1 second
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed data: ${data}`);
        }, 500); // Simulating processing data with a delay of 0.5 seconds
    });
}

function executeSequentially() {
    // Step 1: Fetch data
    return fetchData()
        .then(data => {
            console.log(data); // Output: "Data fetched successfully!"
            // Step 2: Process data
            return processData(data);
        })
        .then(processedData => {
            console.log(processedData); // Output: "Processed data: Data fetched successfully!"
            // Return the final result if needed
            return processedData;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Re-throw the error to propagate it further if necessary
        });
}

// Example usage:
executeSequentially()
    .then(finalResult => {
        console.log('Final result:', finalResult); // Output: "Final result: Processed data: Data fetched successfully!"
    })
    .catch(error => {
        console.error('Error in final result:', error);
    });
