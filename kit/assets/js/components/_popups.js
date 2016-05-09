/*---------------------------------------------
PopUps

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
      popup: $('[data-popup]').data('popup'),
      closer: $('.js-close-popup'),
      input: $('input'),
      isOpen: 'popup--is-open',
    },

    init: function(){
      s = this.settings;
      this.bindEvents();
    },

      bindEvents: function() {
        s.popupLink.click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          popUps.openPopup();
        });

        s.closer.click(function(e) {
          e.preventDefault();
          popUps.closePopup();
        });

        // Close on escape
        s.input.bind('copy', function() {
          popUps.closePopup();
        });

        // Close on escape
        $(document).keyup(function(e) {
          if ($('body').hasClass(s.isOpen) && e.which === 27) {
            popUps.closePopup();
          }
        });

        $('body').click(function() {
          popUps.closePopup();
        });
      },
 
      openPopup: function() {
        $('#'+s.popup).addClass(s.isOpen);
        $('body').addClass(s.isOpen);
      },
      closePopup: function() {
        $('#'+s.popup).removeClass(s.isOpen);
        $('body').removeClass('popup--is-open');
      },
    };
  popUps.init();
})(jQuery);