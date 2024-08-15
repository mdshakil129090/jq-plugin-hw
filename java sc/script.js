$(document).ready(function(){
   
    // counter plugin


    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });
    // $(selector).countMe(delay,speed)

    $(".counters").countMe(40,8);
    $(".counters1").countMe(40,8);
    $(".counters2").countMe(40,8);

    $(".incremental-counter").incrementalCounter({
        
          "digits": 4
        
        });

        
        // aos practice


        AOS.init({
            duration:2000,
            delay:100,
            
        });
    //  preloader example

        $('.js-preloader').preloadinator({
            minTime: 500,
            animation:'fadeOut',

            animationDuration: 500,

          });

        //   owl owlCarousel
        $(".bnner-carousel ").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
          });
        //   slick slider
        
        $('.slick_slider').slick({
            dots:true,
            
            autoplay:true,
            autoplaySpeed:2000,
        });
        // multiple slick
        $('.multiple_slick').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots:true,
            autoplay:true,
            autoplaySpeed:2000,
        
            
          });
          
          $('.center_slick').slick({
           
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 3,
           
            dots:true,
            autoplay:true,
            autoplaySpeed:2000,
        
            
          });
        //   parallax
        jQuery('.parallax-layer').parallax({

            // jQuery object or selector of DOM node to use as mouseport
            mouseport: 'body',  
          
            // boolean | 0-1 | 'npx' | 'n%'
            xparallax: true,    
            yparallax: true,
          
            // 0-1 - Sets default alignment. Only has effect when parallax values are something other than 1 (or true, or '100%')
            xorigin: 0.5,     
            yorigin: 0.5,
          
            // 0-1 (0 instant, 1 forever) - Sets rate of decay curve for catching up with target mouse position
            decay: 0.66,    
          
            // Int (milliseconds)
            frameDuration: 30,      
          
            // String - Class added to layer when frozen
            freezeClass: 'freeze' 
            
          });
       
       
      
      
        



});
