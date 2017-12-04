

window.onload = function()
{

  //icon Animations
$.fn.visible = function(partial){
        
        var $t              = $(this),
            $w              = $(window),
            viewTop         = $w.scrollTop(),
            viewBottom      = viewTop + $w.height(),
            _top            = $t.offset().top,
            _bottom         = _top + $t.height(),
            compareTop      = partial === true ? _bottom : _top,
            compareBottom   = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    }
    
$(document).ready(function(e){
        checkVisible();
    });

$(window).scroll(function(e){
        checkVisible();    
    });


function checkVisible()
{
    $('.menu-icon').each(function(i,k){
        if($(this).visible()){
            $(k).addClass('start-icon-animation');
        }
        /*else
        {
            $(k).removeClass('start-icon-animation');
        }*/
    });
}

// Page transitions
$('.menu-link').click(function(event) {
    event.preventDefault();
    var href = this.href;
$('.page-transition').addClass('transition-in').delay(1000).queue(
    function() {
        window.location = href;
    });
});

//smooth scroll

$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop:$(the_id).offset().top
  }, 1400, 'easeOutQuint');
  return false;
});

//text anim

$(function () {
    $('.txt-animate').textillate({
        in: {
            effect: 'fadeIn'
        }
    });
})

//Tout mon code JavaScript, dont le code faisant appel à GSAP
$('.loader-content').addClass('move-out');
$('.loader.illustration ').addClass('move-out');  
$('.hello').addClass('hello-anim');
$('.hello-sub').addClass('hello-sub-anim');


  var $lemurEye = $('#right-eye, #left-eye');
  TweenMax.from($lemurEye, 0.4, {scaleY:0, transformOrigin:'50% 50%', repeat: -1, repeatDelay:5});
  var $birdEye = $('#bird-eye');
  TweenMax.from($birdEye, 0.4, {scaleX:0, transformOrigin:'50% 50%', delay: 0.5, repeat: -1, repeatDelay:3});

  var $landscape = $('.landscape');
  TweenMax.from($landscape, 15, {scaleX:1.2, scaleY:1.2, alpha: 0, y:100, transformOrigin:'50% 50%',delay: 1});
/*
var $branches = $('#branches');
  TweenMax.from($branches, 15, { y: "+=50px", transformOrigin:'50% 50%',delay: 1});
var $lemur = $('#lemur');
  TweenMax.from($lemur, 15, { y: "+=50px", transformOrigin:'50% 50%',delay: 1});
var $mountainleft = $('#mountain1, #moutain3');
  TweenMax.from($mountainleft, 15, { x: "+=40px", transformOrigin:'50% 50%',delay: 1});
var $mountainright = $('#mountain2, #moutain4');
  TweenMax.from($mountainright, 15, { x: "+=40px", transformOrigin:'50% 50%',delay: 1});
*/




  var $pupil1 = $('#left-pupil,#right-pupil');

// Animates The Lemur's Eyes

  var pupil1movement = new TimelineMax({repeat: -1});
  pupil1movement.from($pupil1, 0.2, { x:"+=15px", transformOrigin:'50% 50%', delay: 2})
  .to($pupil1, 0.2, { x:"+=0px", transformOrigin:'50% 50%', delay: 2})
  .to($pupil1, 0.2, { x:"-=15px", transformOrigin:'50% 50%', delay: 2})
  .to($pupil1, 0.2, { x:"+=15px", transformOrigin:'50% 50%', delay: 3});



//Plays the soundc when menu clicked
function swoosh() {
  var audio = document.getElementById("swoosh");
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
}
//KickDrum Touch
$("#swoosh").on("tap", function() {
  $(this).KickPlay();
});
    masterTimeline.play();


}




//paste this code under the head tag or in a separate js file.
  // Wait for window load

