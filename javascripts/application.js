document.observe('dom:loaded', function() {
	var box = new MovingBox($('one'));
  $('one').observe('click', box.clicked.bind(box));
});

var MovingBox = Class.create({
	initialize : function(element) {
		this.element = element;
	  this.positions = [ 'top left', 'top right', 'bottom right', 'bottom left'];	
	  this.currentPosition = 0;
	  this.setPosition(0);
	},
	clicked : function() {
		this.incrementPosition();
	},
	incrementPosition : function() {
		var nextPosition = (this.currentPosition == this.positions.length - 1) ? 0 : (this.currentPosition + 1)
		this.setPosition(nextPosition)
	},
	setPosition : function(index) {
		var currentStyles = this.getStylesAt(this.currentPosition);
		this.currentPosition = index;
		var nextStyles = this.getStylesAt(this.currentPosition);
		if (currentStyles == nextStyles) { currentStyles = '' }
		this.element.animateSwap(currentStyles, nextStyles);
	},
 	getStylesAt : function(positionIndex) {
		return this.positions[positionIndex];
	}
});
