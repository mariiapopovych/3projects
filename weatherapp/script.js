const API_URL = "https://api.open-meteo.com/v1/forecast";

document.getElementById("weatherForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    try {
        const response = await fetch(`${API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await response.json();

        displayWeather(data.current_weather);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerText = "Could not fetch weather data.";
    }
});

function displayWeather(weather) {
    const { temperature, windspeed, weathercode } = weather;
    const weatherHTML = `
        <h2>Current Weather:</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Wind Speed:</strong> ${windspeed} km/h</p>
        <p><strong>Weather Code:</strong> ${weathercode}</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;
}
