//Responsive Navigation
$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#l-topnav'),
	  	  $menulink = $('.menu-link'),
	  	  $menuTrigger = $('.has-subnav > a');
	
	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});
	
	$menuTrigger.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active').next('ul').toggleClass('active');
	});
	
});

//Toggle Boxes
$(document).ready(function() {
  $('body').addClass('js');
  var $activatelink = $('.activate-link');
  
$activatelink.click(function() {
  $activatelink.toggleClass('active');
  $(this).parent().children('.content-toggle').toggleClass('active');
  return false;
});});
