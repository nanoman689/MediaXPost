/*!
 * MediaXPost v2016.1023 -
 * https://github.com/chronosis/MediaXPost
 * Copyright (C) 2016 Jay Reardon <jayreardon@gmail.com>
 * All Rights Reserved
 */
var w = 1000;
var h = 800;
var windowOptions = {
	id: 'mediaxpost',
	outerBounds: {
		width: w,
		height: h,
		left: Math.floor((window.screen.width - w) / 2),
		top: Math.floor((window.screen.height - h) / 2),
	},
	focused: true,
	visibleOnAllWorkspaces: true,
	alwaysOnTop: false,
	hidden: false,
	resizable: true,
	state: 'normal',
	frame: 'chrome'
}

chrome.app.runtime.onLaunched.addListener(function (launchData) {
  chrome.app.window.create('index.html', windowOptions)
})
