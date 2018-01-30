var mapa;

var posicionCentral = {
  lat: -34.603739,
  lng: -58.38157
};

// Iniciando el mapa con zoom y la locación en el centro
function inicializarMapa () {
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 13
  });
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
