


const API_KEY = "6ddfd71a";  // Replace with your OMDB API key
const searchBtn = document.getElementById('btn');
const movieInput = document.getElementById('inputtext');
const loadingMessage = document.getElementById('loadingMessage');
const movieDetails = document.getElementById('movieDetails');

// Toggle loading message visibility
function toggleLoading(show) {
    loadingMessage.style.display = show ? 'block' : 'none';
    movieDetails.innerHTML = '';  // Clear previous results
}

// Display movie details
function displayMovieDetails(movie) {
    const html = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
    `;
    movieDetails.innerHTML = html;
}

// Display error message
function displayError(message) {
    movieDetails.innerHTML = `<p class="error-message">${message}</p>`;
}

// Fetch movie data using Fetch API
async function fetchMovieUsingFetch(movieName) {
    try {
        toggleLoading(true);
        const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
            displayMovieDetails(data);
        } else {
            displayError('Movie not found!');
        }
    } catch (error) {
        displayError('An error occurred while fetching movie data.');
    } finally {
        toggleLoading(false);
    }
}

// Fetch movie data using Axios
async function fetchMovieUsingAxios(movieName) {
    try {
        toggleLoading(true);
        const response = await axios.get(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`);
        const data = response.data;

        if (data.Response === 'True') {
            displayMovieDetails(data);
        } else {
            displayError('Movie not found!');
        }
    } catch (error) {
        displayError('An error occurred while fetching movie data.');
    } finally {
        toggleLoading(false);
    }
}

// Event listener for Search button
searchBtn.addEventListener('click', () => {
    const movieName = movieInput.value.trim();

    if (!movieName) {
        displayError('Please enter a movie name.');
        return;
    }

    // Fetch movie data using Fetch API or Axios
    fetchMovieUsingFetch(movieName);  // Use fetch
    // fetchMovieUsingAxios(movieName);  // Or use Axios
});
