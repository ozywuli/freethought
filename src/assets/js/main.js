$tocToggle = $('.toc-toggle');

$tocToggle.on('click', function(e) {
  e.preventDefault();

  if ($('body').hasClass('toc--active')) {
    $('body').removeClass('toc--active');
  } else {
    $('body').addClass('toc--active');
  }

});