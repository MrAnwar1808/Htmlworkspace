

const header = document.getElementById("header")
header.style.color = "green"


const movies = [
    {title: "Devara", description: "A mighty sea warrior takes a violent stand against the criminal deeds of his village. Years later, his mild-mannered son walks a path of his own."},
    {title: "RRR", description: "Roudram Ranam Rudhiram"},
    {title: "Dragon", description: "An upcomming film for jr.NTR"}
];


// const container = document.getElementById("container")
// let movieHTML ='';
// for(let i=0; i <movies.length; i++)
// {
//     movieHTML += 
//     <div>
//         <h3>$</h3>
//     </div>
    
// }



// const container = document.getElementById("container")
// for(let i=0; i<movies.length; i++){
//     const movieDiv = document.createElement('div')
//     const movieTitle = document.createElement("h3")
//     const movieDescription = document.createElement("p")

//     movieTitle.textContent = movies[i].title
//     movieDescription.textContent = movies[i].description

//     movieDiv.appendChild(movieTitle)
//     movieDiv.appendChild(movieDescription)
//     container.appendchild(movieDiv)
// }

movies.forEach(movie =>{
    const movieDiv = document.createElement('div')
    const movieTitle = document.createElement('h3')
    const movieDescription = document.createElement('p')

    movieTitle.textContent = movie.title
    movieDescription.textContent = movie.description

    movieTitle.style.color = "blue"
    movieDescription.style.color = "red"
    
    movieTitle.style.fontSize = "24px"
    movieDescription.style.fontSize = "16px"
    movieDiv.style.marginBottom = "10px"
    movieDiv.style.margin = "10px"

    movieDiv.appendChild(movieTitle)
    movieDiv.appendChild(movieDescription)
    container.appendChild(movieDiv)
})