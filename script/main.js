$(document).ready(function(){
    $('.slider-img').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        fade: true,
        adaptiveHeight: true,
        arrows: false,
        asNavFor: '.slider-info'
    });
    $('.slider-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-img',
        dots: false,
        // centerMode: true,
        // centerPadding: '0px',
        focusOnSelect: true,
        prevArrow: '.slider-button-prev',
        nextArrow:'.slider-button-next'
      });
  });