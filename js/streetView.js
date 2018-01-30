streetViewModulo = (function () {
  var panoramaStreetView // 'Visor' de StreetView

  function inicializar () {
    // Crea un panorama en una posición y lo muestra en la página.
    google.maps.event.addListener(mapa, "click", function (event) {
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      panoramaStreetView = new google.maps.LatLng(lat, lng);
      mostrarPanorama(ubicacion);
    });
  };

  function mostrarPanorama(posicion){
    panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
      position: posicion,
      pov: {
        heading: 34,
        pitch: 10
      }      
    });
  };

  // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    var mapaCentrado = mapa.getCenter();
    mostrarPanorama(mapaCentrado);
    mapa.setStreetView(panoramaStreetView);
  };

  function creaPanorama(coordenadas){
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: coordenadas,
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    )
  };

  return {
    inicializar,
    fijarStreetView
  }
})()
