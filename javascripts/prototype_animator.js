/* 

= Examples =

$('one').animate('red short');
$$('.hey').animate('red short');
$$('.hey').animate('red short', { startClassNames : 'blue long', duration : '2000', onComplete : function() { alert('done'); } });

$('one').animateSwap('blue short', 'red long', { duration : '4000' });

= Transitions =

* Animator.tx.easeInOut is the default transition, and creates a smooth effect
* Animator.tx.linear maintains a constant rate of animation
* Animator.tx.easeIn starts slow, gets faster
* Animator.tx.strongEaseIn exaggerated version of the above
* Animator.tx.easeOut starts fast, gets slower
* Animator.tx.strongEaseOut exaggerated version of the above
* Animator.tx.elastic go slightly past the target point, then be drawn back
* Animator.tx.veryElastic as above, but with an extra pass
* Animator.tx.bouncy Hit the target point then bounce back
* Animator.tx.veryBouncy as above, but with an extra 2 bounces

= Options =

 * startClassNames : 'small white'
 * interval: 20,  // time between animation frames
 * duration: 400, // length of animation
 * onComplete: function(){}
 * onStep: function(){}
 * transition: Animator.tx.easeInOut

*/

var AnimationAdapter = {
	animate : function(elements, destClassNames, animationOptions) {
		if (animationOptions != null && animationOptions.startClassNames != null) {
			var animator = Animator.apply(elements, [ animationOptions.startClassNames, destClassNames ], animationOptions);
		} else { // use current styles as starting state
		  var animator = Animator.apply(elements, destClassNames, animationOptions);
		}
		animator.play();
    return elements;
	},
	// changes the element by removing start class names, and adding dest class names through animations
	// leaves classes that are not mentioned untouched on element
	animateSwap : function(el, startClassNames, destClassNames, animationOptions) {
		var currentClassNames = $w(el.className); startClassNames = $w(startClassNames); destClassNames = $w(destClassNames);
	  var resultClassNames = currentClassNames.concat(destClassNames).reject(function(e) { return startClassNames.include(e); });
		AnimationAdapter.animate(el, resultClassNames.join(" "), animationOptions);
	}
};

var ArrayAnimationAdapter = {
	animate : function(destClassNames, animationOptions) {
		AnimationAdapter.animate(this, destClassNames, animationOptions);
	}
};

Element.addMethods(AnimationAdapter);
Object.extend(Array.prototype, ArrayAnimationAdapter); 
