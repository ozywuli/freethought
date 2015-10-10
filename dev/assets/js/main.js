(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\wamp\\www\\lab\\freethought\\src\\assets\\js\\main.js":[function(require,module,exports){
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
},{}]},{},["C:\\wamp\\www\\lab\\freethought\\src\\assets\\js\\main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiR0b2NUb2dnbGUgPSAkKCcudG9jLXRvZ2dsZScpO1xyXG4kdG9jID0gJCgnLnRvYycpO1xyXG5cclxuJHRvY1RvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCd0b2MtLWFjdGl2ZScpKSB7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RvYy0tYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygndG9jLS1hY3RpdmUnKTtcclxuICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJHNtVG9nZ2xlID0gJCgnLnNtLXRvZ2dsZScpO1xyXG4kc20gPSAkKCcuc20nKTtcclxuXHJcbiRzbVRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdzbS1hY3RpdmUnKSkge1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzbS1hY3RpdmUnKVxyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NtLWFjdGl2ZScpO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gIGlmIChcclxuICAgICEkdG9jVG9nZ2xlLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgISR0b2NUb2dnbGUuZmluZCgnKicpLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgISR0b2MuaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHRvYy5maW5kKCcqJykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHNtVG9nZ2xlLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgISRzbVRvZ2dsZS5maW5kKCcqJykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAhJHNtLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgISRzbS5maW5kKCcqJykuaXMoZS50YXJnZXQpXHJcbiAgKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJycpO1xyXG4gIH1cclxuXHJcbn0pOyJdfQ==
