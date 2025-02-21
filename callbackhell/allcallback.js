
function fetchData(callback) {
    setTimeout(() => {
        const data = "Hello, World!";
        callback(null, data); // First argument is error (null), second is result
    }, 2000);
}

fetchData((err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Data:", data); // "Data: Hello, World!"
    }
});


function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched!";
        callback(null, data);
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        const processedData = data.toUpperCase();
        callback(null, processedData);
    }, 1000);
}

function displayData(data) {
    console.log("Processed Data:", data);
}

fetchData((err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.log("Error:", err);
            } else {
                displayData(processedData); // "Processed Data: DATA FETCHED!"
            }
        });
    }
});
