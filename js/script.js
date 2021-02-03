$(document).ready(function() {
  $('.header-burger').click(function(event) {
      $('.header-burger, .menu-nav').toggleClass('active');
      $('body').toggleClass('lock');
  });
});


$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:10000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

