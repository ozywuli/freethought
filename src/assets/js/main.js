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

$('.js-section').each(function() {
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


// Fade in elem on scroll
  $(window).on('scroll', function() {

    $('.fadein').each(function() {


      var windowHeight = $(window).height();
      var scrolledNumber = $(window).scrollTop();

      var offsetTop = $(this).offset().top;
      var outerHeight = $(this).outerHeight();

      if ( (windowHeight + scrolledNumber) > (offsetTop + outerHeight/5) ) {

        $(this).animate({
          'opacity': '1',
          'top': 0
        }, 800)

      }

    });
});




}); // end document ready