const cityName = document.getElementById("cityName")
const searchButton = document.getElementById("searchButton")

function getWeather() {
    const weather_URL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=0bc4b11eaea82449365cb78f02f3da57"
    fetch(weather_URL)
        .then(response => {
            return response.json()
        
        }) .then(result => {
            console.log(result)
            displayWeather(result) 
        })
}

function displayWeather() {
    const weather = info.main
    const weatherInfo = `<h3>${info.name}<h3>
        <label><b>Current Temperature: </b>${weather.temp} °F</label>
        <label><b>Low Temperature: </b>${weather.lowTemp} °F</label>
        <label><b>High Temperature: </b>${weather.highTemp} °F</label>
        <label><b>Pressure: </b>${weather.pressure} Pa</label>`

        displayWeather.innerHTML = weatherInfo

}

searchButton.addEventListener('click', function() {
    const cityName = cityNameText.value

})




