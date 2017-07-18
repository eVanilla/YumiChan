const electron 	= require('electron')
const {ipcMain} = require('electron')
const {app, BrowserWindow} = electron
let  n
	,i
	,i2
	,width
	,height;

function random_n(min, max) {
	return Math.round(Number(Math.random() * (max - min) + min));
}

app.on('ready', () => {
	let win = new BrowserWindow({
		webPreferences: {
			nodeIntegrationInWorker: true
		},
	    name: "Yumi Chan",
	    width: 180,
	    height: 300,
	    transparent: true,
	    frame: false,
	    toolbar: false,
	    devTools: true,
	    alwaysOnTop: true,
	    resizable: false

	    // titleBarStyle: 'hidden'
	})
	// win.setIgnoreMouseEvents(true)
	let screenElectron = electron.screen;
	let mainScreen = screenElectron.getPrimaryDisplay();
	let dimensions = mainScreen.size;
	let screen_resolution = [dimensions.width,dimensions.height];
	const window_size = win.getSize()
	let y = screen_resolution[1] - window_size[1];
	let x = screen_resolution[0] - window_size[0];



	console.log(x + " " + y);
	win.setPosition(x, y)
	// console.log(electron.screen.getPrimaryDisplay().workAreaSize)



	win.loadURL(`file://${__dirname}/index.html`)

	ipcMain.on('data-sender', (event, arg) => {  
	    console.log(arg);
	    event.sender.send('get_primary_resolution', screen_resolution);
	});

	// ipcMain.on('random_reso', (event, arg) => { 

	i = x
	let walker = setInterval(function() {
		while(true) {
			width 	= random_n(0,(screen_resolution[0] - 150))
			console.log(`first width => ${width}`);
			if(i < width) {
				while(i < width) {
					// clearInterval(walker)
					// setInterval(function() {
						console.log(`current +i => ${i}`);
						win.setPosition(i, y)
						i += 1
					// },1000)
				}
			} else {
				while(i > width) {
					// clearInterval(walker)
					// setInterval(function() {
						console.log(`current -i => ${i}`);
						win.setPosition(i, y)
						i -= 1
					// },1000)
				}
			}
			i = width;
			console.log(`latest i => ${i}`);
			console.log(`latest width => ${width}`);
			console.log('end of the loop');
			break;
		}
	},5000)
})

