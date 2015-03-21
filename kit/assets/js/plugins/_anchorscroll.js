 /*----------------------------------------------   
 Simple Scroll To Anchor
 Author: Stephen Scaff
 
 Usage:
 
 Link:
 <a href="sect-about" id="">About</a>
 
 Target
 <section id="sect-about"></section>
 -----------------------------------------------  */  	
$('a[data-scroll]').click(function(e) {
	e.preventDefault();

	var target = ( '#' + $(this).data('scroll') );
	var $target = $(target);

	$('html, body').stop().animate({
	    'scrollTop': $target.offset().top - 70
	}, 800, 'swing');
}); 