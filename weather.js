$(document).ready(function() {
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Dayton&APPID=f22ac9816b3179a0e9790bf47358fa0c";

  $.getJSON(apiURL, function(data) {
      console.log(data);
      document.getElementById('weather').innerHTML = data.weather[0].description;
      document.getElementById('geo').innerHTML = "latitude: " + data.coord.lat + " longitude: " + data.coord.lon;
      document.getElementById('temp').innerHTML = data.main.temp;
      document.getElementById('city').innerHTML = data.name;
      var kelvin = data.main.temp;
      var c = kelvin-273;
      console.log(c);
      var f = (kelvin-273.15)*(9/5)+32;
      console.log(f);
  });

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
