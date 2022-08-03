$(function () {

  let header = $('.header');
  let hederHeight = header.height();
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header__fixed');
    
     $('.main').css({
      'paddingTop': hederHeight+'px' 
   });
    } else {
     header.removeClass('header__fixed');
     $('.main').css({
      'paddingTop': 0 
     })
    }
  });

  $('.button-search').on('click', function () {
    $('.form-search').toggleClass('active');
  });

  $('.button-basket').on('click', function () {
    $('.basket').show();
    $('.basket').addClass('active');
  });
 
  $('.close, .basket__link').on('click', function () {
    $('.basket').hide();
  });

  $('.header__menu-btn').on('click', function () {
    $('.menu-mobile').toggleClass('active');
    $('.fon').addClass('active');
  });

  $('.menu-mobile__btn, .menu-mobile a, .address__link').on('click', function () {
    $('.menu-mobile').removeClass('active');
    $('.fon').removeClass('active');
  });



  $('.reviews__row').slick({
    arrows: true,
    dots: true,
    appendArrows: $('.reviews__navigation'),
    appendDots: $('.reviews__navigation'),
    prevArrow: '<button class="slick-prev" type="button" aria-label="прошлий слайд"><svg class="slick-navigation__icon"><use xlink:href="../images/sprite.svg#icon-prev"></use></svg></button>',
    nextArrow: '<button class="slick-next" type="button" aria-label="следующий слайд"><svg class="slick-navigation__icon"><use xlink:href="../images/sprite.svg#icon-next"></use></svg></button>',
    
    responsive: [{
        breakpoint: 992,
        settings: {
          dots: false,
        }
      }
    ]

  });

  
  let settingsSlick = {
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
};

if ($(document).width() <= 800) {
$('.myslick').slick(settingsSlick);
}

$(window).resize(() => {
if ($(document).width() <= 800) {
    if(!$(".restaurant__catalog").hasClass("slick-initialized")) $('.restaurant__catalog').slick(settingsSlick);
} else {
    if ($(".restaurant__catalog").hasClass("slick-initialized")) $(".restaurant__catalog").slick("unslick");
}
});

  
  var mixer = mixitup('.popular__category');

});

