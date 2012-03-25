var CloseAnimation = function() {
	var options = {
		height : 0,
		width : 0,
		bottom : 0,
		right : 0
	};
	if(Ti.Platform.name == 'android') {
		options.navBarHidden = true;
	}
	var w = Titanium.UI.createWindow(options);
	var a = Titanium.UI.createAnimation();

	// NOTE: good example of making dynamic platform height / width values
	// iPad vs. iPhone vs Android etc.
	a.height = Titanium.Platform.displayCaps.platformHeight;
	a.width = Titanium.Platform.displayCaps.platformWidth;
	a.duration = 300;

	this.w = w;
	this.a = a;

}

CloseAnimation.prototype = {
	getwindow : function() {
		return this.w;
	},
	getanimation : function() {
		return this.a;
	}
}

module.exports.CloseAnimation = CloseAnimation;