$(document).ready(function () {
  // Mobile Menu animation (open)
  $('.navbar-toggler').on('click', function () {
    $('.animated-icon').toggleClass('open');
  });

  // Mobile Menu animation (hide)
  $('.nav-link').on('click', function () {
    $('.animated-icon').removeClass('open');
    $('.navbar-collapse').collapse('hide');
  });

  // Arrow-up animation
  $(window).scroll(() => {
    if ($(this).scrollTop() > 812) {
      $('.arrow-up').css('display', 'flex');
      $('.arrow-up').fadeIn();
    } else {
      $('.arrow-up').fadeOut();
    }
  });
});
