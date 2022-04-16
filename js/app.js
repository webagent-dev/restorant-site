//  ripples
$('document').ready(function () {
  // nav bar toggler
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('change')
  })
  // smooth scroll
  $(window).scroll(function () {
    const position = $(this).scrollTop()
    if (position >= 718) {
      $('.navbar').addClass('navbar-back')
        $('.navbar').addClass('fixed-top')
      }else {
      $('.navbar').remove('navbar-back')
        $('.navbar').remove('fixed-top')
      }
  })
  //  ripples
  $('#header, .info').ripples({
    dropRadius: 25,
    perturbance: 0.6
  })
  // magnifie popup
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }

  })
})
