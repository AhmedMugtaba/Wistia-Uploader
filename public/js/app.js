var app = angular.module('App', []);

app.controller('MainController', function ctrlFunc() {
		window._wapiq = window._wapiq || [];
		_wapiq.push(function(W) {
		  window.wistiaUploader = new W.Uploader({
		    accessToken: "2b201c56dbaa580cc73bb8e992a1fccda2b2a73e34392b186a914ddef1f49e2c",
		    dropIn: "wistia_uploader",
		    projectId: "fknkmkfiay"
		  });
		});

});
	
