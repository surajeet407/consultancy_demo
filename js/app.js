$(document).ready(function () {

    $('#ud_dots').delay(6050).fadeOut(300, function () {
        $('#ud_bg_left').animate({
            left: '-50%'
        }, 300);
        $('#ud_bg_right').animate({
            right: '-50%'
        }, 300, function () {
            $('#ud_preloader').fadeOut(10);
        });
    });

});
(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery
 $(document).ready(function () {
      $('.example-animation').DrSlider(); //Yes! that's it!
 });








var num = 130; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
