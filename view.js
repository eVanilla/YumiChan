const {ipcRenderer} = require('electron')
let width
	,height
	,full_width
	,full_height
	,random_number;

function random_n(min, max) {
	return Math.round(Number(Math.random() * (max - min) + min));
}

ipcRenderer.send('data-sender', ['Hi!'])
ipcRenderer.on('get_primary_resolution', (event, arg) => {  
	console.log(arg);
	full_width  = arg[0];
	full_height = arg[1]; 
})
// console.log(random_number);                                                       
setInterval(function() {
	// console.log(random_number);                                                       
	width 	= random_n(0,full_width)
	height 	= random_n(0,full_height)
	ipcRenderer.send('random_reso', [width,height])
	
}, 5000);



	// i = x
	// let walker = setInterval(function() {
	// 	while(true) {
	// 		width 	= random_n(0,screen_resolution[0])
	// 		console.log(`first width => ${width}`);
	// 		if(i < width) {
	// 			while(i < width) {
	// 				console.log(`current +i => ${i}`);
	// 				win.setPosition(i, y)
	// 				i += 1
	// 			}
	// 		} else {
	// 			while(i > width) {
	// 				console.log(`current -i => ${i}`);
	// 				win.setPosition(i, y)
	// 				i -= 1
	// 			}
	// 		}
	// 		i = width;
	// 		console.log(`latest i => ${i}`);
	// 		console.log(`latest width => ${width}`);
	// 		console.log('end of the loop');
	// 		break;
	// 	}
	// },5000)

