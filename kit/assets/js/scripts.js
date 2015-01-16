
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
-Script Details
-----------------------------------------------  */ 

});
}).call(this);







