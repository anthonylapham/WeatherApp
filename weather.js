$(document).ready(function() {
  var apiURL = "http://api.wunderground.com/api/a7221d2ea4ee3996/conditions/q/autoip.json";

  $.getJSON(apiURL, function(data) {
      console.log(data);
      document.getElementById('weather').innerHTML = data.current_observation.weather;
      document.getElementById('geo').innerHTML = "latitude: " + data.current_observation.display_location.latitude + " longitude: " + data.current_observation.display_location.longitude;
      document.getElementById('temp').innerHTML = data.current_observation.temperature_string;
      document.getElementById('city').innerHTML = data.current_observation.display_location.city;
      document.getElementById('icon').src= data.current_observation.icon_url;
  });

});
