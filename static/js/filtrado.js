
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function cambiarEstado(){
    new_dep = document.getElementById("tipoFiltrado").value;
    new_type = document.getElementById("texto");

    if(new_dep == "FI" ){
      new_type.type = 'date';
      new_type.palceholder = "yyyy-mm-dd";
    }else {
      new_type.type = 'text';
      new_type.placeholder = "";
    }
}

function cambiarATexto(){
    document.getElementById("texto").type= 'text';
}
