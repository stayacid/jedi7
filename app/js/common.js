$(function () {
    //Настройка меню
   $("#my-menu").mmenu({
       extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
       navbar: {
           title: '<img src="img/logo-1.svg" alt="Салон красоты S&Mitler">'
       },
       offCanvas: {
           position: 'right'
       }
   });
    var apiMenu = $("#my-menu").data('mmenu');
    apiMenu.bind('opened', function() {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    });
    //Задержка загрузки высоты карусели
    $('.carousel-services').on('initialized.owl.carousel', function() {
        setTimeout(function() {
            carouselService()
        }, 100);
    });
    //Настройка карусели
    $('.carousel-services').owlCarousel({
        //loop: true,
        nav: true,
        dots: false,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1100: {
                items: 3,
            }
        }
    });

    //Задаем высоту картинки в карусели такую же, как высота контента
    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this),
                thsh = ths.find('.carousel-services-content').outerHeight();
                ths.find('.carousel-services-image').css('min-height', thsh);
        });
    }carouselService();

    //Обернуть последнее слово в заголовке в span
    $('.carousel-services-composition .h3').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

    //Обернуть первое слово в заголовке в span
    $('section .h2').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    //Задаем одинаковую высоту у .carousel-services-content, ориентируясь по большей при ресайзе окна
    function onResize() {
        $('.carousel-services-content').equalHeights();
    }onResize();
    window.onresize = function() {onResize()};

    $('select').selectize({
        create: true
    });
    
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        autoHeight: true
    });

    $('.partners').owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });

    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });


    $("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
    });
    
    $(window).on('load', function() {
        $('.preloader').delay(1000).fadeOut('slow');
    });
    
});


