$(document).ready(function () {
  $(".burguer-container").on("click", function () {
    $(".main-navigation").toggle("slow");
  });
});

$(document).ready(function () {
  $(".a-button").on("click", function () {
    $(".text-leiamais").toggle("slow");
  });
});

$(document).ready(function () {
  $(".galeria-btn").on("click", function () {
    $(".galeria").toggle("slow");
    $(".main-navigation").toggle("slow");
  });
});

$(document).ready(function () {
  $(".btn-sair-galeria").on("click", function () {
    $(".galeria").toggle("slow");
  });
});

$(function () {
  $(".flex-image").colorbox();
});
