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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("flex-item");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
