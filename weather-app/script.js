const apiKey = '9d9315bfa02abebdfe81d4a4d9e5fad5';

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    getWeather(city);
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
      document.getElementById('weatherInfo').innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    });
}
