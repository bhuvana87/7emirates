$(window).ready(function() {

$('#slide_thumbs').carouFredSel({
synchronise: ['#slide_big', false, true],
auto: true,
align:'center',
duration:1500,
height:115,
direction:'left',
circular:true,
infinite:true,
responsive: true,
items: {
visible: 3,
start: -1,
minimum:3 },
scroll: {
items: 1,
onBefore: function( data ) {
data.items.old.eq(1).removeClass('selected');
data.items.visible.eq(1).addClass('selected');
}
},
prev: '#prev',
next: '#next',
});

var carousel = $("#slide_big");
$('#slide_big').carouFredSel({
auto: false,
items: 1,
responsive:true,
align:'center',
duration:1500,
onCreate : function () {
$(window).on("resize", function(){
carousel.parent().add(carousel).css("height", carousel.children().first().height() + "px");
}).trigger("resize");
},                     
scroll: {
fx: 'scroll'
}
});


$('#slide_thumbs img').click(function() {
$('#slide_thumbs').trigger( 'slideTo', [this, -1] );
});
$('#slide_thumbs img:eq(1)').addClass('selected');
});