
document.observe('dom:loaded', function() {
	var a = $('one');
	a.animate('red short', { duration : '4000' });
	
	$('one').observe('click', function() {
		a.animate('green long', { duration : '2000' });
	})
});

/*
document.observe('dom:loaded', function() {
	var a = $('one');
	// Animator.apply(a, ["blue short", "red short"], { duration : 3000 }).play();
	Animator.apply(a, "red short", { duration : 3000, startClassNames : 'blue short' }).play();
	
	$('one').observe('click', function() {
		//anim.clearSubjects();
		//anim.addSubject(new CSSStyleSubject(a, "green short"));
		//anim.seekTo(2);
	  //new Animator().addSubject(new ColorStyleSubject(a, 'background-color', "#F99", "#9F9")).play();
	  // Animator.apply(a, ["red short", "green short"], { duration: 3000 }).play();
	 	Animator.apply(a, "green short", { duration: 3000 }).play();
	})
});
*/
