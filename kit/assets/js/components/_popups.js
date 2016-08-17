 /*---------------------------------------------
PopUps

@version: 1.2 (added aria support)
@description: 
For stuff like modals and popups. 
Uses data atts to support multiple unique instances.

@see: scss/components
@useage:  
  link: <a href="" data-popup="modal-popup">Poppin and Rockin</a>
  el to pop: <article id="modal-popup">Rock it don't stop</article>
----------------------------------------------*/
(function($) {
  var s,
  popUps = {

    settings: {
      popupLink: $('[data-popup]'),
      popupData: $('[data-popup]').data('popup'),
      popup: $('.popup'),
      popupVid: $('popup__vid'),
      popupVidData: $('[data-vid]'),
      closer: $('.js-close-popup'),
      input: $('input'),
      isOpen: 'popup--is-open',

    },

    init: function(){
      s = this.settings;
      this.bindEvents();
    },

    bindEvents: function() {

      // Open it up
      s.popupLink.click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        popUps.openPopup();
        s.closer.focus();
        // If popup has data-vid
        if(s.popupVidData.length) {  
          popUps.playVideo();
        }
      });
      // Close it up
      s.closer.click(function(e) {
        e.preventDefault();
        popUps.closePopup();

        // If popup has data-vid
        if(s.popupVidData.length) {  
          popUps.stopVideo();
        }
      });

      // Close on ctrl c
      s.input.bind('copy', function() {
        popUps.closePopup();
        s.popupLink.focus();
      });

      // Close on escape
      $(document).keyup(function(e) {
        if ($('body').hasClass(s.isOpen) && e.which === 27) {
          popUps.closePopup();
          s.popupLink.focus();
          // If popup has data-vid
          if(s.popupVidData.length) {  
            popUps.stopVideo();
          }
        }
      });
      // Close if clicked anywhere
      $('body').click(function() {
        if ($('body').hasClass(s.isOpen)) {
          popUps.closePopup();
          s.popupLink.focus();
        }
      });
    },
    // OPEN POPUP
    openPopup: function() {
      $('#'+s.popupData).addClass(s.isOpen);
      $('body').addClass(s.isOpen);
      s.popup.attr('aria-hidden', 'false'); //@since v1.2
    },

    // CLOSE POPUP
    closePopup: function() {
      $('#'+s.popupData).removeClass(s.isOpen);
      $('body').removeClass('popup--is-open');
      s.popup.attr('aria-hidden', 'true'); //@since v1.2
    },

    // PLAY VIDEO
    playVideo: function(){
      var vimeoURL = $(".popup__vid").data("vid");
      $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(vimeoURL) + '&title=0&byline=0&color=c5a47e&autoplay=1&callback=?', 
      function(data){
        $('.popup__vid').html(data.html);
      });
    },

    // STOP VIDEO
    stopVideo: function(){
      //var vimeourl = $(".popup__vid").data('vid');
       $(".popup__vid").empty();
    }
  };

  // INIT
  if($("[data-popup]").length) {  
    popUps.init();
  }
})(jQuery);