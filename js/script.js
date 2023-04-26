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

$(document).ready(function () {
  $(".btn-contato").on("click", function () {
    $(".formulario").toggle("slow");
    $(".main-navigation").toggle("slow");
  });
});

/**Slideshow de Imagens */

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

/**Envio de mensagem pelo whatsapp */

function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url =
    "https://wa.me/51995428272?text=" + // Seu numero
    "*Formulário de Contato*" +
    "%0a" + // Mensagem personalizada
    "%0a" + // Quebra de linha
    "*Nome*: " +
    nome +
    "%0a" + // Dados do formulário
    "*Telefone*: " +
    telefone +
    "%0a" +
    "*E-mail*: " +
    email +
    "%0a" +
    "*Mensagem*: " +
    msg;
  window.open(url, "_blank").focus();
}

$(document).ready(function () {
  $("#btn-voltar").on("click", function () {
    $(".text-leiamais").toggle("slow");
  });
});


function menuFn(x) {
  x.classList.toggle("change");
}
      


