function codeAddress() {
  setTimeout(function(){
    $(".loader").addClass("blink");
    console.log('blink');
  }, 1000);

}
window.onload = codeAddress;


$("body").mousemove(function(e) {

  // console.log("mouse move");

  let mouseX = e.pageX;
  let mouseY = e.pageY;


  // let mouseYCenter = e.pageY - innerHeight/2;

  // Name following cursor animation --------------------------------------
  let movingDelay = new TimelineMax();

  movingDelay.add([
    TweenMax.fromTo(".circle-cursor", .5, {autoAlpha:1, css:{position:"fixed"}}, {left: mouseX, top: mouseY, ease: Power2.easeOut}, 0.1),
    TweenMax.fromTo(".text-cursor", 1, {autoAlpha:1, css:{position:"fixed"}}, {left: mouseX, top: mouseY, autoAlpha:0, ease: Power2.easeOut}, 0.5),
  ])


});

//MOUSE MOVE ON WORDS

$('.word1').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient = new TimelineMax();
  gradient.add([
    TweenMax.to(".word1", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word2').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient2 = new TimelineMax();
  gradient2.add([
    TweenMax.to(".word2", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word3').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient3 = new TimelineMax();
  gradient3.add([
    TweenMax.to(".word3", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word4').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient4 = new TimelineMax();
  gradient4.add([
    TweenMax.to(".word4", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});


$('.word5').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient5 = new TimelineMax();
  gradient5.add([
    TweenMax.to(".word5", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word6').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient6 = new TimelineMax();
  gradient6.add([
    TweenMax.to(".word6", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});


//MOUSE LEAVE

$('.word1').mouseleave(function(e){
  let gradientRestart1 = new TimelineMax();
  gradientRestart1.add([
    TweenMax.to(".word1", 2, {left: '-100%', ease: Power2.easeOut}),
  ])
});

$('.word2').mouseleave(function(e){
  let gradientRestart2 = new TimelineMax();
  gradientRestart2.add([
    TweenMax.to(".word2", 2, {left: '-100%', ease: Power2.easeOut}),
  ])
});

$('.word3').mouseleave(function(e){
  let gradientRestart3 = new TimelineMax();
  gradientRestart3.add([
    TweenMax.to(".word3", 2, {left: '-100%', ease: Power2.easeOut}),
  ])
});

$('.word4').mouseleave(function(e){
  let gradientRestart4 = new TimelineMax();
  gradientRestart4.add([
    TweenMax.to(".word4", 2, {left: '-100%', ease: Power2.easeOut}),
  ])
});

$('.word5').mouseleave(function(e){
  let gradientRestart5 = new TimelineMax();
  gradientRestart5.add([
    TweenMax.to(".word5", 2, {left: '-100%', ease: Power2.easeOut}),
  ])
});

$('.word6').mouseleave(function(e){
  let gradientRestart6 = new TimelineMax();
  gradientRestart6.add([
    TweenMax.to(".word6", 2, {left: '-100%', ease: Power2.easeOut}),
  ])
});


// $('.word1').mousemove(function(e)) {
//
//   let mouseXCenter = e.pageX - innerWidth/2;
//
//   let gradient = new TimelineMax();
//
//   gradient.add([
//     TweenMax.to(".word1", .5, {left: mouseXCenter, ease: Power2.easeOut}),
//   ])
//
// });




function negative(){

  setTimeout(function(){
    window.location.href = 'about/index.html';
  },1500);

  $(".page-home").toggleClass("page-change");

  // mesh.position.set(0,0,-250);
  renderer.setClearColor(0xffff00);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.staggerFromTo("#myCanvas", 2, {autoAlpha:1}, {autoAlpha:0, scaleX:5, scaleY:5 , ease: Power4.easeInOut}, 0.1),
  ])

};

var controller = new ScrollMagic.Controller();

// Create scene
// var scene = new ScrollMagic.Scene({
//     triggerElement: ".else",
//     duration: '100%'
// })
// .addTo(controller);





$('.word1').click(function(){
  setTimeout(function(){
    window.location.href = '../print/index.html';
  },2500);

  let ajax = new TimelineMax();

  ajax.add(TweenMax.fromTo( '.before', .5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut}),)
      .add(TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5}, {autoAlpha:0, scaleX:6, scaleY:6 , ease: Power4.easeInOut}),)

});

$('.word2').click(function(){
  setTimeout(function(){
    window.location.href = '../copyrights/index.html';
  },2500);

  let ajax = new TimelineMax();

  ajax.add(TweenMax.fromTo( '.before', .5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut}),)
      .add(TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5}, {autoAlpha:0, scaleX:6, scaleY:6 , ease: Power4.easeInOut}),)

});

$('.word3').click(function(){
  setTimeout(function(){
    window.location.href = '../pigments/index.html';
  },2500);

  let ajax = new TimelineMax();

  ajax.add(TweenMax.fromTo( '.before', .5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut}),)
      .add(TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5}, {autoAlpha:0, scaleX:6, scaleY:6 , ease: Power4.easeInOut}),)
});

$('.word4').click(function(){
  setTimeout(function(){
    window.location.href = '../uniqueness/index.html';
  },2500);

  let ajax = new TimelineMax();

  ajax.add(TweenMax.fromTo( '.before', .5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut}),)
      .add(TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5}, {autoAlpha:0, scaleX:6, scaleY:6 , ease: Power4.easeInOut}),)
});

$('.word5').click(function(){
  setTimeout(function(){
    window.location.href = '../monochrome/index.html';
  },2500);

  let ajax = new TimelineMax();

  ajax.add(TweenMax.fromTo( '.before', .5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut}),)
      .add(TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5}, {autoAlpha:0, scaleX:6, scaleY:6 , ease: Power4.easeInOut}),)
});

$('.word6').click(function(){
  setTimeout(function(){
    window.location.href = '../anthropometry/index.html';
  },2500);

  let ajax = new TimelineMax();

  ajax.add(TweenMax.fromTo( '.before', .5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut}),)
      .add(TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5}, {autoAlpha:0, scaleX:6, scaleY:6 , ease: Power4.easeInOut}),)
});
