$(document).ready(function() {
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Dayton&APPID=f22ac9816b3179a0e9790bf47358fa0c";

  $.getJSON(apiURL, function(weather) {
    console.log(weather);
    $("#weather").html("latitude:" + weather.coord.lat + "longitude:" + weather.coord.lon);
  });

  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(location){
          $("#weather").html("latitude:" + location.coord.lat + "longitude:" + location.coord.lon);
        })
      }
    }
});
