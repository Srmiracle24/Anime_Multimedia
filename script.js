// Obtener el elemento del botón de búsqueda y el campo de entrada
var searchButton = document.querySelector('.search-bar button');
var searchInput = document.querySelector('#search-input');

// Agregar un evento de clic al botón de búsqueda
searchButton.addEventListener('click', function() {
  var searchTerm = searchInput.value;
  alert('Realizando búsqueda: ' + searchTerm);
});