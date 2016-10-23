var windowOptions = {
	id: "mediaxpost",
	outerBounds: {
		width: 800,
		height: 500,
		top: Math.floor((window.screen.height - 500) / 2),
		left: Math.floor((window.screen.width - 800) / 2),
	},
	focused: true,
	visibleOnAllWorkspaces: true,
	alwaysOnTop: false,
	alphaEnabled: true,
	hidden: false,
	resizable: true,
	state: "normal"
}
window.chrome.app.window.create("index.html");
