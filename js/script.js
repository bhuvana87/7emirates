var ww = document.body.clientWidth;

$(document).ready(function() {
   $(".l-topnav1 li a").each(function() {
      if ($(this).next().length > 0) {
         $(this).addClass("parent");
      };
   })
   
   $(".toggleMenu").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(".l-topnav1").toggle();
   });
   adjustMenu();
})

$(window).bind('resize orientationchange', function() {
   ww = document.body.clientWidth;
   adjustMenu();
});

var adjustMenu = function() {
   if (ww <768) {
      $(".toggleMenu").css("display", "inline-block");
      if (!$(".toggleMenu").hasClass("active")) {
         $(".l-topnav1").hide();
      } else {
         $(".l-topnav1").show();
      }
      $(".l-topnav1 li").unbind('mouseenter mouseleave');
      $(".l-topnav1 li a.parent").unbind('click').bind('click', function(e) {
         // must be attached to anchor element to prevent bubbling





        e.preventDefault();
         $(this).parent("li").toggleClass("hover");
      });
   } 
   else if (ww >= 768) {
      $(".toggleMenu").css("display", "none");
      $(".l-topnav1").show();
      $(".l-topnav1 li").removeClass("hover");
      $(".l-topnav1 li a").unbind('click');
      $(".l-topnav1 li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
          // must be attached to li so that mouseleave is not triggered when hover over submenu




          $(this).toggleClass('hover');
      });
   }
}

/*Toggle Bucket Function*/
function showBox(Num){
var on = "/images/bucket-plus.jpg";
var off = "/images/bucket-minus.jpg";
if(document.getElementById(Num).style.display=="none"){
document.getElementById(Num).style.display = "block";
document.getElementById('home_link').style.height='auto';
document.getElementById('img'+Num).src = off;
}else{
document.getElementById(Num).style.display = "none";
document.getElementById('home_link').style.height='80px';
document.getElementById('img'+Num).src = on;
}
}