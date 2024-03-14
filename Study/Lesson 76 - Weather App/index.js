const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");
const apiKey = "1f9859661dfd0afebcfbb2aa5546c60e";
// OpenWeatherMap

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.log(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    console.log(data);
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }],
    } = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const temperatureDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    const tempC = temp - 273.15;
    const tempF = ((temp - 273.15) * 9) / 5 + 32;
    cityDisplay.textContent = city;
    temperatureDisplay.textContent = `${tempC.toFixed(1)}°C`; // alt + 0176
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("city-display");
    temperatureDisplay.classList.add("temperature-display");
    humidityDisplay.classList.add("humidity-display");
    descriptionDisplay.classList.add("description-display");
    weatherEmoji.classList.add("weather-emoji");

    card.appendChild(cityDisplay);
    card.appendChild(temperatureDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈";
        case weatherId >= 300 && weatherId < 400:
            return "🌧";
        case weatherId >= 500 && weatherId < 600:
            return "🌧";
        case weatherId >= 600 && weatherId < 700:
            return "☀";
        case weatherId >= 700 && weatherId < 800:
            return "🌫";
        case weatherId === 800:
            return "🌞";
        case weatherId >= 801 && weatherId < 810:
            return "☁";
        default:
            return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error-display");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
