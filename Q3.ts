function fetchData() {{  //The fetchData function creates and returns a new Promise
    return new Promise((resolve, reject) => //Inside the Promise constructor, setTimeout is used to introduce a delay of 1000 milliseconds 1 second).
        setTimeout(() => {
            resolve("Data fetched"); //After 1 second, the resolve function is called with the string "Data fetched
        }, 1000)); // 1000 milliseconds = 1 second
    };
}
