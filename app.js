var fs = require('fs');

// CHALLENGE 1
var chal1Data = fs.readFile('challenge1/info.txt', 'utf8', (err, data1) => {
  console.log(data1)
})

//CHALLENGE 2
var chal2Data = fs.readFileSync('challenge2/info.txt', 'utf8');
chal2Data = `${chal2Data} Luke, Chris, Nisha, Alec, Eric, Tony, David`;
fs.writeFileSync('challenge2/info.txt', chal2Data);

//CHALLENGE 3
fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt');

//CHALLENGE 4
fs.mkdirSync('./challenge4/copyfolder');
fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');

//CHALLENGE 5
var chal5Data = fs.readFileSync('challenge5/info.txt', 'utf8');
chal5Data = chal5Data.replace(/-/g, ' ');
fs.writeFileSync('challenge5/info.txt', chal5Data);

//CHALLENGE 6
var chal6Files = fs.readdirSync('./challenge6/');
console.log(chal6Files.filter(file => file.includes('.txt')));
