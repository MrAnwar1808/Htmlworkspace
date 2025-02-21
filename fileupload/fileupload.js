
function uploadfile(file) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
            // const isSuccess = Math.random() > 0.2; 

            // if (isSuccess) {
            //     resolve("File uploaded successfully!");

            // } else {
            //     reject("File upload failed.");
            // }

             const fileSizeLimit = 5000000;      // 5MB

            if (file.size > fileSizeLimit) {
                reject("File size is too large.");

            } else {
                resolve("File uploaded successfully!");
            }

            
        }, 3000);
    });
}

const fileupload = document.getElementById("fileupload");
fileupload.addEventListener("submit", function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("file");
    const message = document.getElementById("message");

    if (fileInput.files.length === 0) {
        alert("Please select a file to upload")
        return;
    }

    const file = fileInput.files[0];
    message.textContent = "Please wait while uploading...";

    uploadfile(file)
        .then((successMessage) => {
            message.textContent = successMessage;
        })
        .catch((errorMessage) => {
            message.textContent = errorMessage;
        });
});
