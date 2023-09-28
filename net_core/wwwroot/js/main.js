//
// This is The Scripts used for Simply Theme
//
function main() {
	(function () {
		'use strict'
		//Script
		//-----------------------------------
		jQuery(document).ready(function ($) {
			var wd = $(window).width();

			var wd = jQuery(window).width();
			/* ---------------------------------------------- /*
				* MenuMobie
			/* ---------------------------------------------- */
			$('.rst-menu-trigger').click(function () {
				$('.menu-main').slideToggle(400);
				$(this).toggleClass('exit');
				$(this).parents('#header').toggleClass('click-menu');
				return false;
			});
			// ---------------- sub menu ---------------------------
			$('.click-mobile').click(function () {
				$('.menu').slideToggle(400);
				return false;
			});
			$('a[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 200
                    }, 2000);
                }
            });

		});
		// $("#myVideo")[0].autoplay = true;

		$('.rst-menu ul li a').on('click', function () {
			$('.active').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		//---------------- fixed -----------------
		jQuery(window).scroll(function ($) {
			var hg_scroll = jQuery(window).scrollTop();
			if (hg_scroll >= 300) {
				jQuery('header').addClass('is-sticky-opening');
				jQuery('.height-header').addClass('is-opening');
			} else {
				jQuery('header').removeClass('is-sticky-opening');
				jQuery('.height-header').removeClass('is-opening');
			}

		});

		$(".srl-bottom").click(function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $("#footer").offset().top
			}, 5000);
		});

		$(".click-popup").fancybox();

		$('.btn-notification .btn-notification-cl').hover(function () {
			$('.btn-notification').addClass('is-hover');
		}, function () {
			$('.btn-notification').delay(20).queue(function (next) {
				$('.btn-notification').removeClass('is-hover').addClass('is-leave');
				next();
			});
			$('.btn-notification').delay(500).queue(function (next) {
				$('.btn-notification').removeClass('is-leave');
				next();
			});
		});

		$(".srcool-top").click(function () {
			$("html, body").animate({
				scrollTop: 0

			}, 1000)

		});

	}());
}
main();