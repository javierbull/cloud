"use strict";

$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// END SHOW-HIDE PASSWORD

// Select2

// $(".select2").select2({
//   theme: 'bootstrap4',
// });
//
// $(".select2-multiple").select2({
//   theme: 'bootstrap4',
// });

// End select2

$("#show-resumen").click(function() {
  $("#content-sorteo").hide();
  $("#content-resumen").show();
});

$("#show-sorteo").click(function() {
  $("#content-sorteo").show();
  $("#content-resumen").hide();
});

// Admin Dashboard  active item sidebar
$(".sidebar-admin button").click(function(){
  $(".active").removeClass("active-item-sidebar");
});
// Admin Dashboard  active item sidebar

// Admin panel
$("#toggle-btn-sidebar").click(function(){
     $("#admin-panel").toggleClass("ml-panel ml-panel-0");
 });
// End admin panel

// SHOW HIDE PANELS
$(".showProfesionales").click(function() {
  $("#profesionales-panel").show();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showAgregarProfesional").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").show();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showDesignacion").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").show();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showAgregarDesignacion").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").show();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showEspecialidad").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").show();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showAgregarEspecialidad").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").show();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showProfesiones").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").show();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showAgregarProfesion").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").show();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showCasos").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").show();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showEditarCaso").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").show();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
});

$(".showUsuarios").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").show();
  $("#editar-usuario-panel").hide();
});

$(".showEditarUsuario").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").show();
});
  // END SHOW HIDE PANELS

  $('#imgFileLogoEmpresa').change(function(){
   var curElement = $('#photoProfile');
   console.log(curElement);
   var reader = new FileReader();

   reader.onload = function (e) {
       // get loaded data and render thumbnail.
       curElement.attr('src', e.target.result);
   };

   // read the image file as a data URL.
   reader.readAsDataURL(this.files[0]);
  });
     // END UPLOAD PICTURE PROFILE

     // Show hide Tag
     $('#checkContratacionPublicaNp').click(function() {
       $("#tag-arbitro").toggleClass("flex hide");
     });
     // End Show hide Tag
// End admin dashboard

});

// admin btn sidebar togle menu
const btnToggle = document.querySelector('#toggle-btn-sidebar');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar-admin').classList.toggle('active');
  console.log(document.getElementById('sidebar-admin'))
});

// End admin btn sidebar togle menu

// Drag & Drop
const $inputFile = document.getElementById("file");
const $iconFile = document.getElementById("iconFile");
const $textFile = document.getElementById("textFile");

$inputFile.addEventListener("change", (e) => {
  if (e.target.files.length) {
    $iconFile.className = "fas fa-folder";
    $textFile.innerText = `Has agregado este documento: ${e.target.files[0].name}`;
  }
});

// End Drag & Drop
