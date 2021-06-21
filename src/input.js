import getWeather from "./weather";

const addSearch = function () {
  const city = document.getElementById("city");
  const button = document.getElementById("submit");

  button.addEventListener("click", function () {
    getWeather(city.value);
  });
};

export default addSearch;
