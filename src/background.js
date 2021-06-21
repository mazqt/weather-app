const getBackground = async function (weather) {
  let search = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=uS14snrIsw0Oiohy7N8LI9IqaJyMMPV9&s=${weather}`,
    { mode: "cors" }
  );

  search = await search.json();

  console.log(search.data.images.original.url);

  document
    .getElementById("image")
    .setAttribute("src", search.data.images.original.url);
};

export default getBackground;
