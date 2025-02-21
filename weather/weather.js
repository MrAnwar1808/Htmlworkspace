
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apikey = "31632b9a481a05326db7d4809e2c3406"

weatherForm.addEventListener("submit", async event => {

    event.preventDefault()

    const city =cityInput.value

    if(city){

        try{
            const weatherData = await getweatherData(city)
            displayweatherInfo(weatherData)
        }

        catch(error){
            //console.log(error)
            console.error(error)
            displayError()
        }

    }else{
        displayError("please Enter a city")
        //alert("please enter a city")
    }

})

async function getweatherData(city) {
     
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

        const response = await fetch(apiUrl)

        console.log(response)

        if(!response.ok){
            // throw new Error("could not fetch weather data")
            alert("check the city name")
        }

        return await response.json()
    
}

function displayweatherInfo(data){
    console.log(data)

    const {
        name: city, 
        main:{temp, humidity}, 
        weather: [{description , id}]
    } = data
    card.textContent = ""
    card.style.display = "flex"


    const cityDisplay = document.createElement("h1")   
    const tempDisplay = document.createElement("p")   
    const humidityDisplay = document.createElement("p")   
    const descDisplay = document.createElement("p")   
    const weatherEmoji = document.createElement("p")   
    
    cityDisplay.textContent = city
    //tempDisplay.textContent = `${temp}°F`
    // tempDisplay.textContent = `${(temp -273.15).toFixed(1)}°C`
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`
    humidity.textContent = `Humidity: ${humidity}%`
    descDisplay.textContent = description
    weatherEmoji.textContent = getweatherEmoji(id)

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherEmoji.classList.add("weatherEmoji")


    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherEmoji)
    
 
}

function getweatherEmoji(weatherId){

    switch(true){
        case(weatherId >= 200 && weatherId < 300):
        return "⛈";

        case(weatherId >= 300 && weatherId < 400):
        return "🌧";

        case(weatherId >= 500 && weatherId < 600):
        return "🌦";

        case(weatherId >= 600 && weatherId < 700):
        return "❄";

        case(weatherId >= 700 && weatherId < 800):
        return "🌫";

        case(weatherId === 800):
        return "☀";

        case(weatherId >= 801 && weatherId < 810):
        return "☁";

        default:
            return "🔃";
    }

}

function displayError(message){ 

    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)

}