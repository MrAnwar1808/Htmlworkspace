
// //fetch: makes a request to the given URL.
// //.then() handles the successful response.
// //.catch() handles any errors that might occur during the request.

// // Making a GET request using Fetch

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {  // Check if response is not successful
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();  // Convert response to JSON
//   })
//   .then(data => {
//     console.log(data);  // Handle the data (in this case, display in the console)
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);  // Handle any errors
//   });


//   //send a request to the API using Fetch and then handle the data.
//   // Example using a REST API
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())  // Parse the response to JSON
// .then(data => {
//   console.log(data);  // Display user data in the console
// });



// // First, make sure to include Axios by adding the script tag or installing via npm
////<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>   // Using script tag for html
// // OR
// // npm install axios  // If using npm

// // Example using Axios to make a GET request

// const axios = require('axios');  // For Node.js

// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response.data);  // Handle successful response
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);  // Handle errors
//   });



// // Using Fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Fetch data:', data);
//   })
//   .catch(error => {
//     console.error('Error with fetch:', error);
//   });

// // Using Axios
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log('Axios data:', response.data);
//   })
//   .catch(error => {
//     console.error('Error with Axios:', error);
//   });


//   // Example using Async/Await to fetch data
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();  // Wait for the JSON to be parsed
//       console.log(data);  // Handle the fetched data
//     } catch (error) {
//       console.error('Error fetching data:', error);  // Handle any errors
//     }
//   }
  
//   // Call the async function
//   fetchData();


//   //Try & Catch is used to handle errors gracefully.
//    //Try allows you to run some code (the "try" block) and catch any errors that occur in the "catch
//   async function getData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);  // Successfully handle the data
//     } catch (error) {
//       console.error('There was an error with the fetch operation:', error);  // Handle errors
//     }
//   }
  
//   // Call the function
//   getData();
  
const posts = [
    { userId: 1, id: 1, title: "puspa-1", body: "Pushpa: The Rise is a 2021 Indian Telugu-language action drama film written and directed by Sukumar" },
    { userId: 1, id: 2, title: "puspa-2", body: "Pushpa 2: The Rule is a 2024 Indian Telugu-language action drama film[7] directed by Sukumar" },
    { userId: 2, id: 3, title: "Devara-1", body: "Devara: Part 1 is a 2024 Indian Telugu-language action drama film [8] written and directed by Koratala Siva" },
    { userId: 2, id: 4, title: "Devara-2", body: "Devara: Part 2 is a 2024 Indian Telugu-language action drama film [8] written and directed by Koratala Siva" },
    { userId: 3, id: 5, title: "kgf-1", body: "KGF: Chapter 1 is a 2020 Indian Kannada -language period action film [19] written and directed by Prashanth Neel" },
    { userId: 3, id: 6, title: "Kgf-2", body: "KGF: Chapter 2 is a 2022 Indian Kannada -language period action film [19] written and directed by Prashanth Neel" },
    { userId: 4, id: 7, title: "Bahubali-1", body: "Baahubali: The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli" },
    { userId: 4, id: 8, title: "Bahubali-2", body: "Baahubali 2: The Conclusion is a 2017 Indian Telugu-language epic action film directed by S. S. Rajamouli" },
    { userId: 5, id: 9, title: "War", body: "War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand" },
    { userId: 5, id: 10, title: "War-2", body: "War 2 is a 2025 Hindi movie starring Hrithik Roshan, John Abraham, and Jr. Ntr as the leads. It is directed by Ayan Mukerji" },
  ];
  
  // Simulate a "fetch" function to get data (normally you would use `fetch` in the browser)
function fetchPosts(userId) {
    // Simulate a delay like an API request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredPosts = posts.filter(post => post.userId === userId);
        if (filteredPosts.length > 0) {
          resolve(filteredPosts);
        } else {
          reject("No posts found for this user");
        }
      }, 1000);
    });
  }

  fetchPosts(1)
  .then(posts => console.log(posts))
  .catch(error => console.error(error));

  // Simulate a "fetch" function to get data (normally you would use `fetch` in the browser)
async function fetchPosts(userId) {
    // Simulate a delay like an API request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredPosts = posts.filter(post => post.userId === userId);
        if (filteredPosts.length > 0) {
          resolve(filteredPosts);
        } else {
          reject("No posts found for this user");
        }
      }, 1000);
    });
  }
  
 
  async function getUserPosts() {         // Using async/await to get data for userId 2
    try {
      const data = await fetchPosts(2);  // Await the result of fetchPosts
      console.log("Posts by User 2:", data);
    } catch (error) {
      console.error("Error:", error);  // Handle any error if no posts are found
    }
  }
  
  getUserPosts();
  
  fetchPosts(2)
    .then(data => console.log("Posts by User 2:", data))
    .catch(error => console.error("Error:", error));











// const axios = require('axios');  // Importing axios

// function getPostsWithAxios(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const filteredPosts = posts.filter(post => post.userId === userId);
//       if (filteredPosts.length > 0) {
//         resolve(filteredPosts);
//       } else {
//         reject("No posts found for this user");
//       }
//     }, 1000);
//   });
// }


// getPostsWithAxios(3)       // Using axios to get posts for userId 3
//   .then(data => console.log("Posts by User 3:", data))
//   .catch(error => console.error("Error with Axios:", error));

  








  const axios = require('axios');  // Importing axios

async function getPostsWithAxios(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredPosts = posts.filter(post => post.userId === userId);
      if (filteredPosts.length > 0) {
        resolve(filteredPosts);
      } else {
        reject("No posts found for this user");
      }
    }, 1000);
  });
}


async function fetchUserPosts() {                // Using async/await to get posts for userId 3
  try {
    const data = await getPostsWithAxios(3);  // Await the result of getPostsWithAxios
    console.log("Posts by User 3:", data);
  } catch (error) {
    console.error("Error with Axios:", error);  // Handle any error if no posts are found
  }
}

fetchUserPosts();








const axios = require('axios');

// URL of a mock API or endpoint that returns dummy data
const url = 'https://jsonplaceholder.typicode.com/users';

// Sending GET request to fetch dummy data
axios.get(url)
  .then(response => {
    console.log('Data:', response.data); // The retrieved data
  })
  .catch(error => {
    console.error('Error:', error);
  });
