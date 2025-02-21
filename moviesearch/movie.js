
const apiKey = "6ddfd71a";
const searchButton = document.getElementById("searchButton");
const movieInput = document.getElementById("movieInput");
const movieDetails = document.getElementById("movieDetails");
const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");

function displayMovieDetails(data) {
  movieDetails.innerHTML = 
  `<h2>${data.Title} (${data.Year})</h2>
   <p><strong>Genre:</strong> ${data.Genre}</p>
   <p><strong>Plot:</strong> ${data.Plot}</p>
   <p><strong>Actors:</strong> ${data.Actors}</p>`;

  movieDetails.classList.remove("hidden");
  errorDiv.classList.add("hidden");

}

function displayError(message) {
  errorDiv.innerText = message;
  errorDiv.classList.remove("hidden");
  movieDetails.classList.add("hidden");
}

async function fetchMovieWithFetchAPI(movieName) {
  loadingDiv.classList.remove("hidden");
  movieDetails.classList.add("hidden");
  errorDiv.classList.add("hidden");
  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    const data = await response.json();
    if (data.Response === "True") {
      displayMovieDetails(data);
    } else {
      displayError("Movie not found. Please try another name.");
    }
  } catch (error) {
    displayError("An error occurred. Please try again later.");
  } finally {
    loadingDiv.classList.add("hidden");
  }
}

async function fetchMovieWithAxios(movieName) {
  loadingDiv.classList.remove("hidden");
  movieDetails.classList.add("hidden");
  errorDiv.classList.add("hidden");
  try {
    const response = await axios.get(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    const data = response.data;
    if (data.Response === "True") {
      displayMovieDetails(data);
    } else {
      displayError("Movie not found. Please try another name.");
    }
  } catch (error) {
    displayError("An error occurred. Please try again later.");
  } finally {
    loadingDiv.classList.add("hidden");
  }
}

searchButton.addEventListener("click", () => {
  const movieName = movieInput.value.trim();
  if (movieName) {
    // fetchMovieWithFetchAPI(movieName); // Using Fetch API
    fetchMovieWithAxios(movieName); // Uncomment to use Axios
  } else {
    displayError("Please enter a movie name.");
  }
});