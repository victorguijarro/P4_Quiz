const figlet = require('figlet');
const chalk = require('chalk');

/**
* Dar color a un string
*
* 
*
*/
const colorize = (msg,color) => {
    if (typeof color !== "undefined") {
        msg = chalk[color].bold(msg);
    }

    return msg;
};

/**
* Escribe un mensaje de log
*
*
*/

const log = (msg,color) => {
    console.log(colorize(msg,color));
};

/**
* Escribe un mensaje de log grande
*
*
*
*/
const biglog = (msg,color) => {
    log(figlet.textSync(msg, {horizontalLayout: 'full' }), color);
};
/**
* Escribe el mensaje de error
*
*
*/
const errorlog = (emsg) => {
    console.log(`${colorize("Error", "red")}: ${colorize(colorize(emsg, "red"), "bgYellowBright")}`);
};

// Para exportarlos en vez de hacer export.algo
exports = module.exports = {
    colorize,
    log,
    biglog,
    errorlog
};