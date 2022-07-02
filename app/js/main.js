$( function() {
  
  $('.user-nav__button--search').on('click', function(){
    $('.form-search').toggleClass('active');
  });

  $('.user-nav__button--basket').on('click', function(){
    $('.basket').toggleClass('active');
  });

  $('.close').on('click', function(){
    $('.basket').removeClass('active');
  });
  
  var mixer = mixitup('.popular__category');

});