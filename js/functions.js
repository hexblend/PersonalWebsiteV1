(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    //Scroll Reveal
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.title-reveal', { duration: 700, mobile: true, origin: 'bottom', distance: '100px', scale: 0.7 });
    
    
    // Progress Bars
    $(".progress-element").each(function() {
      $(this).waypoint(function() {
      var progressBar = $(".progress-bar");
      progressBar.each(function(indx){
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    }, {
      triggerOnce: true,
      offset: 'bottom-in-view'
    });
    });
    
    
})(jQuery);
