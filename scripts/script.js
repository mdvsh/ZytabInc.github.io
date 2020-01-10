$(function () {

    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 5) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }

        if ($(window).scrollTop() > 1000) {
            $('#scrollTop').addClass('active');
        } else {
            $('#scrollTop').removeClass('active');
        }
    });

    $('.problem-slider').owlCarousel({
        items: 1,
        dots: true
    });
    $('body').scrollspy({target: ".navbar", offset: 50});   

    $("#nav_sup_content a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
     
          window.location.hash = hash;
        });
      } 
    });
}
);