

jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	window.onload = function () {
		if (document.getElementById('loading-mask'))
			document.getElementById('loading-mask').style.display = 'none';
	}


	/* ========================================================================= */
	/*	Nice Scroll - Custom Scrollbar
	/* ========================================================================= */

	var nice = $("html").niceScroll({
		cursorborderradius: 0,
		cursorwidth: "8px",
		cursorfixedheight: 150,
		cursorcolor: "#FFAC01",
		zindex: 9999,
		cursorborder: 0,
	});


	/* ========================================================================= */
	/*	Scroll Up / Back to top
	/* ========================================================================= */

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$("#scrollUp").fadeIn(200);
		} else {
			$("#scrollUp").fadeOut(200);
		}
	});

	$('#scrollUp').click(function () {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
	});


	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	jQuery.fn.exists = function () {
		return this.length > 0;
	}

	if ($("#features").exists()) {
		$("#features").owlCarousel({
			navigation: true,
			pagination: true,
			slideSpeed: 800,
			singleItem: true,
			transitionStyle: "fadeUp",
			paginationSpeed: 800,
			navigationText: ["<i class='fa fa-chevron-left fa-2x'></i>",
				"<i class='fa fa-chevron-right fa-2x'></i>"]
		});
	}


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	$("#navigation").sticky({
		topSpacing: 0
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});



	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

	var slideHeight = $(window).height();

	$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);

	$(window).resize(function () {
		'use strict',
			$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);
	});



	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	(function () {
		var count = {
			initialized: false,
			initialize: function () {
				if (this.initialized)
					return;
				this.initialized = true;
				this.build();
			},
			build: function () {
				this.animations();
			},
			animations: function () {
				// Count To
				$(".counters-item [data-to]").each(function () {
					var $this = $(this);
					$this.appear(function () {
						$this.countTo({});
					}, {
							accX: 0,
							accY: -150
						});
				});
			},
		};
		count.initialize();
	})();


	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	$('#og-grid').mixItUp(); // Portfolio filter

	Grid.init(); //Portfolio Grid Expand

});


/* ========================================================================= */
/*	On scroll fade/bounce fffect
/* ========================================================================= */

wow = new WOW({
	animateClass: 'animated',
	offset: 120
});
wow.init();


/* ========================================================================= */
/*	Home page Slider
/* ========================================================================= */

$(function () {

	var Page = (function () {

		var $navArrows = $('#nav-arrows'),
			$nav = $('#nav-dots > span'),
			slitslider = $('#slitSlider').slitslider({

				speed: 1600,

				onBeforeChange: function (slide, pos) {

					$nav.removeClass('nav-dot-current');
					$nav.eq(pos).addClass('nav-dot-current');

				}
			}),

			init = function () {
				initEvents();
			},
			initEvents = function () {
				// add navigation events
				$navArrows.children(':last').on('click', function () {
					slitslider.next();
					return false;
				});

				$navArrows.children(':first').on('click', function () {
					slitslider.previous();
					return false;
				});

				$nav.each(function (i) {
					$(this).on('click', function (event) {
						var $dot = $(this);
						if (!slitslider.isActive()) {
							$nav.removeClass('nav-dot-current');
							$dot.addClass('nav-dot-current');
						}

						slitslider.jump(i + 1);
						return false;

					});
				});
			};
		return { init: init };

	})();

	Page.init();

});


/* ========================================================================= */
/*	Parallax Sections
/* ========================================================================= */

"use strict";

function parallaxInit() {
	$('#counter').parallax("50%", 0.3);
	$('#team-skills').parallax("50%", 0.3);
	$('#twitter-feed').parallax("50%", 0.3);
	$('#testimonial').parallax("50%", 0.3);
}

$(window).bind("load", function () {
	parallaxInit()
});


/* ========================================================================= */
/*	Navigation Sections
/* ========================================================================= */

function Toggle() {
	$(".body-down").toggle()
};

// Search Engine
(function () {
	var cx = '005905430136159387705:v3y8chmhpfg';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
	$("#btn-search").click(function () {
		$(".nav-search").toggle();
	});
})();

/* ========================================================================= */
/*	Why Us Sections
/* ========================================================================= */



/* ========================================================================= */
/*	Footer Sections
/* ========================================================================= */

//Translator
function googleTranslateElementInit() {
	new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
}

