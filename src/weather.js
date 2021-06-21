const getWeather = async function (city) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98a50d7fa21dfeaf0cf1bea5a5c7d9c2`,
      { mode: "cors" }
    );
    data = await data.json();
    console.log(data);
    data = pruneJson(data);
    console.log(data);
  } catch (err) {
    console.log(err);
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

export default getWeather;
