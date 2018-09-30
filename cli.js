const { spawn } = require('child_process');
const util = require('util');
console.input = function() {this._stdout.write(util.format.apply(this, arguments));};

const c = require('chalk');
var arg = process.argv;
const $ = (str)=>console.log('[ '+c.green('TealDuck')+' ] '+str);
process.title = "TealDuck CLI";


var lines = process.stdout.getWindowSize()[1];for(var i = 0; i < lines; i++) {console.log('\r\n');}process.stdout.write('\033c');

console.log(c.grey("\n  Welcome to ")+c.green("Teal Duck CLI 1.0.0\n"));

if(arg[2]){
	switch(arg[2]){
	case 'about':
	console.input(
		c.green('Teal Duck CLI 1.0.0')
	);
	break;
	default:
	$(
		c.red('Unknown Argument')
	);
}
}
var stdin = process.openStdin();

console.input('[ '+c.green('TealDuck')+' ] ');
stdin.addListener("data", function interact(d) {
   var command = d.toString().trim();
   var cli = ()=>{
   	switch(command){
   	case 'exit':
   	$(
   		'Exiting ...'
   	);
   	process.exit();
   	break;
   	case 'about':
   	$(
   		'Its tealduck ...'
   	);
   	break;
   	case 'server':
   	$(
   		'Turning Server ON'
   	);
   	server();
   	break;
   default:
   	$(
   		c.red('Not a valid command.')
   	);
   	}
   	console.input('[ '+c.green('TealDuck')+' ] ');
	};
	cli();
});
var server={};
server.serve = ()=>{
	serv = spawn(arg[0], ['server.js']);
	serv.stdout.on('data', (data) => {console.input(c.green('Server ')+data.toString());console.input('[ '+c.green('TealDuck')+' ] ');});
}