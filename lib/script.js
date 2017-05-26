(function($) {
    $(document).ready(function() {
        $('.side-nav-toggle').on('click', function() {
            $(this).toggleClass('side-nav-toggled');
            $('.side-nav').slideToggle();
        });
    });
})(jQuery);