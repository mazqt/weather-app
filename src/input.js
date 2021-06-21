import getWeather from "./weather";

const input = (function () {
  const addSearch = function () {
    const city = document.getElementById("city");
    const button = document.getElementById("submit");

    button.addEventListener("click", function () {
      getWeather(city.value);
    });
  };

  return {
    addSearch,
  };
})();

export default input;
