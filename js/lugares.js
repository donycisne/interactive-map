lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  function autocompletar () {
    
    var direccion = document.getElementById('direccion');
    var desde = document.getElementById('desde');
    var hasta = document.getElementById('hasta');
    var agregar = document.getElementById('agregar');

    //Crea el autocompletar para cada elemento
    autoCompletarDireccion = new google.maps.places.Autocomplete(direccion);
    autoCompletarDesde = new google.maps.places.Autocomplete(desde);
    autoCompletarHasta = new google.maps.places.Autocomplete(hasta);
    autoCompletarAgregar = new google.maps.places.Autocomplete(agregar);

    //Limita el área de búsqueda de un autocomplete
    function limite(autocomplete) {
      var circle = new google.maps.Circle({
        radius: 20000
      });
      autocomplete.setBounds(circle.getBounds());
    }

    //Limira el área de los autocomplete
    limite(autoCompletarDireccion);
    limite(autoCompletarDesde);
    limite(autoCompletarHasta);
    limite(autoCompletarAgregar);
  }
  
  // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

  // Buscar lugares cercanos con el tipo especificado en el campo de TipoDeLugar
  function buscarCerca (posicion) {
    var tipoDeLugar = document.getElementById('tipoDeLugar').value;
    var radio = document.getElementById('radio').value;    
    var pedidoBuscarCerca = {
      location: posicion,
      radius: radio,
      type: [tipoDeLugar]
    };
    servicioLugares.nearbySearch(pedidoBuscarCerca, marcadorModulo.marcarLugares)
  }
  
  return {
    inicializar,
    buscarCerca
  }
})()
