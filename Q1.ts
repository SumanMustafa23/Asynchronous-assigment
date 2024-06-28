async function fetchGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hey! are you coming toay ');
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

// Example usage:
async function testFetchGreeting() {
    console.log("Fetching greeting...");
    const greeting = await fetchGreeting();
    console.log("Received greeting:", greeting);
}

testFetchGreeting();
