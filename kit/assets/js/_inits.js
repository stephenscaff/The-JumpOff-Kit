/*jshint -W030*/
/*globals feature: false */

/* This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression


/*---------------------------------------------
INit Mixitup
----------------------------------------------*/
var site = {
    init: function(){

      //Features 
      $("html").removeClass("no-js");

      if (!feature.svg) {
        $("html").addClass("no-svg");
      }
      if (!feature.cssFlexbox) {
        $("html").addClass("no-flexbox");
      }


      $('.js-parallax').parallax(6, 'false');
    },
};

$(function(){
    site.init(); // On doc ready, initalize script
});
