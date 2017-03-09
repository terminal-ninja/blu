(function($) {
  
  (function(d) {
    var config = {
      kitId: 'xov8dmt',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  $(document).ready(function(){
    function svgasimg() {
      return document.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    }

    if (!svgasimg()){
      var e = document.getElementsByTagName("img");
      if (!e.length){
        e = document.getElementsByTagName("IMG");
      }
      for (var i=0, n=e.length; i<n; i++){
        var img = e[i],
            src = img.getAttribute("src");
        if (src.match(/svgz?$/)) {
          /* URL ends in svg or svgz */
          img.setAttribute("src",
                 img.getAttribute("data-fallback"));
        }
      }
    }

    $('.slider-hero').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    });

    $('.slider-industries').slick({
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      centerMode: true,
      speed: 800,
      // centerPadding: '60px',
      slidesToShow: 7,    
    });
    // $('.slider-industries').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //   console.log(nextSlide);
    //   $('.slick-center').prev().prev('.icon').addClass('top-padded-small');    
    //   $('.slick-center').prev().prev().prev('.icon').removeClass('top-padded-small');    
    //   $('.slick-center').prev().prev().prev('.icon').addClass('top-padded-large');    
    //   $('.slick-center').prev().prev().prev().prev('.icon').removeClass('top-padded-small');    
    //   $('.slick-center').prev().prev().prev().prev('.icon').removeClass('top-padded-large');    
    // });

    $('.slider-footprint').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    });

    $(function() {
     $('a[href*="#-sc-"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html, body').animate({
             scrollTop: target.offset().top - 150
           }, 1000);
           return false;
         }
       }
     });
    });

    $("#watch").click(function() {
        var video = $("#video").get(0);
        video.play();

        $("#overlay").css("visibility", "hidden");
        return false;
    });

    $("#watchtext").click(function() {
        var video = $("#video").get(0);
        video.play();

        $("#overlay").css("visibility", "hidden");
        return false;
    });
    
    $(".searchicon").click(function() {
      $(".searchfield").show();
      $(".searchicon").hide();
      $(".search-submit").css('display', 'block');
    });

    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors:['hero', 'workforce', 'journey', 'technology', 'glance', 'industries', 'business', 'cocreate', 'footprint', 'solutions', 'connect', 'contact', 'footer' ],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13'],
      showActiveTooltip: true,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: true,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      scrollingSpeed: 800,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      lazyLoading: true,

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    $('.lines-closed').click(function(){  
      $('.mainmenu').animate({opacity: 1}, 300);
      $('.lines-closed').addClass('hidden');      
      $('.lines-open').addClass('shown');              
      $('.lines-open i').addClass('animated');            
      $('.mainmenu').css('display', 'block');
    });  

    $('.lines-open').click(function(){
      $('.mainmenu').animate({opacity: 0}, 300);
      $('.lines-closed').removeClass('hidden');                  
      $('.lines-open').removeClass('shown');            
      $('.lines-open i').removeClass('animated');                      
      $('.mainmenu').css('display', 'none');
    });

    $('.mainmenu a').click(function(){  
      $('.mainmenu').animate({opacity: 0}, 300);
      $('.lines-closed').removeClass('hidden');                  
      $('.lines-open').removeClass('shown');            
      $('.lines-open i').removeClass('animated');            
      $('.mainmenu').css('display', 'none');
    });    

  });


})(jQuery);