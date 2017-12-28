function initMap() {
  var uluru = {
    lat: 52.629780,
    lng: -1.139370
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
