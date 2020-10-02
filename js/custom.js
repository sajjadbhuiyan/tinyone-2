$(document).ready(function(){
   $navOffset=$('#navigation').offset().top;
            
    // navOffset ends 
        $top_offset=300;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },800);
        });
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#navigation").addClass('navfixed');
            }else{
                $("#navigation").removeClass('navfixed');
            }
        // navOffset ends
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }
        }); 
    
    
//    ====slick Part start=====
    
    $('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
})
//    ====slick Part end=====
//    --------------------------------------------------------------------------------------------------------------
    
    
//    =======veno part start=====
    
    $('.venobox').venobox();
//    =======veno part end=======
//    ---------------------------------------------------------
    
//    =====wow code start====
    
  new WOW().init();
    
//    =====wow code end====
    
});