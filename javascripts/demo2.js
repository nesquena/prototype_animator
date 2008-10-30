document.observe('dom:loaded', function() {
	var movingBox = new MovingBox($('one'));
  $('one').observe('click', function() { movingBox.clicked(); });
});

var MovingBox = Class.create({
	initialize : function(element) {
		this.element = element;
	  this.currentPosition = 0;
	  this.element.addClassName('top left');
		this.positions = [ 'top left blue', 'top right green', 'bottom right red', 'bottom left purple'];	
	},
	clicked : function() {
		var nextPosition = this.currentPosition + 1;
		if (nextPosition == this.positions.length) { nextPosition = 0; }
		this.setPosition(nextPosition);
	},
	setPosition : function(index) {
		var currentStyles = this.getStylesAt(this.currentPosition);
		this.currentPosition = index;
		var nextStyles = this.getStylesAt(this.currentPosition);
		this.element.animateSwap(currentStyles, nextStyles);
	},
 	getStylesAt : function(positionIndex) {
		return this.positions[positionIndex];
	}
});
