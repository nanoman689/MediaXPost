"use strict";
this.default_windowbootstrap = this.default_windowbootstrap || {};
(function(_) {
  var window = this;
	try {
		window.location.search && window.addEventListener("load", function() {
			window.chrome.runtime.getBackgroundPage(function(a) {
				a.__onExtWindowLoad(window)
			})
		});
	} catch (e) {
		_._DumpException(e)
	}

}).call(this, this.default_windowbootstrap);
