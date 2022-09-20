$(function(){
    $('.ban_slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        nextArrow: ".click_right",
        prevArrow: ".click_left",
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
           
        ]
      });

    $('.all_course_slider ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        nextArrow: ".all_r",
        prevArrow: ".all_l", 
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
           
        ]
      });
    $('.creative_name_slide ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,  
        nextArrow: ".all_rr",
        prevArrow: ".all_li", 
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
           
        ]
      });
    $('.Fb_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,    
        nextArrow: ".fb_right",
        prevArrow: ".fb_left", 
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true, 
            }
          },
           
        ]
      });

      // counter js start
      $('.counter').counterUp({
        delay: 50,
        time: 5000
    }); 
      // counter js end

      $("button").click(function(){
        $("company_item").hide()
      })


      // stcky part start
      $(window).scroll(function(){
        var top = $(this).scrollTop()
        if(top > 300){
          $(".navbar").addClass("stcky_menu")
        }
        else{
          $(".navbar").removeClass("stcky_menu")
        }
        if(top > 300){
          $(".back_to_top").fadeIn(300)
        }
        else{
          $(".back_to_top").fadeOut(300)
        }
      }) 
      // stcky part end

      // back_to_top start 
      $(".back_to_top").click(function(){
        $("html,body").animate({scrollTop:0},1000)
      })
      // back_to_top end

      // hamburger js start here 
        $(() => {
          $('.hamburger').on('click', () => {
            $('.hamburger').toggleClass('active');
          })
        })
        // hamburger js end here 



   // venobox js start here
   new VenoBox({
    selector: '.my-video-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// venobox js end here 

























})