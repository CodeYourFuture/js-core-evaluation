console.log("script is running");

var apiKey = "Scwv1Ey9zWw786giXlrtc75M68oCIj2j";
var url = "https://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;
var giphiesContainer = document.querySelector("#giphies");
fetch(url)
  .then(response => response.json())
  .then(function(giphies) {
    giphies.data.forEach(function(giph) {
      var giphList = document.createElement("li");
      giphList.innerHTML = `<img src="${giph.images.fixed_width_small.url}">`;
      giphiesContainer.appendChild(giphList);
    });
  });

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
