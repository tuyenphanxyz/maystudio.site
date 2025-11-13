(function($) {
  'use strict';

  // ================================== Preloader ==================================
  $(window).on('load', function() {
    var preloaderFadeOutTime = 500;
    setTimeout(function() {
      $('.spinner-wrapper').fadeOut(preloaderFadeOutTime);
    }, 500);
  });

  $(document).ready(function() {
    var lastScrollTop = 0;
    var scrollThreshold = 200;

    // ================================== Scroll Events ==================================
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

      // Toggle header scrolled class and logo display
      if (scrollTop > 100) {
        $('.header-dark').addClass('scrolled');
        $('.logo-white').hide();
        $('.logo-dark').show();
      } else {
        $('.header-dark').removeClass('scrolled');
        $('.logo-white').show();
        $('.logo-dark').hide();
      }

      // Hide header on scroll down (only for desktop)
      if ($(window).width() > 992) {
        if (scrollTop > scrollThreshold) {
          $('.header-dark').css('top', scrollTop > lastScrollTop ? '-130px' : '0');
          lastScrollTop = scrollTop;
        }
      } else {
        $('.header-dark').css('top', '0');
      }

      // Back-to-Top button toggle
      $('.back-top').toggleClass('active', scrollTop > 300);
    });

    // ================================== Back-to-Top Click ==================================
    $('.back-top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 700);
      return false;
    });

    // ================================== Swiper Initialization ==================================
    var swiperHotels = new Swiper(".swiper-hotels", {
      spaceBetween: 30,
      freeMode: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
        375: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 }
      }
    });

    var swiperCoupon = new Swiper(".swiper-coupon", {
      spaceBetween: 30,
      freeMode: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      autoplay: { delay: 2000 },
      breakpoints: {
        375: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 }
      }
    });

    var swiperTestimonials = new Swiper(".swiper-testimonials", {
      spaceBetween: 30,
      freeMode: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      autoplay: { delay: 2000 },
      breakpoints: {
        375: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 }
      }
    });

    // ================================== AOS Initialization ==================================
    AOS.init();
  });
})(jQuery);
