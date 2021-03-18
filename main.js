


// mi credo la stringa base con la gli oggetti della spesa
var listaSpesa = [
  'buona volontà',
  'spirito imprenditoriale',
  'chilotoni',
  'uranio impoverito',
  'isotopi radioattivo',
  'adesivo radioattivo',
];

// mi vado a pushare gli oggetti della stringa dentro i li
for (var i = 0; i < listaSpesa.length; i++) {
  // mi clono il template
  var template = $('.clone li').clone();
  // aggiungo le info al template
  template.prepend(listaSpesa[i]);
  // aggiungo il template alla lista
  $(".ul-content").append(template);
};


// creare una todo list che permatta di aggiungere (tramite campo input)
$('#input-list').keydown(function(evento) {

  if (evento.wich == 13) {

    var testo = $(this).val();
    if (testo != "") {
      var template = $('.clone li').clone();
      template.prepend(testo);
      $(".ul-content").append(template);
      $(this).val('');

    }
  }

});
// e rimuovere gli elementi!
$(document).on('click', '.span-delete', function() {
  $(this).parent().remove();
});
