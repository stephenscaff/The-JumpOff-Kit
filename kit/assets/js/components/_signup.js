/*----------------------------------------   
-Mail CHimp Signup

@useage:

$title = get_sub_field('title');
$text = get_sub_field('text');
$message = get_sub_field('message');
<section class="signup" data-scroll="fade-in">
  <div class="grid grid--pad center-all">
    <header class="signup__header">
      <?php if ($title): ?><h3 class="signup__title"><?php echo $title; ?></h3><?php endif; ?>
      <?php if ($text): ?><p><?php echo $text; ?></p><?php endif; ?>
    </header>
    <form class="signup__form form--light" id="mc-signup" name="mc-embedded-subscribe-form" action="https://thesparknotebook.us9.list-manage.com/subscribe/post-json?u=781be0d8ba90ae22d15e349df&amp;id=eea5992c55&amp;c=?" method="POST" target="_blank" novalidate>
      
      <div class="signup__inputs">
        <input class="signup__input email" id="mce-EMAIL" name="EMAIL"  value="" type="email" aria-label="Email Address" aria-required="true" placeholder="Enter you email address">
        <div style="position: absolute; left: -5000px;"><input type="text" name="u=781be0d8ba90ae22d15e349df_eea5992c55" value=""></div>
        <input type="submit" class="signup__submit btn btn--dark" value="Subscribe" name="subscribe" id="mc-submit"  aria-label="Submit" title="Submit">
      </div>
    </form>
    <!-- Signup Message -->
    <div class="signup__message">
      <?php if ($message): ?><p><?php echo $message; ?></p><?php endif; ?>
    </div>  
  </div>
</section>

<section class="signup-notice"></section>
-----------------------------------------*/
function register($form) {
  $.ajax({
    type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      timeout: 5000, // Set timeout value, 5 seconds
      cache       : false,
      dataType    : 'jsonp',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { $('.signup-notice').html('<span class="alert">Sorry Dave. I can not do that. Try again later.</span>'); },
      success     : function(data) {
      var message;
      if (data.result !== "success") {
        message = data.msg.substring();
        $('.signup-notice').addClass("error").fadeIn(300).html('<span class="alert">'+message+'</span>');
      } 

      else {
        message = data.msg;
        $('body').addClass("submit-success");
        $('.signup__form').addClass("fade-out").fadeOut(500);
        $('.signup-notice').removeClass("error").addClass("success").html('<span class="success">'+message+'</span>');
        
      
        setTimeout(function(){
          $('.signup-notice.success').slideUp(600); 
         }, 3000); 
      }
    }
  });
}

$(function () {
  var $form = $('#mc-signup');
  $('#mc-submit').on('click', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});
