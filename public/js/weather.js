const WEATHER_API = 'e8b22fa01f1824e8e4224f558de0a295';

function onGeoOK(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child');
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    // error
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
