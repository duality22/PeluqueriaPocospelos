function iniciarMap(){
    var coord = {lat:-32.9576439 ,lng: -60.6348986};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}