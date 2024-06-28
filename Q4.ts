function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Generate a random number between 0 and 1
            const random = Math.random();
            if (random < 0.5) {
                resolve("Data fetched");
            } else {
                reject("Data fetch failed");
            }
        }, 1000); // 1000 milliseconds = 1 second
    });
}

// Example usage:
fetchWithError()
    .then(data => {
        console.log(data); // Output: "Data fetched
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Output: "Data fetch failed!" (randomly)
    });
