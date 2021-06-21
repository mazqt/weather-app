import getBackground from "./background";
import countryCodeEmoji from "country-code-emoji";

const getWeather = async function (city) {
  const error = document.getElementById("error");

  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98a50d7fa21dfeaf0cf1bea5a5c7d9c2`,
      { mode: "cors" }
    );
    data = await data.json();
    if (data.cod == 404) {
      throw data.message;
    } else {
      data = pruneJson(data);
      assigntWeatherData(data);
      error.setAttribute("style", "display: none");
      getBackground(data.type_of_weather);
    }
  } catch (err) {
    error.innerText = err;
    error.setAttribute("style", "");
  }
};

const pruneJson = function (json) {
  let weather = {
    name: json.name,
    temp: json.main.temp,
    feels_like: json.main.feels_like,
    country: json.sys.country,
    type_of_weather: json.weather[0].main,
    desc: json.weather[0].description,
  };

  return weather;
};

const assigntWeatherData = function (data) {
  document.getElementById("type").innerText = data.type_of_weather;
  document.getElementById("country").innerText = countryCodeEmoji(data.country);

  switch (document.getElementById("tempType").value) {
    case "celsius":
      document.getElementById("temp").innerText =
        Math.round((data.temp - 273) * 10) / 10 + "C";
      document.getElementById("feels_like").innerText =
        Math.round((data.feels_like - 273) * 10) / 10 + "C";
      break;
    case "fahrenheit":
      document.getElementById("temp").innerText =
        Math.round((((data.temp - 273) * 9) / 5 + 32) * 10) / 10 + "F";
      document.getElementById("feels_like").innerText =
        Math.round((((data.temp - 273) * 9) / 5 + 32) * 10) / 10 + "F";
      break;
    case "kelvin":
      document.getElementById("temp").innerText =
        Math.round(data.temp * 10) / 10 + "K";
      document.getElementById("feels_like").innerText =
        Math.round(data.feels_like * 10) / 10 + "K";
      break;
  }
};

export default getWeather;
