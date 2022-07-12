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
  
  $('.reviews__list').slick({
    arrows: true,
    dots: true,
  });


  var mixer = mixitup('.popular__category');

});