document.observe('dom:loaded', function() {
	// box 1 using the animateSwitch function (switches between two specified classes)
	$('one').animateSwap('blue', 'red', { duration : '2000' });
	$('one').observe('click', function() {
		$('one').animateSwap('red short', 'green long', { duration : '2000' });
	});
	
	// box 2 using the animate function (specifies precisely the classes to exist on an element)
	$('two').animate('box green short', { duration : '2000' });
	$('two').observe('click', function() {
		$('two').animate('box purple wide', { duration : '2000' });
	});
});
