/*----------------------------------------
Page Transitions
------------------------------------------*/

//Fade in page all sexy like
$('body').addClass('kf-fade-in-2');

//Dump the fade-in class - prevent weird webkit shit  
setTimeout(function(){
$("body").removeClass("kf-fade-in-2");
},2100);


//PAGE TRANSITIONS - Leaving page fades
$.fn.leavePage = function() {   
this.click(function(event){

// Hold up on heading to the next page.
event.preventDefault();
linkLocation = this.href;

// Fade out first - all sexy like.
$('header').animate({'opacity':'0', 'top':'-92px'}, 500, 'easeOutExpo');
$('body').animate('slow').fadeOut(500, function(){

// Alighty - now head over to new page.
window.location = linkLocation;
$('header').stop().animate({'opacity': '1', 'top':'0'}, 1000);
});      
}); 
};
//apply the leave page transition to certian links
$('a.js-trans').leavePage();

