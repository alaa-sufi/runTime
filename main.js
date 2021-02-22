//make header full screen
// $(".header").innerHeight($(window).innerHeight() - $(".navbar").innerHeight());
//increase numbers
var speed = 10;
var c=0;
/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.text(i);
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}
//increase on scroll for once
$(window).scroll(function () {
  if ($(window).scrollTop() > $(".increase").offset().top - ($(window).innerHeight()*0.75) && c == 0) {
    $(".increase .inc").each(function () {
      incNbrRec(0, Number($(this).text()), $(this));

    });
    c = 1;
  }
  //resize nav on scroll
  if($(window).scrollTop() > 100){
    $(".navbar").css({
      "padding-top":0,
      "padding-bottom":0
    });
    $(".navbar .navbar-brand .logo-parent svg").css("width","2rem");
    
  }
  else{
   $(".navbar").css({
      "padding-top":"0.5rem",
      "padding-bottom":"0.5rem"
    });
    $(".navbar .navbar-brand .logo-parent svg").css("width","3rem");
  }
});


//go to home page by click logo
$(".logo").attr("href",window.location.protocol + "//" + window.location.host)


//loading
var loading = $('.loading svg');
$("body").css("overflow","hidden");
loading.addClass('active');
$(document).ready(function(){
  //$('.loading').hide();
   setTimeout(function(){
     $('.loading').fadeOut(100);
     $("body").css("overflow-y","scroll");
    },1000);
   

});

