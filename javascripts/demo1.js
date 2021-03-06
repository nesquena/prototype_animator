document.observe('dom:loaded', function() {
	// box 1 using the animateSwitch function (switches between two specified classes)
	$('one').animateSwap('blue', 'red', { duration : '3000' });
	$('one').observe('click', function() {
		$('one').animateSwap('red short', 'green long');
	});
	
	// box 2 using the animate function (specifies precisely the classes to exist on an element)
	$('two').animate('boxed green short', { duration : '2000', delay : 2 });
	$('two').observe('click', function() {
		$('two').animate('boxed purple wide', { duration : '2000' });
	});
});
