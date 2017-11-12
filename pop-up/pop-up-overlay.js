

// remove the registerOverlay call to disable the close button
hs.registerOverlay({
	overlayId: 'closebutton',
	position: 'top right',
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});

hs.graphicsDir = 'pop-up/graphics/';