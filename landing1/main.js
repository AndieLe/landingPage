$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".nav").addClass("nav-shrink");
    } else {
      $(".nav").removeClass("nav-shrink");
    }
  });
});
//owl carousel
$(".features__grid").owlCarousel({
  loop: true,

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".creenshots__images").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$(".client__grid").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//

$(".team__grid").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var coll = document.getElementsByClassName("faq__content-box");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var acti = document.getElementsByClassName("menu-items");
var i;
for (i = 0; i < length.acti; i++) {
  acti[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
$.scrollIt();
