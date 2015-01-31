
/*----------------------------------------------   
--Scripts and Inits
-----------------------------------------------  */ 
(function() {
  $(function() {


/*----------------------------------------------   
--Mobile Nav
-----------------------------------------------  */ 
$("#trigger-nav, .closed, .siteoverlay").click(function (e) {
  $("main, header, nav, #trigger-nav, footer, .siteoverlay").toggleClass("js-nav-open");
  e.preventDefault();
 });
 
/*----------------------------------------------   
--Parallax
-----------------------------------------------  */    
  //bg images
  $('.js-parallax').each(function() {
    $(this).parallax('50%', 0.2, true);
  });

/*----------------------------------------------   
-Simple Scroll To Anchor
-----------------------------------------------  */
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = "#js-scrolly",
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
      }, 600, 'swing');
    });
/*----------------------------------------------   
-Disable hovers on scroll
-----------------------------------------------  */
    var body = document.body,
      timer;
    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if (!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }
      timer = setTimeout(function() {
        body.classList.remove('disable-hover')
      }, 100);
    }, false);
    var eT = 0;
    $('.sect-blocks article').hide().each(function() {
      $(this).delay(eT).fadeIn(1000);
      eT += 350;
    });
    
 /*----------------------------------------------   
 -Color Overlays on Hover
 -----------------------------------------------  */
     $(".home a.alpha").hover(function() {
       $(".overlay").toggleClass("overlay-alpha");
     }); 
    
});
}).call(this);







