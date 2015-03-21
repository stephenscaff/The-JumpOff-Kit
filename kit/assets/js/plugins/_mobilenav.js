/*----------------------------------------------   
--Simple Offcanvas Mobile Nav
Dependancies: partials/_mobilenav.scss
-----------------------------------------------  */ 
$("#trigger-nav, .closed, .siteoverlay").click(function (e) {
  $("main, header, nav, #trigger-nav, footer, .siteoverlay").toggleClass("js-nav-open");
  e.preventDefault();
 });