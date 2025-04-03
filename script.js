const fetchWeather = () => {
	const URL = `https://api.weatherapi.com/v1/current.json?key=${window.WEATHER_API_KEY}&q=${window.DEFAULT_CITY}&aqi=yes`;

	fetch(URL)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		})
		.then(data => {
			console.log(data);
			const {
				location: { name: city },
				current: { temp_c: temp, condition: { icon }, wind_kph: wind, humidity, uv, feelslike_c: feelslike }
			} = data;

			document.querySelector(".card-title").textContent = city;
			document.querySelector(".card-img").src = icon;
			const listItems = document.querySelectorAll(".list-group-item");
			[
				`Temperature: ${temp}°C`,
				`Humidity: ${humidity}%`,
				`Feels like: ${feelslike}°C`,
				`Wind: ${wind} km/h`,
				`UV: ${uv}`
			].forEach((text, index) => {
				listItems[index].textContent = text;
			});
		})
		.catch(error => console.error("Fetch error:", error));
};

window.onload = fetchWeather;