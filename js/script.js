
$(document).ready(function () {

  // Alert Box
  $(".close-alert i").click(function () {
    $(".alert-info").hide();
  });
  
  // Navbar fixed
  window.onscroll = function () { myFunction() };

  var header = document.getElementById("navigation");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed-top");
    } else {
      header.classList.remove("fixed-top");
    }
  }
  // Owl carusel
  $('.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  $('.carousel').carousel({
    interval: 3000,
  })


  //  Isotop gallery 
  $('.gallery-item').isotope({
    itemSelector: '.item'
  });
  $('ul li').click(function () {
    $('ul li').removeClass('active');
    $(this).addClass('active');

    var sel = $(this).attr('data-filter');
    $('.gallery-item').isotope({
      filter: sel
    });
  });
  AOS.init();

});






