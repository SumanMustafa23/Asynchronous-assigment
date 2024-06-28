function fetchData() {
    { //The fetchData function creates and returns a new Promise
        return new Promise(function (resolve, reject) {
            return setTimeout(function () {
                resolve("Data fetched"); //After 1 second, the resolve function is called with the string "Data fetched
            }, 1000);
        }); // 1000 milliseconds = 1 second
    }
    ;
}
