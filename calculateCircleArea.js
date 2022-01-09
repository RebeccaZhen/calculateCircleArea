let radius;
const readline = require('readline').createInterface({
	input: process.stdin
	output: process.stdout
})

readline.question('Enter your radius: ', radius => {
	console.log (Math.PI * radius * radius)
})