const apiKey = '3a4b8b20e3cd4c208fe194029252609';
let city = document.getElementById('city');
let button = document.getElementById('search');
let tempDivInfo = document.getElementById('temp-div');
const weatherIcon = document.getElementById('weather-icon');


button.onclick = function() {
    if (city.value === '') {
        alert('Please enter a city name');
        return;
    }

    const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}&aqi=no`;
    console.log(city,weatherIcon)
    fetch(currentWeatherUrl).then(response => response.json()).then(data => {
        console.log(data);

        tempDivInfo.textContent = `${data.location.name}, ${data.location.country} \n ${data.current.temp_c}°C \n ${data.current.condition.text}`;
        
        weatherIcon.src =  data.current.condition.icon
    }   )

}




