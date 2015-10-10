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