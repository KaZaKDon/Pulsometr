"use strict";

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icon/chevron left solid.png"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icon/chevron right solid.png"></img></button>'
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active').closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  ;
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});