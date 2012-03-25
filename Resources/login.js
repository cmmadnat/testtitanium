var CloseAnimation = require('/module/closeanimation').CloseAnimation;

//  CREATE FIELD ONE
//
var Class = function() {
	var loginview = Titanium.UI.createWindow({
		title : "Gold Bullion App"
	});
	loginview.backgroundColor = '#FFEA9B';
	loginview.barColor = '#E31E1E';
	loginview.layout = "vertical";
	
	var save, forgetlink;
	save = forgetlink = {};

	createcontrol(loginview, save, forgetlink);

	// interaction
	save.addEventListener("click", function() {
		var animation = new CloseAnimation();
		
		var w = animation.getwindow();
		var a = animation.getanimation();
		w.backgroundColor = "#336699";

		// create a button to close window
		var b = Titanium.UI.createButton({
			title : 'Close',
			height : 30,
			width : 150
		});
		w.add(b);
		b.addEventListener('click', function() {
			a.height = 0;
			a.width = 0;
			w.close(a);
		});

		w.open(a);
	})
	forgetlink.addEventListener("click", function() {
		var animation = new CloseAnimation();

		var w = animation.getwindow();
		var a = animation.getanimation();

		// create a button to close window
		var b = Titanium.UI.createButton({
			title : 'Close',
			height : 30,
			width : 150
		});
		w.add(b);
		b.addEventListener('click', function() {
			a.height = 0;
			a.width = 0;
			w.close(a);
		});
		w.open(a);
	});
	this.loginview = loginview;
}

Class.prototype = {
	open : function() {
		this.loginview.open();
	}
}
module.exports.Login = Class;



function createcontrol(loginview, save, forgetlink) {
	var header = Ti.UI.createView({
		height : 100,
		top : 20,
		backgroundColor : '#FFEA9B'
	});
	var logo = Titanium.UI.createImageView({
		image : '/logo.png',
		height : 'auto',
		width : 'auto',
		textAlign : 'center'
	});
	header.add(logo);
	loginview.add(header);

	var firstName = Titanium.UI.createLabel({
		color : '#000',
		text : 'Username',
		top : 20,
		left : 30,
		width : 100,
		height : 'auto'
	});

	loginview.add(firstName);

	var firstNameField = Titanium.UI.createTextField({
		hintText : 'enter first name',
		height : 'auto',
		top : 10,
		left : 30,
		right : 30,
		//width:250,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	loginview.add(firstNameField);

	//
	//  CREATE FIELD TWO
	//
	var lastName = Titanium.UI.createLabel({
		color : '#000',
		text : 'Password',
		top : 10,
		left : 30,
		width : 100,
		height : 'auto'
	});

	loginview.add(lastName);

	var lastNameField = Titanium.UI.createTextField({
		hintText : 'enter first name',
		height : 'auto',
		top : 10,
		left : 30,
		right : 30,
		passwordMask : true,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	loginview.add(lastNameField);

	//
	// CREATE BUTTON
	//
	var save = Titanium.UI.createButton({
		title : 'Save my Information',
		top : 20,
		left : 60,
		right : 60,
		height : "auto"
	});
	loginview.add(save);

	// forget password
	var forgetlink = Titanium.UI.createLabel({
		top : 20,
		autoLink : Titanium.UI.Android.LINKIFY_ALL,
		text : "Forget Password?",
		height : 'auto',
		width : 'auto',
		shadowColor : '#aaa',
		shadowOffset : {
			x : 5,
			y : 5
		},
		color : '#900',
		font : {
			fontSize : 15
		},
		textAlign : 'center'
	})
	loginview.add(forgetlink);
}