console.log("script is running");

var apiKey = "Scwv1Ey9zWw786giXlrtc75M68oCIj2j";
var url = "https://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;

/*
    Retrieve the trending giphies from <a href="https://developers.giphy.com/">giphy api</a> and show them in the page. The URL for the the API is:
        https://api.giphy.com/v1/gifs/trending?api_key=Scwv1Ey9zWw786giXlrtc75M68oCIj2j
    which will get you all the information about the trending gifs in JSON format.

    Like always, we:
        1. fetch from an API
        2. convert to json
        3. use the data to render in a DOM element (DOM manipulation)
    Hint: look at how the data from the API looks like - for example the top level is an object not an array like Github API, make sure you get to the right object
    Hint: the image url can be found under `images.fixed_width_small.url`
    Another Hint: Always have  your Developer tools open, and check for errors and inspect the DOM and the JSON format.
*/

fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=Scwv1Ey9zWw786giXlrtc75M68oCIj2j"
)
  .then(function(data) {
    return data.json();
  })
  .then(function(giphies) {
    var imageBox = document.querySelector("#giphies");
    giphies.data.forEach(function(giphy) {
      var giphyUrl = giphy.images.fixed_width_small.url;
      var image = document.createElement("img");
      image.setAttribute("src", giphyUrl);
      imageBox.appendChild(image);
    });
  });
