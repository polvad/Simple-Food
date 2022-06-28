$( function() {
  
  $('.header__search').on('click', function(){
    $('.header__fild').toggleClass('active');
  });

  $('.basket__btn').on('click', function(){
    $('.basket').toggleClass('active');
  });

  $('.basket__close').on('click', function(){
    $('.basket').removeClass('active');
  });
  
  var mixer = mixitup('.popular__category');

});