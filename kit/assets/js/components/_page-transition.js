/*-----------------------------------------
Page Transitions
@todo: this can be better
------------------------------------------*/
(function($) {
  var pageTrans = {
    
    init: function(){
      var siteURL = "http://" + top.location.host.toString();
      var transLinks = $("a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../']");
      var noTransLinks = transLinks.not('.no-trans');

      setTimeout(function(){
        $("body").removeClass("ani-fade-in-page");
      },1500);

      noTransLinks.click(function(e){
        e.preventDefault();
        var linkLocation = this.href;

         function redirectPage() {
          window.location = linkLocation;
        }
        // Animations before Fade Out
        $(".offcanvas-menu, body").animate({
          //right: '-=2500'
          opacity: '0'}, {
          duration: 600,
          complete: function() { $("body").fadeOut(500, redirectPage); }
        }); 
      });
      $(window).unload(function() {
        $(window).unbind('unload');
      });
    
    // iOS Safari
    $(window).bind('pageshow', function(e) {
      if (e.originalEvent.persisted) {
        window.location.reload();
      }
    });
    },
  };
  pageTrans.init();
})(jQuery);
