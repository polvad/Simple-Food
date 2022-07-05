$( function() {
  
  $('.button-search').on('click', function(){
    $('.form-search').toggleClass('active');
  });

  $('.button-basket').on('click', function(){
    $('.basket').toggleClass('active');
  });

  $('.close').on('click', function(){
    $('.basket').removeClass('active');
  });
  
  $('.restaurant__catalog').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    rows: 2,
  });

  $('.reviews__list').slick({
    arrows: true,
    dots: true,
  
  });


  var mixer = mixitup('.popular__category');

});