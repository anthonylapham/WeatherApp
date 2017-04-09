$(document).ready(function() {
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Dayton&APPID=f22ac9816b3179a0e9790bf47358fa0c";

  $.getJSON(apiURL, function(weather) {
    console.log(weather);
    $("#geo").html("latitude: " + weather.coord.lat + " longitude: " + weather.coord.lon);
    $("#weather").html(weather.weather.description);
    $("#temp").html(weather.main.temp);
    $("#city").html(weather.name);

  });

  $.getJSON(apiURL, function(degree){
    console.log(degree);
    var kelvin = degree.main.temp;
    var c = kelvin-273.15;
    console.log(c);
    var f = (kelvin-273.15)*(9/5)+32;
    console.log(f);
  })

  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(location){
        $("#geo").html("latitude: " + geo.coord.lat + " longitude: " + geo.coord.lon);
        $("#weather").html(weather.weather.description);
        $("#temp").html(weather.main.temp);
        $("#city").html(weather.name);
        })
      }
    }
});
