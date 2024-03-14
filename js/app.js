$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            // 'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 100 // fade out at 400px from top
        });
        // $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });
    
    // video controls
    $('#state').on('click', function () {
        var video = $('#hero-vid').get(0);
        var icons = $('#state > span');
        $('#overlay').toggleClass('fade');
        if (video.paused) {
            video.play();
            icons.removeClass('fa-play').addClass('fa-pause');
        } else {
            video.pause();
            icons.removeClass('fa-pause').addClass('fa-play');
        }
    });
});

const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: false,
	speed: 1500,
	slidesPerView: 4,
	spaceBetween: 60,
	mousewheel: true,
	parallax: true,
	centeredSlides: true,
	effect: "coverflow",
	coverflowEffect: {
	  rotate: 40,
	  slideShadows: true
	},
	scrollbar: {
	  el: ".swiper-scrollbar"
	},
	breakpoints: {
	  0: {
		slidesPerView: 1,
		spaceBetween: 60
	  },
	  600: {
		slidesPerView: 2,
		spaceBetween: 60
	  },
	  1000: {
		slidesPerView: 3,
		spaceBetween: 60
	  },
	  1400: {
		slidesPerView: 4,
		spaceBetween: 60
	  },
	  2300: {
		slidesPerView: 5,
		spaceBetween: 60
	  },
	  2900: {
		slidesPerView: 6,
		spaceBetween: 60
	  }
	}
  });