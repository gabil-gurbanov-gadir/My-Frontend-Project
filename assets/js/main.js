$(document).ready(function() {
    $(window).on('load', (event) => {
        $('#preloader').addClass('d-none');

        if ($('#searchBtn').length) {
            $('#searchBtn').click(function(e) {
                e.preventDefault();
                $('#searchBtn').next().toggleClass('show');
            })
        };
        if ($('#menuBtn').length) {
            $('#menuBtn').click(function(e) {
                e.preventDefault();
                $('#menuBtn').next().addClass('on');
            });
        };
        if ($('#closeBtn').length) {
            $('#closeBtn').click(function(e) {
                e.preventDefault();
                $('#closeBtn').parent('.side-menu').removeClass('on');
            });
        };
        if ($('.feature-items').length) {
            $('.feature-items').owlCarousel({
                loop: true,
                nav: false,
                margin: 30,
                dots: true,
                autoplay: true,
                items: 1,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        stagePadding: 100,
                    }
                }
            });
        };
        $('.timer').countTo();
        if (screen.width < 992) {
            $('#responsiveBtn').click(function(e) {
                e.preventDefault();
                $('#nav .navbar .collapse').toggleClass('show');
            })
            $('#nav li.nav-item').each(function(elem) {
                $(this).click(function(e) {
                    e.preventDefault();
                    console.log($(this).children('ul.dropdown-menu'));
                    $(this).children('ul.dropdown-menu').toggleClass('show');

                })
            });
        } else {
            $('#nav li.nav-item').each(function(elem) {
                $(this).on('mouseenter', function(e) {
                    $(this).children('ul.dropdown-menu').addClass('show');
                });
                $(this).on('mouseleave', function() {
                    $(this).children('ul.dropdown-menu').removeClass('show');
                })
            });
        };
        wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: true, // default
            live: true // default
        })
        wow.init();
    });
});