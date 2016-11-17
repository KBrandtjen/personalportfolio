'use strict';

$('.exit').hide();
$('.menu').hide();
$('.hamburger').click(function() {
  $('.menu').slideToggle('slow', function() {
    $('.hamburger').hide();
    $('.exit').show();
  });
});

$('.exit').click(function() {
  $('.menu').slideToggle('slow', function() {
    $('.exit').hide();
    $('.hamburger').show();
  });
});
