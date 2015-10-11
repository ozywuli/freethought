(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\wamp\\www\\lab\\freethought\\src\\assets\\js\\main.js":[function(require,module,exports){
$(function() {



$tocToggle = $('.toc-toggle');
$toc = $('.toc');

$tocToggle.on('click', function(e) {
  e.preventDefault();

  if ($('body').hasClass('toc--active')) {
    $('body').removeClass('toc--active');
  } else {
    $('body').addClass('toc--active');
  }

});



$smToggle = $('.sm-toggle');
$sm = $('.sm');

$smToggle.on('click', function(e) {
  e.preventDefault();

  if ($('body').hasClass('sm-active')) {
    $('body').removeClass('sm-active')
  } else {
    $('body').addClass('sm-active');
  }

});


$('body').on('click', function(e) {

  if (
    !$tocToggle.is(e.target) &&
    !$tocToggle.find('*').is(e.target) &&
    !$toc.is(e.target) &&
    !$toc.find('*').is(e.target) &&
    !$smToggle.is(e.target) &&
    !$smToggle.find('*').is(e.target) &&
    !$sm.is(e.target) &&
    !$sm.find('*').is(e.target)
    ) {
    $(this).attr('class', '');
  }

});


$tocOptions = $('.toc__options');
var sectionTitle;

$('.section').each(function() {
  console.log( $(this).find('h2').html() );

  $tocOptions.append( '<li><a href="#' + $(this).attr('id') + '" class="toc__links">' + $(this).find('h2').html() + '</a></li>' );

});



// Smooth scroll to anchor point
var $tocLinks = $('.toc__links');
console.log($tocLinks);


$tocLinks.on('click', function(e) {

  e.preventDefault();
  var that = $(this);



  $('html, body').animate({
    scrollTop: $(that.attr('href')).offset().top
  }, 800, function() {
    location.href = that.attr('href');
  });

});


}); // end document ready
},{}]},{},["C:\\wamp\\www\\lab\\freethought\\src\\assets\\js\\main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpIHtcclxuXHJcblxyXG5cclxuJHRvY1RvZ2dsZSA9ICQoJy50b2MtdG9nZ2xlJyk7XHJcbiR0b2MgPSAkKCcudG9jJyk7XHJcblxyXG4kdG9jVG9nZ2xlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3RvYy0tYWN0aXZlJykpIHtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygndG9jLS1hY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCd0b2MtLWFjdGl2ZScpO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kc21Ub2dnbGUgPSAkKCcuc20tdG9nZ2xlJyk7XHJcbiRzbSA9ICQoJy5zbScpO1xyXG5cclxuJHNtVG9nZ2xlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3NtLWFjdGl2ZScpKSB7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NtLWFjdGl2ZScpXHJcbiAgfSBlbHNlIHtcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc20tYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgaWYgKFxyXG4gICAgISR0b2NUb2dnbGUuaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHRvY1RvZ2dsZS5maW5kKCcqJykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHRvYy5pcyhlLnRhcmdldCkgJiZcclxuICAgICEkdG9jLmZpbmQoJyonKS5pcyhlLnRhcmdldCkgJiZcclxuICAgICEkc21Ub2dnbGUuaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHNtVG9nZ2xlLmZpbmQoJyonKS5pcyhlLnRhcmdldCkgJiZcclxuICAgICEkc20uaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHNtLmZpbmQoJyonKS5pcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgJCh0aGlzKS5hdHRyKCdjbGFzcycsICcnKTtcclxuICB9XHJcblxyXG59KTtcclxuXHJcblxyXG4kdG9jT3B0aW9ucyA9ICQoJy50b2NfX29wdGlvbnMnKTtcclxudmFyIHNlY3Rpb25UaXRsZTtcclxuXHJcbiQoJy5zZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZyggJCh0aGlzKS5maW5kKCdoMicpLmh0bWwoKSApO1xyXG5cclxuICAkdG9jT3B0aW9ucy5hcHBlbmQoICc8bGk+PGEgaHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiIGNsYXNzPVwidG9jX19saW5rc1wiPicgKyAkKHRoaXMpLmZpbmQoJ2gyJykuaHRtbCgpICsgJzwvYT48L2xpPicgKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyBTbW9vdGggc2Nyb2xsIHRvIGFuY2hvciBwb2ludFxyXG52YXIgJHRvY0xpbmtzID0gJCgnLnRvY19fbGlua3MnKTtcclxuY29uc29sZS5sb2coJHRvY0xpbmtzKTtcclxuXHJcblxyXG4kdG9jTGlua3Mub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG5cclxuXHJcblxyXG4gICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgIHNjcm9sbFRvcDogJCh0aGF0LmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgfSwgODAwLCBmdW5jdGlvbigpIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSB0aGF0LmF0dHIoJ2hyZWYnKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbn0pOyAvLyBlbmQgZG9jdW1lbnQgcmVhZHkiXX0=
