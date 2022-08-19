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
  $('.catalog-product__filter-btn').on('click', function () {
    $('.catalog-product__filters').addClass('active');
    $('.fon').addClass('active');
  });

  $('.menu-mobile__btn, .menu-mobile a, .address__link, .catalog-product__close, .filter-category__link').on('click', function () {
    $('.menu-mobile').removeClass('active');
    $('.fon').removeClass('active');
    $('.catalog-product__filters').removeClass('active');
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

$('.product__slider').slick({
    prevArrow: '<button class="slick-prev" type="button" aria-label="прошлий слайд"><svg class="slick-navigation__icon slick-navigation__icon--big"><use xlink:href="../images/sprite.svg#icon-prev"></use></svg></button>',
    nextArrow: '<button class="slick-next" type="button" aria-label="следующий слайд"><svg class="slick-navigation__icon slick-navigation__icon--big"><use xlink:href="../images/sprite.svg#icon-next"></use></svg></button>',
    responsive: [
      {
      breakpoint: 576,
      settings: "unslick"
      }
      ]
});


$('.interest__list').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll:1,
    speed: 800,
    waitForAnimate: false,
    adaptiveHeight: true,
    appendArrows: $('.interest__nav'),
    prevArrow: '<button class="slick-prev" type="button" aria-label="прошлий слайд"><svg class="slick-navigation__icon"><use xlink:href="../images/sprite.svg#icon-prev"></use></svg></button>',
    nextArrow: '<button class="slick-next" type="button" aria-label="следующий слайд"><svg class="slick-navigation__icon"><use xlink:href="../images/sprite.svg#icon-next"></use></svg></button>',
    responsive: [
      {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
      },
      {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      }
      },
      {
      breakpoint: 700,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        dots:true,
        // infinite: false,
      }
      }
      ]
});



$('.form-select__item').styler();

$('.rateyo').rateYo({
  rating: 4,
  starWidth: "16px",
  spacing: "6px",
  normalFill: "#C1C1C14D",
  ratedFill: "#FFB800",
  fullStar: true,
  starSvg: '<svg><use xlink:href="../images/sprite.svg#icon-star"></use></svg>'
});

$('.response__star').rateYo({
  readOnly: true,
  starWidth: "16px",
  spacing: "6px",
  normalFill: "#C1C1C14D",
  ratedFill: "#FFB800",
  fullStar: true,
  starSvg: '<svg><use xlink:href="../images/sprite.svg#icon-star"></use></svg>'
});


var counter  = $('.counter').val();

$(".counter__btn--plus"). click (function(){
  counter++;
  $('.counter__value').val(counter);
});

$(".counter__btn--minus"). click (function(){
  if(counter !== 0){
counter--;
$('.counter__value').val(counter);
} 

});



var mixer = mixitup('.popular__category');

});


var $range = $(".filter-price__input");
    var $inputFrom = $(".filter-price__field--from");
    var $inputTo = $(".filter-price__field--to");
    var instance;
    var min = 0;
    var max = 1000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
       
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });

const tabsBtn   = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__btn').click();