const options = require('./data')
const User = require('./controller/user');

let jogar = new User({ opt : options}).game();

jogar

//const gameby = require('./data/gameby')

//console.log(options)
//console.log(gameby)